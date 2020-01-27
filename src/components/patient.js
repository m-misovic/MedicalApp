import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Patient extends Component {
	render() {
		let pacijent = this.props;

		const openProfile = () => {
			this.props.history.push('/edit/' + pacijent.id);
		};

		const birthdate = () => {
			let birthdate = new Date(pacijent.birthdate);
			return birthdate.toDateString().substring(4);
		};

		return (
			<div className='all-reports_div'>
				<div>
					<table>
						<tbody>
							<tr onClick={openProfile}>
								<td className='thin-column'>{pacijent.id}</td>
								<td>
									{pacijent.firstname} {pacijent.lastname}
								</td>
								<td>{birthdate()}</td>
								<td>{pacijent.phone}</td>
								<td>{pacijent.email}</td>
								<td className='detaljnije_btn thin-column'>Izmeni</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default withRouter(Patient);
