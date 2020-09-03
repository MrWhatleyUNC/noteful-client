import React, { Component } from "react";
import NotefulForm from "../NotefulForm/NotefulForm";
import ApiContext from "../ApiContext";

export default class AddFolder extends Component {
  state = {
    name: "",
  };

  static contextType = ApiContext;
  validateName() {
    const name = this.state.name;
    if (name.length <= 0) {
      return "Name is required";
    }
  }
  updateName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  render() {
    return (
      <NotefulForm
        className="add-folder"
        onSubmit={(e) => this.context.addFolder(e)}
      >
        <label htmlFor="new-folder">Folder Name:</label>
        <input
          onChange={(event) => this.updateName(event)}
          name="new-folder"
          id="new-folder"
          type="text"
          required
        />
        <button type="submit">Submit</button>
        <p>{this.validateName()}</p>
      </NotefulForm>
    );
  }
}
