import uuid from 'node-uuid';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';


class NoteStore {
  constructor() {
    this.bindActions(NoteActions); // maps each action to a method by name
    this.notes = [];
    this.exportPublicMethods({
      getNotesByIds: this.getNotesByIds.bind(this)
    });
  }

  create(note) {
    const notes = this.notes;

    note.id = uuid.v4();
    this.setState({
      notes: [...notes, note]
    });
    return note;
  }

  update(updatedNote) {
    const notes = this.notes.map(note => {
      if (note.id === updatedNote.id) {
        return Object.assign({}, note, updatedNote);
      }
      return note;
    });
    this.setState({notes});
  }

  delete(id) {
    const notes = this.notes.filter(note => note.id !== id);
    this.setState({notes});
  }

  getNotesByIds(ids) {
    return (ids || []).map(id => {
      return this.notes.filter(note => id === note.id);
    })
    .filter(a => a.length)
    .map(a => a[0]);
  }
}

export default alt.createStore(NoteStore, 'NoteStore');
