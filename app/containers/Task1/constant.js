export const Questions = {
  Q1: {
    maxMark: 5,
  },
  Q2: {
    maxMark: 5,
  },
  Q3: {
    maxMark: 4,
  },
  Q4: {
    maxMark: 6,
  },
  Q5: {
    maxMark: 7,
  },
  Q6: {
    maxMark: 3,
  },
  Q7: {
    maxMark: 10,
  },
  Q8: {
    maxMark: 10,
  },
  Q9: {
    maxMark: 10,
  },
  Q10: {
    maxMark: 10,
  },
  Q11: {
    maxMark: 10,
  },
  Q12: {
    maxMark: 10,
  },
  Q13: {
    maxMark: 10,
  },
  Q14: {
    maxMark: 10,
  },
};
export const Groups = {
  G1: {
    ques: ['Q1', 'Q2'],
    maxQues: 2
  },
  G2: {
    ques: ['Q3', 'Q4'],
    maxQues: 2
  },
  G3: {
    ques: ['Q5', 'Q6'],
    maxQues: 2
  },
  G4: {
    ques: ['Q7', 'Q8', 'Q9'],
    maxQues: 3
  },
  G5: {
    ques: ['Q10', 'Q11', 'Q12', 'Q13', 'Q14'],
    maxQues: 3
  },
};

export const Sections = {
  S1: { groups: ['G1', 'G2', 'G3'], maxGroup: 2 },
  S2: { groups: ['G4', 'G5'], maxGroup: 2 },
};

// export const Groups = {
//   G1: {
//     ques: [{
//       id: 'Q1',
//       ...Questions.Q1,
//     }, {
//       id: 'Q2',
//       ...Questions.Q2,
//     }],
//     maxQues: 2
//   },
//   G2: {
//     ques: [{
//       id: 'Q3',
//       ...Questions.Q3,
//     }, {
//       id: 'Q4',
//       ...Questions.Q4,
//     }],
//     maxQues: 2
//   },
//   G3: {
//     ques: [{
//       id: 'Q5',
//       ...Questions.Q5,
//     }, {
//       id: 'Q6',
//       ...Questions.Q6,
//     }],
//     maxQues: 2
//   },
//   G4: {
//     ques: [{
//       id: 'Q7',
//       ...Questions.Q7,
//     }, {
//       id: 'Q8',
//       ...Questions.Q8,
//     }, {
//       id: 'Q9',
//       ...Questions.Q9,
//     }],
//     maxQues: 3
//   },
//   G5: {
//     ques: [
//       {
//         id: '10',
//         ...Questions.Q10,
//       }, {
//         id: '11',
//         ...Questions.Q11,
//       }, {
//         id: '12',
//         ...Questions.Q12,
//       }, {
//         id: '13',
//         ...Questions.Q13,
//       }, {
//         id: '14',
//         ...Questions.Q14,
//       }],
//     maxQues: 3
//   },
// };
