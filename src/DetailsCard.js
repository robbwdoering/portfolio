import React, { useState, useRef, createRef, useMemo, useEffect } from 'react';
import { Card, Table, Button, Grid, Icon, Image, Ref, Label, List, Divider } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';
import ReactMarkdown from 'react-markdown';

import { projects, employment, skills, education, contactLines, levelBlurbs } from './constants';

const AnimatedCard = animated(Card);
const AnimatedHeader = animated(Card.Header);
const AnimatedMeta = animated(Card.Meta);
const AnimatedContent = animated(Card.Content);
const AnimatedImage = animated(Image);

export const DetailsCard = props => {
	// Extract props
	const {
		index,
		style,
		cardContRef,
		handleCardClick,
		isActive,
		header,
		meta,
		blurb,
		fullText,
		image,
		links,
		isTable
	} = props;
	const refExists = cardContRef && cardContRef.current;

	const [selectedRow, selectRow] = useState(-1);

	const headerRef = useRef();
	const contentRef = useRef();
	const fulltextRef = useRef();

	const calcNewHeight = () => {
		if (!headerRef.current) {
			// Error - refs not yet attached
			return 150;
		}

		// New height is the height of header plus whichever content (blurb or fulltext) is being shown
		let newHeight =
			headerRef.current.clientHeight +
			(isActive ? fulltextRef.current.clientHeight : contentRef.current.clientHeight) +
			21; // 21 == padding

		if (links && isActive) newHeight += 28; // Add space for the links row if present

		return newHeight > 600 ? 600 : newHeight;
	};

	const handleSkillClick = subIdx => {
		setTimeout(() => {
			const el = document.getElementById(`skill-row-${index}-${subIdx}`);
			if (el && fulltextRef.current) {
				fulltextRef.current.scrollTo({
					top: el.offsetTop,
					left: 0,
					behavior: 'smooth'
				});

				selectRow(subIdx);
			}
		}, 250);
	};

	const renderBlurb = () => {
		if (Array.isArray(blurb) && isTable) {
			return blurb.map((skill, idx) => (
				<Label onClick={() => handleSkillClick(idx)} as="a">
					{skill.name}
				</Label>
			));
		}

		if (typeof blurb === 'string') {
			return <ReactMarkdown>{blurb}</ReactMarkdown>;
		}

		return blurb;
	};

	const renderFullText = () => {
		if (Array.isArray(fullText)) {
			if (isTable) {
				return (
					<Table className="skills-table">
						<Table.Body>
							{fullText.map((skill, idx) => (
								<Table.Row
									id={`skill-row-${index}-${idx}`}
									className={`${selectedRow === idx ? 'selected-row' : ''}`}
									onClick={(e) => {e.preventDefault(); e.stopPropagation(); selectRow(idx)}}
								>
									<Table.Cell>
										{skill.image && <Image src={skill.image} />}
										{skill.name}
									</Table.Cell>
									<Table.Cell>{skill.desc}</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table>
				);
			}

			return (
				<List bulleted>
					{fullText.map((bullet, idx) => (
						<List.Item key={idx}>
							{' '}
							<ReactMarkdown>{bullet}</ReactMarkdown>{' '}
						</List.Item>
					))}
				</List>
			);
		}

		if (typeof fullText === 'string') {
			return <ReactMarkdown>{fullText}</ReactMarkdown>;
		}

		return fullText;
	};

	// Create the spring that controls the positioning of the card itself
	const spring = useSpring({
		config: { friction: 15 },
		// height: isActive ? 500 : 150,
		to: {
			height: calcNewHeight()
			// width: isActive ? (refExists ? cardContRef.current.clientWidth : 500) : 300
		}
	});

	// Create springs for the body text
	const fullTextSpring = useSpring({
		from: { translate: '-50%' },
		to: {
			translate: isActive ? '0%' : '-50%'
		}
	});

	const imageSpring = useSpring({
		config: { friction: 15 },
		from: { y: -75 },
		to: { y: isActive ? 0 : -75 }
	});
	const linkSpring = useSpring({
		config: { friction: 15 },
		from: { y: 75 },
		to: { y: isActive ? 0 : 75 }
	});

	// if (true)
	// 	console.log('Card ', index, 'is active and rendering', blurb, typeof blurb);

	/**
	 * CAUTION: The JSX for ReactMarkdown is space-sensitive (!!!). It appears all input strings must be trimmed.
	 */
	return (
		<AnimatedCard
			raised={isActive}
			className={`${isActive ? 'active' : null} ${isTable ? 'table-card' : ''}`}
			style={Object.assign({}, spring, style || {})}
			onClick={() => handleCardClick(index)}
		>
			<div className="header-container" ref={headerRef}>
				<AnimatedHeader>
					<ReactMarkdown>{header}</ReactMarkdown>
				</AnimatedHeader>
				<AnimatedMeta>
					<ReactMarkdown>{meta}</ReactMarkdown>
				</AnimatedMeta>
				{image && <AnimatedImage width={image.w} height={image.h} style={imageSpring} src={image.href} />}
			</div>
			<AnimatedContent style={fullTextSpring}>
				<div ref={fulltextRef} className="full-text-content">
					{renderFullText()}
				</div>
				<div ref={contentRef} className="blurb-content">
					{renderBlurb()}
				</div>
			</AnimatedContent>
			{links && (
				<animated.div style={linkSpring} className="link-container">
					{links.map(link => (
						<Button compact icon={link.icon} href={link.href} content={link.text} target="_blank" />
					))}
				</animated.div>
			)}
		</AnimatedCard>
	);
};
