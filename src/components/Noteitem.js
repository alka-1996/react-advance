import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';

const Noteitem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote}= context;
    const {note,updateNote}=props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
  <div className="card-body">
    <div className="d-flex align-items-center">
    <h5 className="card-title">{note.title}</h5>
    <i className="fa fa-trash mx-2 " onClick={()=>{deleteNote(note)}}/>  
    <i className="fa fa-pencil mx-2" onClick={()=>{updateNote(note)}}/>
    </div>
     <p className="card-text">{note.description}</p>
    
    
  </div>
</div>
    </div>
  )
}

export default Noteitem
