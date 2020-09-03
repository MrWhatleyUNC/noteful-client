import React, {Component} from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import ApiContext from '../ApiContext'

export default class AddNote extends Component{
    static contextType = ApiContext


    render(){
        return(
            <NotefulForm className='add-note' onSubmit={(e)=>this.context.addNote(e)}>
                <label htmlFor='new-note'>Note Name:</label>
                <input name='new-note' id='new-note' type='text'/>
                <select name='folder' id='folder'>
                    {this.context.folders.map((folder) => (
                        <option key={folder.id} value={folder.id}>{folder.name}</option>
                    ))}
                </select>
                <label htmlFor='note-content'>Note Content:</label>
                <textarea name='note-content' id='note-content' type='text'/>
                <button type="submit">Submit</button>
            </NotefulForm>
        )
    }
}