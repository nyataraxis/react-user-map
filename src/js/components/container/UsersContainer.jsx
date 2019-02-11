import React, { Component } from "react";
import User from "../presentational/User.jsx";
import { connect } from "react-redux";
import { getUsers } from "../../actions/index";

export class UsersContainer extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.users.map(el => {
          return (
            <li key={el.id} className="list-group-item">
              <User
                name={el.properties.userName}
                image={el.properties.avatar}
                mail={el.properties.email}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.slice(0, 300)
  };
}
export default connect(
  mapStateToProps,
  { getUsers }
)(UsersContainer);
