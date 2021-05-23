import React, { Component } from "react";

import Navbar from "./navbar";
import Rightbar from "./rightbar";
import Sidebar from "./sidebar";

export default class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar name="Create a customer" />
        <div style={{ display: "flex", justifyContent: "row" }}>
          <Sidebar />
          <Rightbar />
        </div>
      </React.Fragment>
    );
  }
}
