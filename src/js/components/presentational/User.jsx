import React from "react";
import PropTypes from "prop-types";
const User = ({ image, name, mail }) => (
  <div className="user">
    <img src={image} />
    <p className="name">{name}</p>
    <a className="mail" href={"mailto:" + mail}>
      {mail}
    </a>
  </div>
);
User.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired
};
export default User;
