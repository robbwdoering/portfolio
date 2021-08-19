import React, { useState, useRef, createRef, useMemo, useEffect } from 'react';
import { Button, Card, Table, Grid, Icon, Image, Ref, Label, List, Divider } from 'semantic-ui-react';
import { useSpring, useSpringRef, useTransition, useChain, config, animated } from 'react-spring';

import { order, projects, employment, skills, education, contactLines, skillLevels } from './constants';
import { DetailsCard } from './DetailsCard';

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
	const handleCardClick = (cardIdx) => {
		console.log('handleCardClick', cardIdx, activeCard);
		setActiveCard(activeCard => (cardIdx === activeCard ? -1 : cardIdx));
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

			switch (category) {
				case 'employment':
					return employment.map(role =>
						Object.assign({}, commonProps, {
							...role,
							header: role.title,
							meta: `${role.name} | ${role.dates}`,
							blurb: role.blurb,
							fullText: role.bullets,
							index: globalCardIdx++
						})
					);
				case 'projects':
					return projects.map(project =>
						Object.assign({}, commonProps, {
							...project,
							header: project.name,
							meta: project.technologies.reduce((acc, str, i) => acc + (i ? ', ' : '') + str, ''),
							blurb: project.blurb,
							fullText: project.bullets,
							index: globalCardIdx++
						})
					);
				case 'skills':
					return skillLevels.map(skillLevel =>
						Object.assign({}, commonProps, {
							isTable: true,
							header: skillLevel.key,
							meta: skillLevel.blurb,
							blurb: skills
								.filter(skill => skill.level === skillLevel.key),
							fullText: skills.filter(skill => skill.level === skillLevel.key),
							index: globalCardIdx++
						})
					);
				case 'education':
					return education.map(school =>
						Object.assign({}, commonProps, {
							...school,
							header: school.name,
							meta: school.date,
							blurb: school.blurb,
							fullText: school.bullets,
							index: globalCardIdx++
						})
					);
				default:
					console.error(`Didn't recognize category: '${category}'`);
					return [];
			}
		});
	};

	// On-open chain
	// Build a spring and catch its ref
	// const cardsTransRef = useSpringRef()
	// const props = useSpring({ ...values, ref: springRef })
	// // Build a transition and catch its ref
	// const transitionRef = useSpringRef()
	// const transitions = useTransition({ ...values, ref: transitionRef })
	// // First run the spring, when it concludes run the transition

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

	const headersTransRef = useSpringRef();
	const headers = useMemo(() => order.map((category, idx) => ({ category, idx })), []);
	const headersTrans = useTransition(headers, {
		config: { friction: 15 },
		from: { opacity: 0, y: -100, x: '100%' },
		enter: item => [{ x: '0%' }, { y: 0, opacity: 1 }],
		// leave: { opacity: 0 },
		delay: 50
		// config: config.molasses
	});

	return (
		<div className={`app-root ${window.innerWidth < 700 ? 'mobile-mode' : '' }`}>
			{/* Basic layout is two stackable columns that center on mobile resolutions*/}
			<div className='info-container'>
				<div className="info-placeholder" />
				<div className="sticky-container">
					<div className="contacts-container">
						<img className="profile_pic" src={profile_pic} alt="Picture of me!" />
						<div className="contacts">
							<div>
								{contactLines.map(cur => (
									<Button compact icon={cur.icon} href={cur.href} content={cur.name} />
								))}
							</div>
						</div>
					</div>
					<div className="name-container">
						<div>
							<h1 className="my_name"> Robb Doering </h1>
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
									<span>
										<span style={{color: 'var(--accentThree)'}}> {`${i}`.padStart(2, '0')} </span> {category.toUpperCase()}
									</span>
								</List.Item>
							))}
						</List>
					</div>
				</div>
			</div>

			{/* The body of the site, the detail cards */}
			{/* Wrapper lets us to pass a ref, so the children can track the attributes of their container asynchronously */}
			<Ref innerRef={cardContRef}>
				<div className="details-container">
					{headersTrans((style, item, t, idx) => (
						<React.Fragment>
							<animated.div className="section-header" style={{ x: style.x }} id={order[idx]}>
								{item.category.toUpperCase()}
							</animated.div>
							<div className={`${order[idx]}-container`}>
								{cards[idx] &&
									cards[idx].map(cardObj => (
										<DetailsCard
											isActive={activeCard === cardObj.index}
											style={{ y: style.y, opacity: style.opacity }}
											{...cardObj}
										/>
									))}
							</div>
						</React.Fragment>
					))}
				</div>
			</Ref>
		</div>
	);
};
