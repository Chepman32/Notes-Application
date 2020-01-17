import React from "react";
const Notes = ({notes, onRemove}) => (
    <ul className="list-group">
        {notes.map(note => <li className="list-group-item note" key={note.id}>
            <div>
            <strong>{note.title}</strong>
        <small>{note.date}</small>
            </div>
        <button onClick={() => onRemove(note.id)} type="button" className="btn btn-danger brn-sm">&times;</button>
        </li>)}
    </ul>
)
export default Notes;