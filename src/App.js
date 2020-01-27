import React from 'react';
import './style.css';

import Header from './components/header';
import Navbar from './components/navbar';
import Main from './components/main';

function App() {
	return (
		<div className='App'>
			<Header />
			<Navbar />
			<Main />
		</div>
	);
}

export default App;
