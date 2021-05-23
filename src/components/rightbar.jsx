import React, { Component } from "react";

import "./styles/rightbar.scss";
import TextBox from "./common/textBox";
import ImageBtn from "./common/imageBtn";

export default class Rightbar extends Component {
  render() {
    return (
      <div className="rightContainer">
        <i className="fa fa-building-o icon" />
        <label className="label">Organisation / Business details</label>
        <div className="box1Container">
          <TextBox name="Business Name" />
          <TextBox name="Identification Code" />
        </div>
        <div className="box11Container">
          <TextBox name="Old Balance" />
          <TextBox name="Loyality Type" />
        </div>

        <div className="box2Container">
          <i className="fa fa-user icon" />
          <label className="label">Primary contact person</label>
          <div className="box1Container">
            <TextBox name="Name" />
            <TextBox name="Phone Number" />
            <TextBox name="NIC/Passport" />
            <ImageBtn />
          </div>
        </div>

        <div className="box2Container">
          <i className="fa fa-user icon" />
          <label className="label">Additional attaches</label>
          <div className="box1Container">
            <TextBox name="Name" />
            <TextBox name="Phone Number" />
            <TextBox name="NIC/Passport" />
            <ImageBtn />
          </div>
          <i className="fa fa-user icon" style={{ marginTop: "52px" }} />
          <div className="box11Container">
            <TextBox name="Name" />
            <TextBox name="Phone Number" />
            <TextBox name="NIC/Passport" />
            <ImageBtn marginTop="15" />
          </div>
        </div>
        <i
          className="fa fa-plus"
          style={{
            float: "right",
            marginTop: "20px",
            marginRight: "10px",
            fontSize: "25px",
            color: "#515A5A",
            cursor: "pointer",
          }}
        />
      </div>
    );
  }
}
