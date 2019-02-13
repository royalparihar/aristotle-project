import React from 'react';
import { Helmet } from 'react-helmet';
import SubjectContainer from 'components/SubjectContainer';
import SearchBox from 'components/SearchBox';
import NavLink from 'components/NavLink';
import { SUBJECTS } from './constants';
import './style.scss';

export default class Task2Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      subjects: SUBJECTS,
      selectValue: 'chapters',
    };
  }

  onSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const { selectValue } = this.state;
    const searchSubjects = SUBJECTS.map((subject) => {
      if (selectValue === 'chapters') {
        const filteredChapters = subject.chapters.filter((chapter) => chapter.name.toLowerCase().includes(value));
        return {
          ...subject,
          chapters: filteredChapters
        };
      }
      const mappedChapters = subject.chapters.map((chapter) => {
        const filteredTopics = chapter.topics.filter((topic) => topic.toLowerCase().includes(value));
        return {
          ...chapter,
          topics: filteredTopics
        };
      });
      return {
        ...subject,
        chapters: mappedChapters
      };
    });
    this.setState({
      searchValue: value,
      subjects: searchSubjects,
    });
  }

  onSelect = (e) => {
    const value = e.target.value.toLowerCase();
    this.setState({
      selectValue: value,
    });
  }

  render() {
    const { subjects, searchValue, selectValue } = this.state;
    return (
      <article>
        <Helmet>
          <title>Task 2</title>
          <meta name="description" content="Front end application" />
        </Helmet>
        <div className="task2-page">
          <div className="header-wrapper">
            <div className="nav-bar-wrapper">
              <NavLink to="/" label="Back" />
            </div>
            <div>
              <SearchBox
                searchValue={searchValue}
                handleOnChange={this.onSearch}
                selectValue={selectValue}
                onSelect={this.onSelect}
              />
            </div>
          </div>
          <h1>Task 2</h1>
          {subjects.map((subject) => (
            <SubjectContainer key={subject.name} subject={subject} />
          ))}
        </div>
      </article>
    );
  }
}
