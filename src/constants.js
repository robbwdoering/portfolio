export const order = [
	'employment',
	'projects',
	'skills',
	'education'
];

export const employment = [
	{
		title: 'Software Engineer II',
		name: 'Space Ground System Solutions',
		dates: 'June 2019 - July 2021',
		blurb: 'Developed full stack web applications, chosen to serve as temp project lead for 3 months.',
		bullets: [
			'Worked on a web application for space-ground command & control systems, using React w/ Redux, Java, and C++ to display & interact with high latency, error sensitive ground site information',
			'Chosen to fill in as project lead during a 3-month planned leave of absence for a team of 6 other full time engineers. Responsible for leading Agile ceremonies, clearing blockers, meeting with stakeholders, UX and system design for new features, designing and delivering training, and more.',
			'Implemented ~12 significant full stack features, using description documents from software architects for some, and leading the requirements gathering and UX design processes myself for others.',
			'Owned implementation of systems used by many government satellite programs, contributing to an essential piece of the Naval Research Laboratory’s response to specific DoD-wide standardization and modernization mandates for space related software.',
			'Regularly and deeply involved in testing, such as being tapped to bring Jest unit tests to an existing code base, or design and lead implementation of plans for functional testing.'
		]
	},
	{
		title: 'Automation Tools Intern',
		name: 'Fujitsu Network Communications',
		dates: 'May 2018 - August 2018',
		blurb: 'Planned and implemented basic full stack web tool for data collection.',
		bullets: [
			'Worked on an internal web tool for ~50 project managers to complete a new procedure and collect procedural data for executive analysis using Java, Spring MVC, and Javascript.',
			'Was responsible for carrying out the full software engineering process, from talking to stakeholders, to writing the SRS document, to implementation and feedback.'
		]
	}
];

export const projects = [
	{
		name: 'Origami Odyssey',
		link: 'https://github.com/robbwdoering/origamiodyssey',
		sourceLink: 'https://origamiodyssey.herokuapp.com/',
		blurb: 'Built a React webapp that delivers origami instructions using a novel method: 3D simulations.',
		bullets: [
			'A React SPA built to teach origami, the art of folding paper.',
			'It uses animated 3D simulations with temporal & spatial controls, hierarchical annotations of folds, and hobbyist augmentations to improve learner performance on audience specific self-assessments.',
			'Each specific method in that sentence is supported by research I did as part of GaTech’s CS6460: Educational Technology.'
		],
		technologies: ['Javascript', 'React', 'Redux', 'Three.js', 'react-three-fiber', 'Material-UI']
	},
	{
		name: 'Bellum.ai',
		link: 'https://github.com/robbwdoering/bellum.ai',
		bullets: [
			'[IN PROGRESS] A React SPA built to provide tools for the notoriously complex tabletop wargame, Warhammer 40k. It uses 3D simulation of the board, complex statistical modeling and analysis, and customizable visualizations to ease and speed along the game. This required a regex parser to read complex “army lists” into json objects for manipulation using a rules-translation schema I designed.'
		],
		blurb: 'Building a React webapp to teach and analyze a complex boardgame called Warhammer 40k.',
		technologies: ['Javascript', 'React', 'Redux', 'Three.js', 'react-three-fiber', 'D3.js', 'Auth0', 'Semantic UI']
	},
	{
		name: 'Data Visualization in VR',
		bullets: [
			'For my Vanderbilt senior project, I worked with a professor on his research quantifying the benefits of visualizing, selecting, and creating data in VR over 2D options.'
		],
		blurb: 'Built research tools in Unity for quantifying the benefits of VR tech.',
		technologies: ['C#', 'Unity', 'Oculus', 'Blender']
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
			'I was partially responsible for the initial implementation of Jest tests for a large existing codebase, and am used to maintaining coverage threshold targets over the long term. I am a big believer in the utility of Jest for unit and regression testing, and although I have no professional experience with Test Driven Development, I would relish the opportunity to try it.',
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
			'I have used C professionally as part of full stack web applications, and academically for lessons on IPC protocols, performant computing, and Operation System design. I also have experience writing, reading, and maintaining complex Makefiles.',
		level: 'Advanced',
		category: 'languages'
	},
	{
		name: 'C++',
		desc:
			'I have used C++ professionally as part of full stack web applications, and academically for lessons on data structures, standard library usage, and software design patterns. I also have experience writing, reading, and maintaining complex Makefiles.',
		level: 'Advanced',
		category: 'languages'
	},
	{
		name: 'CSS',
		desc:
			'I have used CSS extensively professionally and for personal projects, and feel comfortable with a variety of selectors and rules. I have tried vanilla CSS and CSS-as-code (read: CSS defined in JS), but prefer the former. I have not used any CSS frameworks, but would relish the opportunity.',
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
			'I have built a couple personal projects with this library, and enjoy messing around with it to learn what I can.',
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
			'I have used the Jira suite professionally, and as a acting project lead became very familiar with managing this system.',
		level: 'Advanced',
		category: 'tools'
	},
	{
		name: 'Inkscape',
		desc:
			'I have used Inkscape for fun since I was a child, and for simple graphic design work intermittently, such as putting together posters for school orgs, building detailed mock-ups of new UX, and even creating some new icons.',
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
			'I was taught Python in university, and have used it for simpler personal project and in the workplace. It has never been my primary language, so being productive in it is a process that still involves a lot of googling for syntax. In a vacuum, Python is my preferred language for CLI scripting.',
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
		name: 'GMSEC',
		desc: 'I have built many components that communicate via the GMSEC bus, and feel I understand the ',
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
		desc: 'I was taught Lisp in my programming language course during undergraduate.',
		level: 'Functional',
		category: 'languages'
	}
];

export const education = [
	{
		name: 'Vanderbilt University',
		date: 'Spring 2019',
		blurb: 'B.S. in Computer Science',
		bullets: [
			'Earned a B.S. in Computer Science, with minors in Spanish and Philosophy.',
			'Served as an executive for the Vanderbilt Data Science club and the Wilderness Skills 101 organization.'
		]
	},
	{
		name: 'Georgia Institute of Technology',
		date: 'EXPECTED Fall 2022',
		blurb: 'Ongoing M.S. in Computer Science, specialized in Interactive Intelligence',
		bullets: [
			'Currently pursuing an online M.S. in Computer Science, with a specialization in Interactive Intelligence.'
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
