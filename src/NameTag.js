import React from "react";
import PropTypes from "prop-types";

class NameTag extends React.Component {
  data = {
    english: "Good Morning",
    german: "Guten Morgen",
    chinese: "早上好",
    italian: "Buongiorno",
    "english-uk": "Good Moring"
  };
  render() {
    return (
      <div style={styles.nameDiv}>
        <p>
          {this.data[this.props.language]} {this.props.name} !
        </p>
      </div>
    );
  }
}

NameTag.protoTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
};

const styles = {
  nameDiv: {
    background: "#f1f1f1",
    padding: 8,
    margin: "4px 0",
    width: 300
  }
};

export default NameTag;
