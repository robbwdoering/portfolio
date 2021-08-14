import React, { useState, useRef, createRef, useMemo, useEffect } from 'react';
import { Card, Grid, Icon, Label, List, Divider } from 'semantic-ui-react';
import { useSprings, animated } from 'react-spring';

import { projects, employment, skills, education, contactLines, levelBlurbs } from './constants';

import profile_pic from './profile_pic.jpg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

const AnimatedCard = animated(Card);

// Some global work is done to count the number of constants passed in, i.e. number of cards to be displayed
const numCards = projects.length + employment.length + education.length;
// A temporary array is created for convenience of iteration
let tmpCardsArr = [];
for (let i = 0; i < numCards; i++) {
	tmpCardsArr[i] = 0;
}

export default props => {
	const [windowWidth, setWindowWidth] = useState(0);
	const [activeCard, setActiveCard] = useState(-1);

	const handleClick = (type, cardIdx) => {
		console.log(`clicked ${type} w/ name: ${cardIdx}`);
		setActiveCard(cardIdx === activeCard ? -1 : cardIdx);
	};

	const scrollSection = (event, target) => {
		// console.log('scroll', event, target, target.targetid);
		if (target.targetid) {
			document.getElementById(target.targetid).scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleResize = event => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize');
	}, []);

	// Pass in the aforementioned inputs, and get back the styling props
	const springs = useSprings(
		numCards,
		tmpCardsArr.map((e, i) => {
			const isActive = activeCard === i;
			console.log('Creating Springs', i);

			// Get the initial styles, based on status of this card 
			let ret = {
				config: { friction: 15 },
				// height: isActive ? 500 : 'min-content',
				// width: isActive ? 'inherit' : 'auto'
				height: isActive ? 500 : 150,
				width: isActive ? 500 : 300 
			};

			return ret;
		})
	);

	let globalCardIdx = 0;

	return (
		<Grid className="app-root">
			<Grid.Row>
				<Grid.Column className="info-container">
					<div width={8} mobile={16} className="contacts-container">
						<img className="profile_pic" src={profile_pic} alt="Picture of me!" />
						<div className="contacts">
							<div>
								{contactLines.map(cur => (
									<div>
										{' '}
										<Icon name={cur.icon} size="large" /> <a href={cur.href}>{cur.name}</a>{' '}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="name-container">
						<div>
							<h1> Robb Doering </h1>
							<h2> is looking for work. </h2>
							<p>
								Full stack web developer | Space-ground C2 systems | Three.js based 3D simulations |
								React, Redux, Javascript, Java, C, C++, Python
							</p>
						</div>
					</div>
					<div className="sections-container">
						<List animated verticalAlign="middle">
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
				</Grid.Column>
				<Grid.Column width={8} mobile={16} className="details-container">
					<div className="section-header" id="employment">
						EMPLOYMENT
					</div>
					<Grid stackable className="employment-container">
						<Grid.Row columns={1}>
							{employment.map((role, idx) => (
								<Grid.Column>
									{/* The actual card, absolutely positioned */}
									<AnimatedCard
										raised={activeCard === globalCardIdx}
										className={activeCard === globalCardIdx ? 'active' : null}
										style={springs[globalCardIdx]}
										glbIdx={globalCardIdx++}
										onClick={(e, { glbIdx }) => handleClick('employment', glbIdx)}
									>
										<Card.Header>{role.title}</Card.Header>
										<Card.Meta>
											{role.name}
											<br />
											{role.dates}
										</Card.Meta>
										<Card.Content>{role.blurb}</Card.Content>
									</AnimatedCard>
								</Grid.Column>
							))}
						</Grid.Row>
					</Grid>

					<div className="section-header" id="projects">
						PROJECTS
					</div>
					<Grid stackable className="projects-container">
						<Grid.Row columns={1}>
							{projects.map((project, idx) => (
								<Grid.Column>
									<AnimatedCard
										style={springs[globalCardIdx]}
										glbIdx={globalCardIdx++}
										onClick={(e, { glbIdx }) => handleClick('projects', glbIdx)}
									>
										<Card.Header>{project.name}</Card.Header>
										<Card.Meta>
											{project.technologies.reduce(
												(acc, str, i) => acc + (i ? ', ' : '') + str,
												''
											)}
										</Card.Meta>
										<Card.Content>{project.blurb}</Card.Content>
									</AnimatedCard>
								</Grid.Column>
							))}
						</Grid.Row>
					</Grid>

					<div className="section-header" id="skills">
						SKILLS
					</div>
					<Grid stackable className="skills-container">
						<Grid.Row columns={1}>
							{skills
								.reduce(
									(acc, skill) => (acc.includes(skill.level) ? acc : acc.concat([skill.level])),
									[]
								)
								.map((skillLevel, i) => (
									<Grid.Column>
										<Card>
											<Card.Header>{skillLevel}</Card.Header>
											<Card.Meta>{levelBlurbs[skillLevel] || ''}</Card.Meta>
											<Card.Content>
												{skills
													.filter(skill => skill.level === skillLevel)
													.map((skill, idx) => (
														<Label as="a" onClick={() => handleClick('skill', skill)}>
															{skill.name}
														</Label>
													))}
											</Card.Content>
										</Card>
									</Grid.Column>
								))}
						</Grid.Row>
					</Grid>

					<div className="section-header" id="education">
						EDUCATION
					</div>
					<Grid stackable className="education-container">
						<Grid.Row columns={1}>
							{education.map((school, idx) => (
								<Grid.Column>
									<AnimatedCard
										style={springs[globalCardIdx]}
										glbIdx={globalCardIdx++}
										onClick={(e, { glbIdx }) => handleClick('education', glbIdx)}
									>
										<Card.Header>{school.name}</Card.Header>
										<Card.Meta>{school.date}</Card.Meta>
										<Card.Content>{school.blurb}</Card.Content>
									</AnimatedCard>
								</Grid.Column>
							))}
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};
