//1:02:00
import React, { useReducer } from "react";
import axios from "axios";
import { FirebaseContext } from "./FirebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import {SHOW_LOADER, REMOVE_NOTE, ADD_NOTE, FETCH_NOTES} from "../types";
const url = "https://react-notes-eb409.firebaseio.com"
export const FirebaseState = ({children}) => {
    
    const initialState = {
        notes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState);
    const showLoader = () => dispatch({type: SHOW_LOADER});
    const fetchNotes = async () => {
        const res = await axios.get(`${url}`);
        const payload = Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        })
        dispatch({type: FETCH_NOTES, payload})
        console.log("fetchNotes", res.data)
    }
    const addNote = async title => {
        const note = {
            title,
            date: new Date().toJSON()
        }
        try {
            const res = await axios.post(`${url}/notes.json`, note);
            const payload = {
                ...note,
                id: res.data.name
            }
            dispatch({type: ADD_NOTE, payload})
        console.log("addNote", res.data);
        }
        catch(e) {
            throw new Error(e.message)
        }
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