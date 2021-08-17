import React, { useState, useRef, createRef, useMemo, useEffect } from 'react';
import { Card, Table, Grid, Icon, Image, Ref, Label, List, Divider } from 'semantic-ui-react';

import { order, projects, employment, skills, education, contactLines, skillLevels } from './constants';
import { DetailsCard } from './DetailsCard'

import profile_pic from './profile_pic.jpg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

export default props => {
	const [windowWidth, setWindowWidth] = useState(0);
	const [activeCard, setActiveCard] = useState(-1);
	const [isMounted, setIsMounted] = useState(false);
	const cardContRef = useRef();

	/**
	 * Select / deselect cards when they're clicked on. 
	 * @param cardIdx the global index of the the card that was clicked 
	 */
	const handleCardClick = cardIdx => {
		console.log('handleCardClick', cardIdx, activeCard);
		setActiveCard(activeCard => cardIdx === activeCard ? -1 : cardIdx);
	};

	/**
	 * Scroll to one of the section headers.
	 * @param event Object describing the onClick event
	 * @param target Object describing the clicked button
	 */
	const scrollSection = (event, target) => {
		if (target.targetid) {
			document.getElementById(target.targetid).scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleResize = event => {
		setWindowWidth(window.innerWidth);
	};

	/**
	 * Generate the actual renderable cards, separated into rows by category.
	 * This is broken out into a function for ease of memoization, and to more readably
	 * maintain the globalCardIdx as the arrays are generated.
	 * @return a 2D array of React components, empty element possible
	 */
	const generateCards = () => {
		let globalCardIdx = 0;

		// Go through the order defined in the constants file.
		// To add a new category to this site, you'd need to add a switch case below,
		// and then add the corresponding elements to the constants file
		return order.map(category => {
			const commonProps = {
				cardContRef,
				handleCardClick
			};

			switch(category) {
				case 'employment':
					return employment.map(role => Object.assign({}, commonProps, {
						header: role.title,
						meta: <div> {role.name} <br /> {role.dates} </div>,
						content: role.blurb,
						fullText: role.bullets,
						index: globalCardIdx++
					}));
				case 'projects':
					return projects.map(project => Object.assign({}, commonProps, {
						header: project.name,
						meta: project.technologies.reduce((acc, str, i) => acc + (i ? ', ' : '') + str, ''),
						content: project.blurb,
						fullText: project.bullets,
						index: globalCardIdx++
					}));
				case 'skills':
					return skillLevels.map(skillLevel => Object.assign({}, commonProps, {
						header: skillLevel.key,
						meta: skillLevel.blurb,
						content: skills
							.filter(skill => skill.level === skillLevel.key)
							.map((skill, idx) => (
								<Label as="a">
									{skill.name}
								</Label>
							)),
						fullText: (
							<Table className='skills-table'>
								<Table.Body>
								{skills
									.filter(skill => skill.level === skillLevel.key)
									.map((skill, idx) => (
										<Table.Row>
											{skill.image && (
												<Table.Cell>
													<Image src={skill.image} />
												</Table.Cell>
											)}
											<Table.Cell>
												{skill.name}
											</Table.Cell>
											<Table.Cell>
												{skill.desc}
											</Table.Cell>
										</Table.Row>
									))
								}
								</Table.Body>
							</Table>
						),
						index: globalCardIdx++
					}));
				case 'education':
					return education.map(school => Object.assign({}, commonProps, {
						header: school.name,
						meta: school.date,
						content: school.blurb,
						index: globalCardIdx++
					}));
				default:
					console.error(`Didn't recognize category: '${category}'`)
					return [];
			}
		});
	};

	// onMount()/onUnmount() effects 
	useEffect(() => {
		// Record that this component has mounted, and refs should be accessible
		setIsMounted(true);

		// Rerender this component when the window is resized. Overkill but makes things simpler in short term
		handleResize();
		window.addEventListener('resize', handleResize);

		// Clean up the event listener on unmount
		return () => window.removeEventListener('resize');
	}, []);

	// Build the 2D array of card components only once, since it is based solely on constants
	// (ATM, at least)
	const cards = useMemo(generateCards, []);

	return (
		<Grid className="app-root">
			{/* Basic layout is two stackable columns that center on mobile resolutions*/}
			<Grid.Row stackable>
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
							<h1 className='my_name'> Robb Doering </h1>
							<h2> is looking for work. </h2>
							<p>
								Full stack web developer | Space-ground C2 systems | Three.js based 3D simulations |
								React, Redux, Javascript, Java, C, C++, Python
							</p>
						</div>
					</div>
					{/* A simple website outline, displaying index and all-caps category name in each line */}
					<div className="sections-container">
						<List animated verticalAlign="middle">
							{order.map((category, i) => (
								<List.Item targetid={category} onClick={scrollSection}>
									<span>{`${i}`.padStart(2, '0')} {category.toUpperCase()}</span>
								</List.Item>
							))}
						</List>
					</div>
				</Grid.Column>

				{/* The body of the site, the detail cards */}
				{/* Wrapper lets us to pass a ref, so the children can track the attributes of their container asynchronously */}
				<Ref innerRef={cardContRef} >
					<Grid.Column width={8} mobile={16} className="details-container">
						{order.map((category, idx) => (
							<React.Fragment>
								<div className="section-header" id={category}> {category.toUpperCase()} </div>
								<div className={`${category}-container`}>
									{cards[idx].map(cardObj => (
										<DetailsCard
											isActive={activeCard === cardObj.index}
											{...cardObj}
										/>
									))}
								</div>
							</React.Fragment>
						))}
					</Grid.Column>
				</Ref>
			</Grid.Row>
		</Grid>
	);
};
