import React, { Component } from "react";
import NotefulForm from "../NotefulForm/NotefulForm";
import ApiContext from "../ApiContext";

export default class AddNote extends Component {
  static contextType = ApiContext;

  render() {
    return (
      <NotefulForm>
        <label htmlFor="new-note"> Note Name: </label>
        <input name="new-note" id="new-note" type="text" />
        <label htmlFor="folder">Note Folder:</label>
        <select name="folder" id="folder">
          {this.context.folders.map((folder) => (
            <option value={folder.name}>{folder.name}</option>
          ))}
        </select>
        <label htmlFor="note-content"> Note Content: </label>
        <textarea name="note-content" id="note-content" />
      </NotefulForm>
    );
  }
}
