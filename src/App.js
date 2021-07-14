import React, { useState, useEffect } from 'react';
import { Card, Icon, Label, List, Divider } from 'semantic-ui-react';

import { projects, employment, skills, education, contactLines, levelBlurbs } from './constants';

import profile_pic from './profile_pic.jpg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

export default props => {
	const [windowWidth, setWindowWidth] =  useState(0);

	const handleClick = (type, obj) => {
		console.log(`clicked ${type} w/ name: ${obj.name}`);
	};

	const scrollSection = (event, target) => {
		// console.log('scroll', event, target, target.targetid);
		if (target.targetid) {
			document.getElementById(target.targetid).scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleResize = event => {
		setWindowWidth(window.innerWidth);
	}

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener('resize');
	}, []);

	const isFull = windowWidth >= 1200;

	return (
		<div className={`app-root ${isFull ? 'full-width' : ''}`}>
			<div className='info-placeholder' />
			<div className='info-container'>
				<div className='contacts-container'>
					<img className='profile_pic' src={profile_pic} alt="Picture of me!" />
					<div className='contacts'>
						<div>
							{contactLines.map(cur => (
								<div> <Icon name={cur.icon} size='large' /> <a href={cur.href}>{cur.name}</a> </div>
							))}
						</div>
					</div>
				</div>
				<div className='name-container'>
					<div>
						<h1> Robb Doering </h1>
						<h2> is looking for work. </h2>
						<p>Full stack web developer | Space-ground C2 systems | Three.js based 3D simulations | React, Redux, Javascript, Java, C, C++, Python</p>
					</div>
				</div>
				<div className='sections-container'>
					<List animated verticalAlign='middle'>
						<List.Item targetid={'employment'} onClick={scrollSection}>
							<span>01 Employment</span>
						</List.Item>
						<List.Item targetid={'projects'} onClick={scrollSection}>
							<span>02 Projects</span>
						</List.Item>
						<List.Item targetid={'skills'} onClick={scrollSection}>
							<span>03 Skills</span>
						</List.Item>
						<List.Item targetid={'education'} onClick={scrollSection}>
							<span>04 Education</span>
						</List.Item>
					</List>
				</div>
			</div>
			<div className='details-container'>
				<div className='section-header' id='employment'>EMPLOYMENT</div>
				<div className='employment-container'>
					{employment.map((role, idx) => (
						<Card onClick={() => handleClick('employment', role)}>
							<Card.Header>{role.title}</Card.Header>	
							<Card.Meta>{role.name}<br/>{role.dates}</Card.Meta>	
							<Card.Content>{role.blurb}</Card.Content>
						</Card>
					))}
				</div>

				<div className='section-header' id='projects'>PROJECTS</div>
				<div className='projects-container'>
					{projects.map((project, idx) => (
						<Card onClick={() => handleClick('project', project)}>
							<Card.Header>{project.name}</Card.Header>
							<Card.Meta>{project.technologies.reduce((acc, str, i) => acc + (i ? ', ' : '') + str, '')}</Card.Meta>
							<Card.Content>{project.blurb}</Card.Content>
						</Card>
					))}
				</div>

				<div className='section-header' id='skills'>SKILLS</div>
				<div className='skills-container'>
					{skills
						.reduce((acc, skill) => acc.includes(skill.level) ? acc : acc.concat([skill.level]), [])
						.map((skillLevel, i) => (
							<Card>
								<Card.Header>{skillLevel}</Card.Header>
								<Card.Meta>{levelBlurbs[skillLevel] || ''}</Card.Meta>
								<Card.Content>
									{skills
										.filter(skill => skill.level === skillLevel)
										.map((skill, idx) => (
											<Label as='a' onClick={() => handleClick('skill', skill)}>
												{skill.name}
											</Label>
										))}
								</Card.Content>
							</Card>
					))}
				</div>

				<div className='section-header' id='education'>EDUCATION</div>
				<div className='education-container'>
					{education.map((school, idx) => (
						<Card onClick={() => handleClick('education', school)}>
							<Card.Header>{school.name}</Card.Header>
							<Card.Meta>{school.date}</Card.Meta>
							<Card.Content>{school.blurb}</Card.Content>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
};
