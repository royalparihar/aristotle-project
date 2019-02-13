import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const QuesMarksInput = (props) => {
  const {
    maxValue, quesNumber, value, onChangeMarks
  } = props;
  return (
    <div
      key={quesNumber}
      className="input-wrapper"
    >
      <div>
        {quesNumber}
      </div>
      <div>
        <input
          id={`input_ques_${quesNumber}`}
          className="input-class"
          type="number"
          placeholder="0"
          max={maxValue}
          min={0}
          value={value}
          onChange={onChangeMarks}
        />
      </div>
    </div>
  );
};

QuesMarksInput.propTypes = {
  maxValue: PropTypes.number,
  quesNumber: PropTypes.number,
  value: PropTypes.string,
  onChangeMarks: PropTypes.func,
};

export default QuesMarksInput;
