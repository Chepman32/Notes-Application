import React, {useState, useContext} from "react";
import { AlertContext } from "./context/alert/alertContext";
const Form = () => {
    const [value, setValue] = useState(" ");
    const alert = useContext(AlertContext);
    const submitHandler = event => {
        event.preventDefault();
        if(value.trim()) {
            alert.show("Заметка была создана", "success");
            setValue(" ")
        }
        else {
            alert.show("Введите текст заметки");
        }
    }
    return (
        <form onSubmit={submitHandler}>
        <div className="form-group">
            <input onChange={event => setValue(event.target.value)}value={value} className="form-control" type="text" placeholder="Введите название заметки"/>
        </div>
        </form>
    )
};
export default Form;