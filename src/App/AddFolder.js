import React, { Component } from "react";
import NotefulForm from "../NotefulForm/NotefulForm";
import ApiContext from "../ApiContext";

export default class AddFolder extends Component {
  static contextType = ApiContext;
  state = {
    error: null,
  };
  validateName = (event) => {
    event.preventDefault();
    if (event.target["new-folder"].value.length > 0) {
      this.context.addFolder(event);
      this.setState({ error: null });
    } else {
      this.setState({
        error: "Name is required",
      });
    }
  };

  render() {
    return (
      <NotefulForm
        className="add-folder"
        onSubmit={(event) => this.validateName(event)}
      >
        <label htmlFor="new-folder">Folder Name:</label>
        <input name="new-folder" id="new-folder" type="text" />
        <button type="submit">Submit</button>
        <p>{this.state.error}</p>
      </NotefulForm>
    );
  }
}
