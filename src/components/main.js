import React from 'react';

import ListOfPatients from '../components/ListOfPatients';
import AddPatientForm from '../FormComponents/AddPatientForm';
import EditPatientForm from '../FormComponents/EditPatientForm';

import { Switch, Route } from 'react-router-dom';

const Main = () => {
	return (
		<div id='main_container'>
			<div id='content'>
				<Switch>
					<Route exact path='/' component={ListOfPatients} />
					<Route exact path='/pacijenti' component={ListOfPatients} />
					<Route exact path='/novipacijent' component={AddPatientForm} />
					<Route exact path='/edit/:id' component={EditPatientForm} />
				</Switch>
			</div>
		</div>
	);
};

export default Main;
