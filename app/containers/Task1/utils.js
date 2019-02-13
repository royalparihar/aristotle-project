import reduce from 'lodash/reduce';
import forIn from 'lodash/forIn';
import values from 'lodash/values';
import { Groups, Sections } from './constant';

const getMarksArray = (marks) => reduce(marks, (arr, value, key) => {
  arr.push({
    qId: key,
    marks: Number(value),
  });
  return arr;
}, []);

const getGroupDetails = (qId) => {
  let group = {};
  forIn(Groups, (value, key) => {
    if (value.ques.find((q) => q === qId)) {
      group = {
        id: key,
        ques: value.ques.find((q) => q.id === qId),
        maxQues: value.maxQues,
      };
    }
  });
  return group;
};
export const getFinalScore = (marks) => {
  const marksArray = getMarksArray(marks);
  const groups = {};
  marksArray.forEach((item) => {
    const itemGroup = getGroupDetails(item.qId);
    if (!groups[itemGroup.id]) {
      groups[itemGroup.id] = {};
    }
    if (!groups[itemGroup.id].maxQues) {
      groups[itemGroup.id].maxQues = itemGroup.maxQues;
    }
    if (!groups[itemGroup.id].groupMarks) {
      groups[itemGroup.id].groupMarks = [item.marks];
    } else {
      groups[itemGroup.id].groupMarks.push(item.marks);
    }
  });
  const groupsScore = {};
  forIn(groups, (value, key) => {
    const sortedMarks = value.groupMarks.sort((a, b) => b - a).slice(0, value.maxQues);
    let score = 0;
    sortedMarks.forEach((val) => {
      score += val;
    });
    groupsScore[key] = score;
  });
  const sectionsScore = {};
  forIn(Sections, (value, key) => {
    let sectionScore = 0;
    const sectionGroupMarks = [];
    value.groups.forEach((groupId) => {
      sectionGroupMarks.push(groupsScore[groupId]);
    });
    sectionGroupMarks.sort((a, b) => b - a).slice(0, value.maxGroup).forEach((val) => {
      sectionScore += val;
    });
    sectionsScore[key] = sectionScore;
  });
  let totalScore = 0;
  values(sectionsScore).forEach((val) => {
    totalScore += val;
  });
  return totalScore;
};
