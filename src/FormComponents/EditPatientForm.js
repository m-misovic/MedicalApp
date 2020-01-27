import React, { Component } from 'react';

import Notification from '../components/notification';
import Input from './Input';
import Select from './Select';
import Button from './Button';

class AddPatientForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pacijenti: [],
			newPatient: {
				id: '',
				firstname: '',
				lastname: '',
				birthdate: '',
				street: '',
				streetnum: '',
				city: '',
				country: '',
				email: '',
				phone: '',
				sex: '',
				profession: '',
				updated_by: ''
			},
			left: -400,
			msg: 'Uspešno ste izmenili podatke pacijenta'
		};
		this.timeout = null;
		this.form = React.createRef();
	}

	componentDidMount() {
		const db = 'http://localhost:3001/pacijenti/' + this.props.match.params.id;
		(async () => {
			let response = await fetch(db);
			this.setState({ newPatient: await response.json() });
		})();
	}

	handleInput = e => {
		let value = e.target.value;
		let name = e.target.name;
		this.setState(prevState => ({
			newPatient: {
				...prevState.newPatient,
				[name]: value
			}
		}));
	};

	validate = () => {
		return this.form.current.reportValidity();
	};

	handleFormSubmit = e => {
		e.preventDefault();
		if (this.validate()) {
			let userData = this.state.newPatient;
			const db = 'http://localhost:3001/pacijenti/' + this.props.match.params.id;
			fetch(db, {
				method: 'PUT',
				body: JSON.stringify(userData),
				headers: {
					Accept: 'application/json',
					'content-Type': 'application/json'
				}
			}).then(response => {
				response.json().then(data => {
					if (response.status === 200) {
						this.onShowNotification();
					}
				});
			});
		}
	};

	onShowNotification = () => {
		if (this.timeout) {
			clearTimeout(this.timeout);
			this.setState({ left: -400 }, () => {
				this.timeout = setTimeout(() => {
					this.showNotification();
				}, 500);
			});
		} else {
			this.showNotification();
		}
	};

	showNotification = () => {
		this.setState(
			{
				left: 20
			},
			() => {
				this.timeout = setTimeout(() => {
					this.setState({
						left: -400
					});
				}, 3000);
			}
		);
	};

	render() {
		return (
			<React.Fragment>
				<form ref={this.form} className='form-container' onSubmit={this.handleFormSubmit}>
					<div className='naslov'>Izmeni podatke o pacijentu:</div>
					<Input
						type={'text'}
						title={'Ime'}
						name={'firstname'}
						value={this.state.newPatient.firstname}
						placeholder={'Unesi ime'}
						onChange={this.handleInput}
						required
					/>
					<Input
						type={'text'}
						name={'lastname'}
						title={'Prezime'}
						value={this.state.newPatient.lastname}
						placeholder={'Unesi prezime'}
						onChange={this.handleInput}
						required
					/>
					<Input
						type={'date'}
						name={'birthdate'}
						title={'Datum rođenja'}
						value={this.state.newPatient.birthdate}
						placeholder={'Enter date of birth'}
						onChange={this.handleInput}
						required
					/>
					<Select
						title={'Pol'}
						name={'sex'}
						options={this.state.sexOptions}
						value={this.state.newPatient.sex}
						placeholder={'Odaberi pol'}
						onChange={this.handleInput}
					/>
					<Input
						type={'text'}
						title={'Ulica'}
						name={'street'}
						value={this.state.newPatient.street}
						placeholder={'Unesi ulicu'}
						onChange={this.handleInput}
					/>
					<Input
						type={'text'}
						name={'streetnum'}
						title={'Broj'}
						value={this.state.newPatient.streetnum}
						placeholder={'Unesi broj'}
						onChange={this.handleInput}
					/>
					<Input
						type={'text'}
						name={'city'}
						title={'Grad'}
						value={this.state.newPatient.city}
						placeholder={'Unesi grad'}
						onChange={this.handleInput}
					/>
					<Input
						type={'text'}
						name={'country'}
						title={'Država'}
						value={this.state.newPatient.country}
						placeholder={'Unesi državu'}
						onChange={this.handleInput}
					/>
					<Input
						type={'email'}
						name={'email'}
						title={'Email'}
						value={this.state.newPatient.email}
						placeholder={'Unesi email'}
						onChange={this.handleInput}
						required
					/>
					<Input
						type={'phone'}
						name={'phone'}
						title={'Telefon'}
						value={this.state.newPatient.phone}
						placeholder={'Unesi telefon'}
						onChange={this.handleInput}
						required
					/>
					<Input
						type={'text'}
						name={'profession'}
						title={'Profesija'}
						value={this.state.newPatient.profession}
						placeholder={'Unesi profesiju'}
						onChange={this.handleInput}
					/>
					<Input
						type={'text'}
						name={'updated_by'}
						title={'Doktor'}
						value={this.state.newPatient.updated_by}
						placeholder={'Ime doktora'}
						onChange={this.handleInput}
						required
					/>
					<Button action={this.handleFormSubmit} type={'primary'} title={'Sačuvaj'} />
				</form>
				<Notification left={this.state.left} msg={this.state.msg} />
			</React.Fragment>
		);
	}
}

export default AddPatientForm;
