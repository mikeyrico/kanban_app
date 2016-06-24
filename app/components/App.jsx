import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = NoteStore.getState();
  }

  componentDidMount() {
    NoteStore.listen(this.storeChanged);
  }

  componentWillUnmount() {
    NoteStore.unlisten(this.storeChaged);
  }

  storeChanged = (state) => {
    // this syntax is what is known a property initializer
    // this is necessary or else the this would not get the propert binding
    // since it defaults to `undefined` in strict mode
    this.setState(state);
  }

  render() {
    const { notes } = this.state;

    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes
        notes={notes}
        onEdit={this.editNote}
        onDelete={this.deleteNote} />
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

    const notes = this.state.notes.map(note => {
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


