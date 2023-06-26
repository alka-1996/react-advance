import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "https://jsonplaceholder.typicode.com"
    const notesInitial = [
        
        {
            "_id": 8,
            "user": "613dc5e3e4037cd4734e066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2021-09-03T14:20:09.668z",
            "_v": 0
        }
    ]



    const [notes, setNotes] = useState(notesInitial)

    // Add a Note
    const getNotes = async (title, description, tag) => {
        //TODO API call
        //  const response = await fetch(`${host}/posts`, {
        //     method: "POST",
        //      header: {
        //     "Content-Type": "application/json",
        //     },
        //      body: JSON.stringify({ title, description, tag })
        //  });
           //  const note = await response.json();
        setNotes(notes.concat({"title": title,
        "description": description,
        "tag": tag}))
    }

    // delete a Note
    const deleteNote = async (id) => {
        // TODO API call
        const response = await fetch(`${host}/posts`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        const newNotes = notes.filter((note)=>{return note!==id})
        setNotes(newNotes)
    }


    // Edit a Note
    const editNote = async ( id,title, description, tag) => {
        const response = await fetch(`${host}/posts`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let Index = 0; Index < newNotes.length; Index++) {
            const element = newNotes[Index];
            if (element._id === id) {
                newNotes[Index].title =title;
                newNotes[Index].description =description;
                newNotes[Index].tag =tag;
                break;
            }
        };
        setNotes(newNotes);
    }


    return (
        <NoteContext.Provider value={{ notes, getNotes, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )

}
export default NoteState;





