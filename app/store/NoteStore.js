import uuid from 'node-uuid';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';


class NoteStore {
  constructor() {
    this.bindActions(NoteActions); // maps each action to a method by name
    this.notes = [];
  }

  create(note) {

  }

  update(updtatedNote) {

  }

  delete(id) {

  }
}

export default alt.createStore(NoteStore, 'NoteStore');
