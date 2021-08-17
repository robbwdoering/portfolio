import React, { useState, useRef, createRef, useMemo, useEffect } from 'react';
import { Card, Grid, Icon, Image, Ref, Label, List, Divider } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';

import { projects, employment, skills, education, contactLines, levelBlurbs } from './constants';

const AnimatedCard = animated(Card);
const AnimatedHeader = animated(Card.Header);
const AnimatedMeta = animated(Card.Meta);
const AnimatedContent = animated(Card.Content);

export const DetailsCard = props => {
	// Extract props
	const { index, cardContRef, handleCardClick, isActive, header, meta, content, fullText, image } = props;
	const refExists = cardContRef && cardContRef.current;

	const headerRef = useRef();
	const contentRef = useRef();
	const fulltextRef = useRef();

	// Create the spring that controls the positioning of the card itself 
	const spring = useSpring({
		// config: { friction: 15 },
		// height: isActive ? 500 : 150,
		to: {
			height: !headerRef.current ? 150 : (headerRef.current.clientHeight + (isActive ? fulltextRef.current.clientHeight : contentRef.current.clientHeight) + 28),
			// width: isActive ? (refExists ? cardContRef.current.clientWidth : 500) : 300 
		}
	});

	// Create a spring for the image, if any
	const headerSpring = useSpring({
		from: {
			x: image ? -200 : 0
		},
		to: {
			x: isActive ? 0 : (image ? -200 : 0)
		}
	});

	// Create springs for the body text
	const contentSpring = useSpring({
		// from: { },
		to: {
			translate: isActive ? '105%' : '0%' 
		}
	});
	const fullTextSpring = useSpring({
		from: { translate: '-105%'},
		to: {
			translate: isActive ? '0%' : '-105%' 
		}
	});

	if (isActive) console.log("Card ", index, "is active and rendering", headerRef.current && headerRef.current.clientHeight);

	return (
		<AnimatedCard
			raised={isActive}
			className={isActive ? 'active' : null}
			style={spring}
			onClick={() => handleCardClick(index)}
		>
			<div ref={headerRef}>
				<AnimatedHeader style={headerSpring}>
					{image ? (<Image width={200} height={200} src={image} />) : null}
					{header}
				</AnimatedHeader>
				<AnimatedMeta>{meta}</AnimatedMeta>
			</div>
				<AnimatedContent style={fullTextSpring}>
					<div ref={fulltextRef} className="full-text-content">
						{Array.isArray(fullText) ? (
							<List>
								{fullText.map((bullet, idx) => (<List.Item key={idx}> {bullet} </List.Item>))}
							</List>
						) : fullText}
					</div>
					<div ref={contentRef} className="blurb-content">
						{content}
					</div>
				</AnimatedContent>
		</AnimatedCard>
	);
};
