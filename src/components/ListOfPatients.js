import React, { Component } from "react";
import Patient from "./patient";
import { Link } from "react-router-dom";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      pacijenti: []
    };
  }

  componentDidMount() {
    const db = "http://localhost:3001/pacijenti";
    (async () => {
      let response = await fetch(db);
      this.setState({ pacijenti: await response.json() });
    })();
  }

  printPatients() {
    return this.state.pacijenti.map(pacijent => (
      <Patient
        key={pacijent.id}
        id={pacijent.id}
        firstname={pacijent.firstname}
        lastname={pacijent.lastname}
        birthdate={pacijent.birthdate}
        city={pacijent.city}
        street={pacijent.street}
        streetnum={pacijent.streetnum}
        country={pacijent.country}
        email={pacijent.email}
        phone={pacijent.phone}
        sex={pacijent.sex}
        profession={pacijent.profession}
        updated_by={pacijent.updated_by}
      />
    ));
  }

  render() {
    return (
      <div className="patients_div">
        <div id="table_header">
          <table>
            <tbody>
              <tr>
                <th className="thin-column">ID</th>
                <th>Ime pacijenta</th>
                <th>Datum rođenja</th>
                <th>Broj telefona</th>
                <th>Email</th>
                <th className="detaljnije_btn  thin-column">
                  <Link to={"/novipacijent"} className="btn btn-primary">
                    Novi pacijent
                  </Link>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        {this.printPatients()}
      </div>
    );
  }
}

export default Content;
