import React from 'react';
import Note from './Note.jsx';

export default ({ notes, onEdit, onDelete }) => {
  return (
    <ul className="notes">{
      notes.map(note => {
        return <li className="note" id={note.id}>
          <Note
          task={note.task}
          onEdit={onEdit.bind(null, note.id)}
          onDelete={onDelete.bind(null, note.id)} />
        </li>
      })
    }
  </ul>
  );
}
