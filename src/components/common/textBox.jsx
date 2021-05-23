import React, { Component } from "react";

export default class TextBox extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "40px",
        }}
      >
        <label
          style={{
            fontSize: "11px",
            color: "rgb(13, 91, 207)",
          }}
        >
          {this.props.name}
        </label>
        <input
          type="text"
          style={{
            borderRadius: "3px",
            borderWidth: "1px",
            marginTop: "-6px",
            width: "200px",
            height: "40px",
            paddingLeft: "10px",
            borderColor: "rgb(13, 91, 207)",
            borderStyle: "solid",
          }}
        />
      </div>
    );
  }
}
