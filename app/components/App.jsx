import AltContainer from 'alt-container';
import React from 'react';
import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';
// import Notes from './Notes.jsx';
// import NoteActions from '../actions/NoteActions';
// import NoteStore from '../stores/NoteStore';
// altContainer injects store data into components
// simplifies connection logic

export default class App extends React.Component {


  render() {

    return (
      <div>
        <button className="add-lane" onClick={this.addLane}>+</button>
        <AltContainer
          stores={[LaneStore]} // Note that the argument to stores is an ARRAY
          inject={{
            lanes: () => LaneStore.getState().lanes || []
          }}
        >
          <Lanes
          // before wer were injecting notes here, not necessary with altContainer
          // notes will be passed down as props
          // since app is the parent, passes down to all child components
          // onEdit={this.editNote}
          // onDelete={this.deleteNote}
          />
        </AltContainer>
      </div>
    )
  }

  addLane() {
    LaneActions.create({name: 'New lane'});
  }
}


