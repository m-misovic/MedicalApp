import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div id='navbar_container'>
			<div id='nav-home_div'>MedicalApp</div>
			<div id='input_div'>
				<input type='search' placeholder='Pretraga' />
			</div>
			<div className='navbar'>
				<NavLink to='/pacijenti'>
					<div className='nav_tab' id='pacijenti_btn'>
						<i className='fas fa-user-friends'></i>Pacijenti
					</div>
				</NavLink>
				<NavLink to='/novipacijent'>
					<div className='nav_tab' id='pregled_btn'>
						<i className='fas fa-file-medical'></i>Novi pacijent
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default Navbar;
