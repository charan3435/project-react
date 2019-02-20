import React, { Component } from "react";
import TextArea from "./TextArea";
import NameTag from "./NameTag";
import LanguageSelect from "./LanguageSelect";

class App extends Component {
  names = [];
  state = {
    namesList: [],
    languagesList: ["english", "german", "chinese", "english-uk", "italian"]
  };

  handleNameChange = event => {
    let data = event.target.value.split("\n");
    this.names = data.filter(x => x !== "");
  };

  handleSelectChange = event => {
    this.setState({
      selectedLangage: event.target.value,
      namesList: this.names
    });
  };

  render() {
    return (
      <div>
        <TextArea
          placeholder="Enter names one per line"
          name="names"
          onChange={this.handleNameChange}
        />
        <br />
        <LanguageSelect
          options={this.state.languagesList}
          name="language"
          onChange={this.handleSelectChange}
        />
        <br />
        <br />
        {this.state.namesList.map((name, index) => (
          <NameTag
            language={this.state.selectedLangage}
            key={index}
            name={name}
          />
        ))}
      </div>
    );
  }
}

export default App;
