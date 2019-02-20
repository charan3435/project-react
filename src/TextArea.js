import React from "react";
import PropTypes from "prop-types";

class TextArea extends React.Component {
  render() {
    return (
      <textarea
        style={styles.textArea}
        placeholder={this.props.placeholder}
        name={this.props.name}
        onChange={this.props.onChange}
      />
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const styles = {
    textArea: {
        height: 70,
        width: 300
    }
}

export default TextArea;
