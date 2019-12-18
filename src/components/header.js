import React, { Component } from "react";
import Image from "../img/doctor.jpg";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div id="login_area">
          <div id="img-of-dr">
            <img src={Image} alt="user" />
          </div>
          <div id="name-of-dr">Dr. Jelena Janković</div>
          <div id="toolbar">
            <div id="notification">
              <i className="fas fa-bell"></i>
            </div>
            <div id="messages">
              <i className="fas fa-envelope"></i>
            </div>
            <div id="settings">
              <i className="fas fa-cog"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
