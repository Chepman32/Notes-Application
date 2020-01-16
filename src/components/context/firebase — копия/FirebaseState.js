import React, { useReducer } from "react";
import axios from "axios";
import { FirebaseContext } from "./FirebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import {SHOW_LOADER, REMOVE_NOTE} from "../types"
export const FirebaseState = ({children}) => {
    const url = "https://react-notes-eb409.firebaseio.com"
    const initialState = {
        notes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState);
    const showLoader = () => dispatch({type: SHOW_LOADER});
    const fetchNotes = async () => {
        const res = await axios.get(`${url}`)
    }
    const addNote = async title => {
        const note = {
            title,
            date: new Date().toJSON()
        }
        const res = axios.post(`${url}/notes.json`, note)
        console.log("addNote", res.data)
    }
    const removeNote = async id => {
        await axios.delete(`${url}/notes/${id}.json`);
        dispatch({type: REMOVE_NOTE, payload: id})
    } 
    return <FirebaseContext.Provider value={{
        fetchNotes,
        showLoader,
        addNote,
        removeNote,
        loading: state.loading,
        notes: state.notes
    }}>
        {children}
    </FirebaseContext.Provider>
}