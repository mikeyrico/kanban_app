import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import AltContainer from 'alt-container';
// altContainer injects store data into components
// simplifies connection logic

export default class App extends React.Component {


  render() {

    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <AltContainer
          stores={[NoteStore]} // Note that the argument to stores is an ARRAY
          inject={{
            notes: () => NoteStore.getState().notes
          }}
        >
          <Notes
          // before wer were injecting notes here, not necessary with altContainer
          // notes will be passed down as props
          // since app is the parent, passes down to all child components
          onEdit={this.editNote}
          onDelete={this.deleteNote} />
        </AltContainer>
      </div>
    )
  }

  addNote = () => {
    NoteActions.create({task: 'new task'})
  };

  editNote = (id, task) => {
    if (!task.trim()) {
      return;
    }
    console.log('state is <><> ', this.state);
    const notes = NoteStore.getState().notes.map(note => {
      if (note.id === id && task) {
        note.task = task;
      }
      return note;
    });

    this.setState({notes});
  };

  deleteNote = (id, e) => {
    e.stopPropagation();
    NoteActions.delete(id);
  };
}


