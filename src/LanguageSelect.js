import React from "react";
import PropTypes from "prop-types";

class LanguageSelect extends React.Component {
  render() {
    return (
      <select
        style={styles.selectTag}
        name={this.props.name}
        onChange={this.props.onChange}
      >
        {this.props.options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    );
  }
}

LanguageSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

const styles = {
  selectTag: {
    width: 306,
    height: 38,
    marginTop: 16
  }
};

export default LanguageSelect;
