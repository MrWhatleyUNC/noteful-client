import React, { Component } from "react";
import NotefulForm from "../NotefulForm/NotefulForm";
import ApiContext from "../ApiContext";

export default class AddFolder extends Component {
  render() {
    return (
      <div>
        <NotefulForm>
          <label htmlFor="new-folder"> Folder Name: </label>
          <input name="new-folder" id="new-folder" type="text" />
        </NotefulForm>
      </div>
    );
  }
}
