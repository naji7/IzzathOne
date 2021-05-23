import React, { Component } from "react";

export default class ImageBtn extends Component {
  render() {
    return (
      <div
        style={{
          height: "40px",
          width: "40px",
          display: "inline-block",
          backgroundColor: "#D6EAF8",
          borderRadius: "50%",
          color: "white",
          textAlign: "center",
          marginLeft: "30px",
          marginTop: this.props.marginTop
            ? this.props.marginTop + "px"
            : "10px",
          boxShadow: "0px 2px 1px 1px #CACFD2",
          cursor: "pointer",
        }}
      >
        <i
          className="fa fa-image"
          style={{
            fontSize: "20px",
            marginTop: "10px",
            color: "rgb(13, 91, 207)",
          }}
        />
      </div>
    );
  }
}
