import React, { useContext } from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group"
import { AlertContext } from "./context/alert/alertContext";
const Notes = ({notes, onRemove}) => {
    const alert = useContext(AlertContext);
    const removeHandler = note => {
        onRemove(note.id);
        alert.show("Заметка была удалена", "danger")
    }
    return <TransitionGroup component="ul">
        <ul className="list-group">
        {notes.map(note =>
        <CSSTransition key={note.id} classNames={"note"} timeout={2000}>
            <li className="list-group-item note">
            <div>
            <strong>{note.title}</strong>
        <small>{note.date}</small>
            </div>
        <button onClick={() => removeHandler(note)} type="button" className="btn btn-danger brn-sm">&times;</button>
        </li>
        </CSSTransition>) }
    </ul>
    </TransitionGroup>
}
export default Notes;