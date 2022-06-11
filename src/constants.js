import vanderbiltLogo from './files/vanderbilt.png';
// import 

export const order = [
	'employment',
	'projects',
	'skills',
	'education'
];

export const employment = [
	{
		title: 'Software Engineer',
		name: 'Google',
		dates: '02/22 - Present',
		blurb: 'Fullstack software engineer for Google Ads.',
		image: { 
			href: 'https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png',
			w: 50,
			h: 50 
		},
                links: [],
		bullets: [
                    'Fullstack software engineer for Google Ads.'
                ]
	},
	{
		title: 'Software Engineer II',
		name: 'Space Ground System Solutions',
		dates: '06/19 - 06/21',
		blurb: 'Developed full stack web applications, chosen to serve as temp project lead for 3 months.',
		image: { 
			href: 'https://www.sgss.com/wp-content/uploads/2016/06/SGSS.jpg',
			w: 100,
			h: 50
		},
		links: [
			{
				text: 'COMPANY',
				icon: 'external',
				href: 'https://www.sgss.com/'
			}
		],
		bullets: [
			'Worked on a web application for satellite Telemetry, Tracking, and Control (TT&C) and Ground Resource Management (GRM) C2 systems.',
			'Chosen to fill in as project lead during a 3-month planned leave of absence for a team of 5 other full time engineers. Responsible for leading agile ceremonies, clearing blockers, meeting with stakeholders, UX and system design for new features, designing and delivering training curricula, and more.',
			'Implemented at least a dozen major new full stack features, using description documents from software architects for some, and leading the requirements gathering and UX design processes myself for others.',
			'Regularly and deeply involved in testing, including designing automated tests for many existing components and being chosen to plan & execute functional testing.'
		]
	},
	{
		title: 'Automation Tools Intern',
		name: 'Fujitsu Network Communications',
		dates: '06-08/18',
		image: {
			href: 'https://pbs.twimg.com/profile_images/1448725012408672261/75fCwF0w_400x400.jpg',
			w: 50,
			h: 50 
		},
		links: [
			{
				text: 'COMPANY',
				icon: 'external',
				href: 'https://www.fujitsu.com/us/products/network/'
			}
		],
		blurb: 'Planned and implemented basic full stack web tool for data collection.',
		bullets: [
			'Created an internal web tool for ~50 project managers to complete a new procedure and collect procedural data for executive analysis using Java, Spring MVC, and Javascript.',
			'Was responsible for carrying out the full software engineering process, from talking to stakeholders, to writing the SRS document, to implementation and feedback.',
		]
	}
];

export const projects = [
	{
		name: 'Origami Odyssey',
		links: [
			{
				text: 'PAPER',
				icon: 'external',
				href: 'https://github.com/robbwdoering/origamiodyssey/blob/main/CS6460%20Proposal.pdf'
			},
			{
				text: 'SITE',
				icon: 'external',
				href: 'https://origamiodyssey.com/'
			},
			{
				text: 'GITHUB',
				icon: 'github',
				href: 'https://github.com/robbwdoering/origamiodyssey'
			}
		],
		blurb: 'Built a React webapp that delivers origami instructions using a novel method: 3D simulations.',
		bullets: [
			'A React SPA site built to teach [origami](https://en.wikipedia.org/wiki/Origami), the art of folding paper into complex 3D models.',
			'Designed [a set of novel algorithms](https://github.com/robbwdoering/origamiodyssey/blob/main/client/src/anim/Paper.js) for simulating the folding motions of a piece paper in 3D space, based on the chosen instructions.',
			'Extended the [.fold file format](http://erikdemaine.org/papers/FOLD_CGW2016/) for use in describing a set of sequential origami instructions, as opposed to just one completed, static, model.',
			'Each specific method used in this application is supported by research I did as part of GaTech’s CS6460: Educational Technology.'
		],
		image_list: [
			{
				'original': process.env.PUBLIC_URL + '/oo_modelselect.png',
				'thumbnail': process.env.PUBLIC_URL + '/oo_modelselect_thumb.png',
				'originalHeight': 300,
				'description': 'Users can select from a variety of different traditional origami models to fold.'
			},
			{
				'original': process.env.PUBLIC_URL + '/oo_butterfly.png',
				'thumbnail': process.env.PUBLIC_URL + '/oo_butterfly_thumb.png',
				'originalHeight': 300,
				'description': 'Users follow along as a 3D shape shows them how to fold the model step-by-step.'
			},
			{
				'original': process.env.PUBLIC_URL + '/oo_heart.png',
				'thumbnail': process.env.PUBLIC_URL + '/oo_heart_thumb.png',
				'originalHeight': 300,
				'description': 'The left side of the screen contains the hierarchical instructions, which allow for quick navigation and replaying of important sequences.'
			},
			{
				'original': process.env.PUBLIC_URL + '/oo_complete.png',
				'thumbnail': process.env.PUBLIC_URL + '/oo_complete_thumb.png',
				'originalHeight': 300,
				'description': 'This system uses a custom algorithm to derive these shapes from JSON instruction files, and works for even somewhat complex models.'
			}
		],
		technologies: ['Javascript', 'React', 'Redux', 'Three.js', 'react-three-fiber', 'Material-UI']
	},
	{
		name: 'SafetyRouter',
		links: [
			{
				text: 'SITE',
				icon: 'external',
				href: 'https://safetyrouter.robbwdoering.com/'
			}
		],
		image_list: [
			{
				'original': process.env.PUBLIC_URL + '/sr_map.png',
				'originalHeight': 300,
				'description': 'Users can input any two U.S. locations and see Google Maps routes and nearby accident hotspots on this interactive map.'
			},
			{
				'original': process.env.PUBLIC_URL + '/sr_viz.png',
				'originalHeight': 300,
				'description': 'A "safety score" is calculated that estimates the danger of the route and all alternatives, and graphs are shown to inspect relevant accident records in depth.'
			},
			{
				'original': process.env.PUBLIC_URL + '/sr_cluster.png',
				'originalHeight': 300,
				'description': 'Users can also inspect each accident hotspot shown on the map in detail.'
			},
		],
		blurb: 'Worked in a team of 6 to create a full stack application that analyzes U.S. road accident data and predicts the relative danger of user routes.',
		bullets: [
			'As part of Georgia Institute of Technology\'s [Data and Visual Analytics course](https://omscs.gatech.edu/cse-6242-data-visual-analytics), I spent a semester working on a team of 6 to build a full stack application.',
			'Our system analyses a dataset of over 1.5 million accidents, using custom clustering and bayesian probability functions to quantify road danger in the current weather conditions.',
			'Took ownership of the deployment and operations of the app, working with AWS, Dokku (a Heroku-like OSS), Docker, and Github actions.',
			'Setup a SPA Javascript/React frontend using Material-UI, and a python API backend using Flask and pyscopg2.',
			'Setup a custom spatial database that allowed for powerful semantic queries, using PostgreSQL and PostGIS.',
			'Created an interactive, responsive map in leaflet.js that allows the viewing of routes and accident hotspots.'
		],
		technologies: ['Javascript', 'Python', 'React', 'Flask', 'Leaflet', 'D3.js', 'Material-UI']
	},
	{
		name: 'Data Visualization in VR',
		image_list: [
			{
				'original': process.env.PUBLIC_URL + '/dvr_overview.png',
				'originalHeight': 300
			},
			{
				'original': process.env.PUBLIC_URL + '/dvr_spheres.png',
				'originalHeight': 300,
				'description': 'Part of the investigation involved evaluating different selection mechanisms.'
			},
			{
				'original': process.env.PUBLIC_URL + '/dvr_multishape.png',
				'originalHeight': 300,
				'description': 'Of the mechanisms that we had time to implement, multishape was the most promising.'
			},
		],
		bullets: [
			'For my Vanderbilt senior project, I worked with a professor and a team of 4 on his research quantifying the benefits of visualizing, selecting, and creating data in VR over 2D options.',
			'The above slides show some of the results of an initial investigation using the tool.'

		],
		blurb: 'Worked with a professor on building research tools in Unity for quantifying the benefits of VR tech for data visualization.',
		technologies: ['C#', 'Unity', 'Oculus', 'Blender']
	},
	{
		name: 'Bellum.ai',
		links: [
			{
				text: 'GITHUB',
				icon: 'github',
				href: 'https://github.com/robbwdoering/bellum.ai'
			},
		],
		image_list: [
			{
				'original': process.env.PUBLIC_URL + '/be_shootingoverview.png',
				'originalHeight': 300,
				'description': 'This is an example of the application during a game, where it simulates the current board in 3D and provides tools, statistics, and suggestions to the user for the current situation.'
			},
			{
				'original': process.env.PUBLIC_URL + '/be_splash.png',
				'originalHeight': 300,
				'description': 'The splash page for the site shows off the game board to grab user attention, as it is composed of thousands of individually controlled points that adapt to gameplay.'
			}
		],
		blurb: 'Building a React webapp to teach and analyze a complex boardgame called Warhammer 40k.',
		bullets: [
			'[IN PROGRESS] Building a React SPA to provide tools for the notoriously complex tabletop wargame, [Warhammer 40k](https://en.wikipedia.org/wiki/Warhammer_40,000), in order to speed up the game and give tactical advice.',
			'Designed a performant system for offloading the most intensive probability calculations to a RESTful stateless backend written in Express.js.',
			'Built a 3D simulation of the board, allowing the user to track the location of the many models in play.',
			'In order to integrate with existing tools, I wrote [a regex parser](https://github.com/robbwdoering/bellum.ai/blob/master/react-ui/src/war/parsingUtils.js#L51-L376) to read complex plaintext “army lists” into json objects for manipulation using [a rules-translation](https://github.com/robbwdoering/bellum.ai/blob/master/docs/meaning_objects.md) schema I designed.'
		],
		technologies: ['Javascript', 'React', 'Express.js', 'Redux', 'Three.js', 'react-three-fiber', 'D3.js', 'Auth0', 'Semantic UI']
	},
	{
		name: 'This site!',
		bullets: [
			'Simple portfolio site built with a separation between styling and content, so it could easily be adapted or built upon by others.',
			'Animations and transitions done using [react-spring](https://react-spring.io/basics), a fantastic library for natural + interruptible animations.',
			'Developed a basic CI/CD pipeline for ease of updates, which revolves around the use of Github Actions to deploy to an AWS bucket whenever changes are pushed to a production branch. '
		],
		blurb: 'Simple porfolio site built for extensibility and modularity, deployed automatically via Github actions.',
		technologies: ['Javascript', 'React', 'react-spring', 'Semantic UI']
	}
];

export const skills = [
	{
		name: 'Linux',
		desc:
			"I first learned linux in undergrad, use it every day professionally, and do all my personal projects in Ubuntu VM's. I have successfully debugged many environment issues in these contexts, and I am comfortable with reasonably advanced CLI patterns, such as backtics, pipes, and bespoke script creation.",
		level: 'Advanced',
		category: 'languages',

	},
	{
		name: 'agile',
		desc:
			'I have professional experience both participating in and leading sprint ceremonies, and have discussed the logic behind the system as part of my courses at Georgia Tech.',
		level: 'Advanced',
		category: 'concepts'
	},
	{
		name: 'git',
		desc:
			'I have used git extensively for professional & academic collaboration, and for version control on personal projects. This includes managing and reviewing pull requests, working with patch and release branches, using git submodules, and debugging branch conflicts for myself and others.',
		level: 'Advanced',
		category: 'tools'
	},
	{
		name: 'Java',
		desc:
			'I first learned Java in undergrad, and now have professional experience with Java web servers in multiple roles, both using the Spring framework and a simpler dependency-manager solution. I have successfully debugged many buildtime issues with the Java classpath, and have experience building Java systems using Gradle and Maven.',
		level: 'Advanced',
		category: 'languages'
	},
	{
		name: 'Javascript',
		desc:
			"Javascript is currently the language I'm most comfortable with, both older JQuery-based systems and more modern ES6 syntax. I greatly appreciate the speed of iteration that the language allows for in the right contexts, and have extensive experience with the various methods that make up modern JS (i.e. map/reduce, import/export, JSON manipulation methods, etc.).",
		level: 'Advanced',
		category: 'languages'
	},
	{
		name: 'React',
		desc:
			'I have extensive experience creating complex Single Page Applications using React, and combining it with various other libraries and frameworks. Most of my professional frontend experience is in React, along with all of my personal projects (including this site).',
		level: 'Advanced',
		category: 'libraries'
	},
	{
		name: 'Jest',
		desc:
			'I was partially responsible for bringing Jest tests to an existing codebase, and am used to maintaining coverage threshold targets over the long term. I am a big believer in the utility of Jest for unit and regression testing, and although I have no professional experience with Test Driven Development, I would relish the opportunity to try it.',
		level: 'Advanced',
		category: 'libraries'
	},
	{
		name: 'Redux',
		desc:
			'All of the more complex React applications I have worked on use Redux for state management, and I am comfortable writing new reducers and fields within the Redux store from scratch. I feel I have a solid understanding of how the systems works conceptually, both from a MOOC on the topic and from professional experience.',
		level: 'Advanced',
		category: 'libraries'
	},
	{
		name: 'C',
		desc:
			'I have used C professionally as part of full stack web applications, and academically for lessons on IPC protocols, performant computing, and Operating System design. This includes experience writing, reading, and maintaining Makefiles.',
		level: 'Advanced',
		category: 'languages'
	},
	{
		name: 'C++',
		desc:
			'I have used C++ professionally as part of full stack web applications, and academically for lessons on data structures, standard library usage, and software design patterns. This includes experience writing, reading, and maintaining Makefiles.',
		level: 'Advanced',
		category: 'languages'
	},
	{
		name: 'CSS',
		desc:
			'I have used CSS professionally and for personal projects, and feel comfortable with a variety of selectors and rules. I have tried vanilla CSS and CSS-in-JS, but honestly prefer the former.',
		level: 'Advanced',
		category: 'languages'
	},
	{
		name: 'HTML',
		desc:
			'I have designed sites using raw HTML professionally, and although all of my more recent experience manipulates the DOM indirectly using React, I feel comfortable with the underlying concepts.',
		level: 'Advanced',
		category: 'languages'
	},
	{
		name: 'npm',
		desc:
			'I have used npm professionally and for personal projects, and have experience comparing and contrasting options in terms of security, stability, and long term maintainability in a formal context.',
		level: 'Advanced',
		category: 'tools'
	},
	{
		name: 'Three.js',
		desc:
			'I have spent quite a bit of time experimenting with this library, the results of which can be seen in Bellum.ai\'s simulated gameboard, or Origami Odyssey\'s simulated paper.',
		level: 'Advanced',
		category: 'libraries'
	},
	{
		name: 'regex',
		desc:
			'I have used regex enough to understand its limitations, and am comfortable crafting expressions on the fly.',
		level: 'Advanced',
		category: 'libraries'
	},
	{
		name: 'JSON',
		desc:
			'I have built and interacted with JSON-based APIs quite frequently, both professionally and in personal projects.',
		level: 'Advanced',
		category: 'libraries'
	},
	{
		name: 'Slack',
		desc:
			'I am comfortable communicating via Slack and similar chat services, and have used it for both large and small groups.',
		level: 'Advanced',
		category: 'tools'
	},
	{
		name: 'Jira',
		desc:
			'I have used the Jira suite professionally, and as an acting project lead became very familiar with managing this system.',
		level: 'Advanced',
		category: 'tools'
	},
	{
		name: 'Inkscape',
		desc:
			'I have used Inkscape for fun since I was a child, and for simple graphic design work intermittently, such as putting together posters for school orgs, building detailed mock-ups of new UX at work, and even creating/tweaking icons when called for.',
		level: 'Advanced',
		category: 'tools'
	},
	{
		name: 'HCI',
		desc:
			'I have taken a graduate level survey course on Human-Computer Interaction, and have experience basing my technical discussions and feedback on research-backed principles.',
		level: 'Advanced',
		category: 'concepts'
	},
	{
		name: 'Python',
		desc:
			'I was taught Python in university, and have used it frequently to supplement many projects, such as building a Flask REST API or a Pandas data ingest script. In a vacuum, Python is my preferred language for CLI scripting.',
		level: 'Functional',
		category: 'languages'
	},
	{
		name: 'Bash',
		desc:
			'I have read, modified, and created Bash scripts regularly at my job, and often find myself writing small ones to solve CLI problems. I have experience with other shells as well, but feel most comfortable in Bash.',
		level: 'Functional',
		category: 'tools'
	},
	{
		name: 'MySQL',
		desc:
			'I learned the concepts in my undergraduate DB course, and I have used MySQL professionally. I am comfortable designing simple databases in UML, setting them up locally, and reading and writing in a variety of programming languages / frameworks.',
		level: 'Functional',
		category: 'libraries'
	},
	{
		name: 'PostgreSQL',
		desc:
			'I have used PostgreSQL considerably less than MySQL, but have used it on a personal project, and would be excited to become more familiar with it.',
		level: 'Functional',
		category: 'libraries'
	},
	{
		name: 'Next.js',
		desc:
			'I used Next.js in the backend component for my Bellum.ai personal project, and have used the npm ecosystem extensively both personally and professionally.',
		level: 'Functional',
		category: 'libraries'
	},
	{
		name: 'Express.js',
		desc:
			'I used Node.js in the backend component for my Bellum.ai personal project, which involved setting up a straightforward RESTful API.',
		level: 'Functional',
		category: 'libraries'
	},
	{
		name: 'D3.js',
		desc:
			'I have used D3 in a variety of professional and personal contexts, both wrapped in other libraries, and on its own. I am far from an expert, but feel confident I could spin up quickly on new applications of this technology.',
		level: 'Functional',
		category: 'libraries'
	},
	{
		name: 'C#',
		desc:
			"I used C# for my undergraduate senior project (a Unity 3D application), and although I don't feel confident on the syntax these days, I suspect I could spin up quickly in a C# codebase.",
		level: 'Functional',
		category: 'languages'
	},
	{
		name: 'REST',
		desc:
			'I have built and interacted with a large variety of RESTful APIs, and feel I have a fairly strong grasp on the underlying concepts.',
		level: 'Advanced',
		category: 'libraries'
	},
	{
		name: 'WebSockets',
		desc:
			'I have used WebSockets extensively, and am intimately familiar with the tradeoffs between this approach and making HTML requests.',
		level: 'Advanced',
		category: 'libraries'
	},
	{
		name: 'CI/CD',
		desc:
			'I have implemented CI/CD for personal and academic environments, going as far as setting up Self-Hosted runners.',
		level: 'Functional',
		category: 'concepts'
	},
	{
		name: 'GMSEC',
		desc: 'I have built many components that communicate via the GMSEC bus, and feel comfortable working with the relevant standards.',
		level: 'Functional',
		category: 'libraries'
	},
	{
		name: 'Orbitology',
		desc:
			'I have been tasked with some features that required basic orbitology calculations, and would relish the opportunity to explore these concepts further.',
		level: 'Functional',
		category: 'concepts'
	},
	{
		name: 'Unity',
		desc:
			'I used Unity to construct my undergraduate senior project, and played around with it intermittently throughout my undergraduate years.',
		level: 'Functional',
		category: 'tools'
	},
	{
		name: 'Lisp',
		desc:
			'I was taught Lisp in my programming language course during undergraduate, and greatly enjoy working in a functional context where appropriate.',
		level: 'Functional',
		category: 'languages'
	},
	{
		name: 'R',
		desc: 'I was taught R in my Mathematical Data Science course.',
		level: 'Functional',
		category: 'languages'
	},
	{
		name: 'RST',
		desc:
			'I have used RST to construct documents, and feel confident that I understand the build process and utility of the technology.',
		level: 'Advanced',
		category: 'languages'
	},
	{
		name: 'Docker',
		desc:
			'I have interacted with Docker containers extensively in professional contexts, and have experience debugging problems with containers.',
		level: 'Functional',
		category: 'tools'
	},
	{
		name: 'Podman',
		desc:
			'I have interacted with Podman containers extensively in professional contexts, and have experience debugging problems with containers.',
		level: 'Functional',
		category: 'tools'
	},
	{
		name: 'MATLAB',
		desc: 'I was taught MATLAB in my mathematical programming courses during my undergraduate.',
		level: 'Functional',
		category: 'languages'
	}
];

export const education = [
	{
		name: 'Vanderbilt University',
		date: 'Spring 2019',
		blurb: 'Earned a B.S. in Computer Science.',
		image: { 
			href: vanderbiltLogo,
			w: 50,
			h: 50
		},
		bullets: [
			'Earned a B.S. in Computer Science, with minors in Spanish and Philosophy.',
			'Served as an executive for the Vanderbilt Data Science club and the Wilderness Skills 101 organization.'
		]
	},
	{
		name: 'Georgia Institute of Technology',
		date: 'EXPECTED Fall 2022',
		blurb: 'Pursuing a M.S. in Computer Science with a specializion in Interactive Intelligence',
		image: { 
			href: 'https://brand.gatech.edu/sites/default/files/inline-images/gt-logo-gold.png',
			w: 100,
			h: 50
		},
		links: [
			{
				icon: 'external',
				text: 'PROGRAM',
				href: ''
			}	
		],
		bullets: [
			'Currently pursuing an online M.S. in Computer Science, with a specialization in Interactive Intelligence.',
			'This is a 10-course non-thesis graduate program known colloqiually as [OMSCS](https://omscs.gatech.edu/explore-oms-cs), built to match the on-campus option. I have completed six courses: Networks, OS, Educational Technology, Human-Computer Interaction, AI, and Visual Analytics.'
		]
	}
];

export const contactLines = [
	{
		name: 'robbwdoering@gmail.com',
		href: 'mailto:robbwdoering@gmail.com',
		icon: 'mail'
	},
	{
		name: 'LINKEDIN',
		href: 'https://www.linkedin.com/in/robb-doering-84165912a/',
		icon: 'linkedin'
	},
	{
		name: 'GITHUB',
		href: 'https://github.com/robbwdoering',
		icon: 'github'
	}
];

export const skillLevels = [
	{
		key: 'Advanced',
		blurb: 'I have worked extensively with these...'
	},
	{
		key: 'Functional',
		blurb: 'I have worked with these...'
	}
];
