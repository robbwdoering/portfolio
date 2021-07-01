import React, { useState, useEffect } from 'react';
import { Card } from 'semantic-ui-react';

import { projects, experience, skills, education } from './constants';

import './App.css';

export default props => {
	return (
		<div className='app-root'>
			<div className='info-container'>
				<div className='name-container'>
					<h1> Robb Doering </h1>
					<h2> is a fullstack software engineer looking for work. </h2>
				</div>
			</div>
			<div className='details-container'>
				<div className='projects-container'>
					<Card header='Origami Odyssey'>

					</Card>	

					<Card header='Bellum.ai'>
					</Card>	

					<Card header='Data Viz in VR'>
					</Card>	
				</div>

				<div className='experience-container'></div>

				<div className='skills-container'></div>

				<div className='education-container'></div>
			</div>
		</div>
	);
};
