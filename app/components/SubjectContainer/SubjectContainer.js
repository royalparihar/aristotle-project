import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import ChapterCard from 'components/ChapterCard';

const SubjectContainer = ({ subject }) => (
  <div className="subject-wrapper">
    <div className="header-title">
      Subject: {subject.name}
    </div>
    {subject.chapters.length
      ? subject.chapters.map((chapter) => (<ChapterCard key={chapter.name} chapter={chapter} />))
      : (
        <div className="no-result">
          No result found
        </div>
      )
    }
  </div>
);

SubjectContainer.propTypes = {
  subject: PropTypes.object
};

export default SubjectContainer;
