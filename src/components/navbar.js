import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div id="navbar_container">
        <div id="nav-home_div">MedicalApp</div>
        <div id="input_div">
          <input type="search" placeholder="Pretraga" />
        </div>
        <div className="navbar">
          <Link to="/pacijenti">
            <div className="nav_tab close" id="pacijenti_btn">
              <i className="fas fa-user-friends"></i>Pacijenti
            </div>
          </Link>
          <Link to="/novipacijent">
            <div className="nav_tab close" id="pregled_btn">
              <i className="fas fa-file-medical"></i>Novi pacijent
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
