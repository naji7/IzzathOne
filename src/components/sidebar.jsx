import React, { Component } from "react";

import SideButton from "./common/sideButton";
import "./styles/sidebar.scss";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sideContainer">
        <div className="orderButton">
          <SideButton
            icon="plus-circle"
            title="Create order"
            topSize="0"
            alignItem="center"
            minWidth="0px"
          />
        </div>

        <div style={{ paddingTop: "30px" }}>
          <SideButton
            icon="circle-o-notch"
            title="Overview"
            subTitle="Glance idea of business"
          />
          <SideButton
            icon="bookmark-o"
            title="Orders"
            subTitle="Track submission until delivery"
          />
          <SideButton
            icon="user-o"
            title="Customers"
            subTitle="View customer wise summary"
          />
          <SideButton
            icon="bar-chart"
            title="Reports"
            subTitle="Get insight into your data"
          />
          <SideButton
            icon="file-text-o"
            title="Expenses"
            subTitle="Add view and track expenses"
          />
          <SideButton
            icon="line-chart"
            title="Cash flow"
            subTitle="Summary of cash flow"
          />
          <SideButton icon="cog" title="Settings" topSize="50" />
        </div>
      </div>
    );
  }
}
