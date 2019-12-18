import React, { Component } from "react";
import { Link } from "react-router-dom";

class Patient extends Component {
  render() {
    let pacijent = this.props;

    function birthdate() {
      let birthdate = new Date(pacijent.birthdate);
      return birthdate.toDateString().substring(4);
    }

    return (
      <div className="all-reports_div">
        <div>
          <table>
            <tbody>
              <tr>
                <td className="thin-column">{pacijent.id}</td>
                <td>
                  {pacijent.firstname} {pacijent.lastname}
                </td>
                <td>{birthdate()}</td>
                <td>{pacijent.phone}</td>
                <td>{pacijent.email}</td>
                <td className="detaljnije_btn thin-column">
                  <Link to={"/edit/" + pacijent.id} className="btn btn-primary">
                    Izmeni
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Patient;
