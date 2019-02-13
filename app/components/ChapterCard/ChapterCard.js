import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ChapterCard = ({ chapter }) => (
  <div className="card-wrapper">
    <div className="card-header">
      {chapter.name}
    </div>
    <div className="topic-container">
      {chapter.topics.map((topic) => (
        <div key={topic} className="topic-class">
          {topic}
        </div>)
      )}
    </div>
  </div>
);

ChapterCard.propTypes = {
  chapter: PropTypes.object
};

export default ChapterCard;
