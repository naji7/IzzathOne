import React, { Component } from "react";

export default class SideButton extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: this.props.topSize ? this.props.topSize + "px" : "15px",
          cursor: "pointer",
          width: "auto",
        }}
      >
        <i className={"fa fa-" + this.props.icon} />
        &nbsp; &nbsp;
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: this.props.alignItem
              ? this.props.alignItem
              : "flex-start",
            minWidth: this.props.minWidth ? this.props.minWidth : "150px",
          }}
        >
          <a
            style={{
              fontSize: "13px",
              fontFamily: this.props.fontFamily
                ? " 'Quicksand', sans-serif"
                : "'Noto Sans', sans-serif",
              fontWeight: "500",
            }}
          >
            {this.props.title}
          </a>
          <a style={{ fontSize: "10px", paddingTop: "2px", opacity: "0.7" }}>
            {this.props.subTitle}
          </a>
        </div>
      </div>
    );
  }
}
