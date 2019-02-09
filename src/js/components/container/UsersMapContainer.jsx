import React, { Component } from "react";
import { connect } from "react-redux";

export class UsersMapContainer extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
        <div id="map"></div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.slice(0, 10)
  };
}
export default connect(
  mapStateToProps,
  null
)(UsersMapContainer);
