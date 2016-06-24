import uuid from 'node-uuid';
import alt from '../libs/alt';
import LaneActions from '../actions/LaneActions';


class LaneStore {
  constructor() {
    this.bindActions(LaneActions);
    this.lanes = [];
  }

  create(lane) {
    const lanes - this.lanes;
    lane.id = uuid.v4();
    lane.notes = lane.notes || [];
    this.setState({
      lanes: [...this.lanes, lane];
    });
  }
}

export default alt.createStore(LaneStore, 'LaneStore');
