import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SearchBox = ({
  handleOnChange,
  placeholder,
  searchValue,
  onSelect,
  selectValue,
}) => (
  <div className="search-wrapper">
    <input
      type="text"
      placeholder={placeholder}
      value={searchValue}
      onChange={handleOnChange}
      className="inputBox"
    />
    <select value={selectValue} onChange={onSelect} className="form-control">
      <option value="chapters">Chapters</option>
      <option value="topics">Topics</option>
    </select>
    {/* <Icon classIcon={styles.icon} iconType={Icon.SEARCH} /> */}
  </div>
);

SearchBox.propTypes = {
  searchValue: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func,
  onSelect: PropTypes.func,
  selectValue: PropTypes.string,
};

export default SearchBox;
