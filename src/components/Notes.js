import React from "react";
const Notes = ({notes}) => {
    return <ul className="list-group">
        {notes.map(note => <li className="list-group-item note" key={note.id}>
            <div>
            <strong>{note.title}</strong>
        <small>{new Date().toLocaleDateString()}</small>
            </div>
        <button type="button" class="btn btn-danger brn-sm">&times;</button>
        </li>)}
    </ul>
};
export default Notes;