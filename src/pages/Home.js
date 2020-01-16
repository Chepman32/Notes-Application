import React, {Fragment, useContext, useEffect} from "react";
import Form from "../components/Form";
import Notes from "../components/Notes";
import { FirebaseContext } from "../components/context/firebase/FirebaseContext";
import Loader from "../components/Loader";
const Home = () => {
    const {loading, notes, fetchNotes} = useContext(FirebaseContext);
    useEffect(
        () => fetchNotes, [])
    return <Fragment>
        <Form/>
        <hr/>{
            loading ? Loader : <Notes notes={notes}/>
        }
    </Fragment>
};
export default Home;