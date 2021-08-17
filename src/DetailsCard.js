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

	// Create the spring that controls the positioning of the card itself 
	const spring = useSpring({
		config: { friction: 15 },
		// height: isActive ? 500 : 150,
		width: isActive ? (refExists ? cardContRef.current.clientWidth : 500) : 300 
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
		from: { opacity: 0 },
		to: {
			opacity: isActive ? 1 : 0
		}
	});

	if (isActive) console.log("Card ", index, "is active and rendering");

	return (
		<AnimatedCard
			raised={isActive}
			className={isActive ? 'active' : null}
			// style={spring}
			onClick={() => handleCardClick(index)}
		>
			<AnimatedHeader style={headerSpring}>
				{image ? (<Image width={200} height={200} src={image} />) : null}
				{header}
			</AnimatedHeader>
			<AnimatedMeta>{meta}</AnimatedMeta>
			<AnimatedContent style={contentSpring}>{content}</AnimatedContent>
		</AnimatedCard>
	);
};
