import React, { Component } from "react";

import "./styles/navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navContainer">
        <div className="box1">
          <div className="d">D</div>
          <div className="dltr">TGL Management</div>
        </div>
        <div className="box2">
          <h4>{this.props.name}</h4>
          <div className="tgl">TGL</div>
        </div>
      </div>
    );
  }
}
