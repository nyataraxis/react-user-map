import React from "react";
import UsersContainer from "./container/UsersContainer.jsx";
import UsersMapContainer from "./container/UsersMapContainer.jsx";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Users</h2>
      <UsersContainer />
    </div>

    <div className="col-md-4 offset-md-1">
      <UsersMapContainer />
    </div>
  </div>
);

export default App;
