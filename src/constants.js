import resumePDF from './files/resume.pdf';
import resumeDOCX from './files/resume.docx';

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
		title: 'Software Engineer II',
		name: 'Space Ground System Solutions',
		dates: '06/19 - 07/21',
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
			'Worked on a web interface for space-ground command & control systems, using React w/ Redux, Java, and C++ to display & interact with ground site data across the full stack.',
			'Chosen to fill in as project lead during a 3-month planned leave of absence for a team of 6 other full time engineers. Responsible for leading Agile ceremonies, clearing blockers, meeting with stakeholders, basic UX and system design for new features, designing and delivering training, and more.',
			'Implemented ~12 significant full stack features, using description documents from software architects for some, and leading the requirements gathering and UX design processes myself for others.',
			'Regularly and deeply involved in testing, such as being tapped to bring Jest unit tests to an existing code base, or designing and leading implementation of functional testing plans.'
		]
	},
	{
		title: 'Automation Tools Intern',
		name: 'Fujitsu Network Communications',
		dates: '06-08/18',
		image: {
			href: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEhJ7dE466ATg/company-logo_200_200/0/1595535008634?e=1637193600&v=beta&t=QuLqAjr81P4lmtEj225vPwJFR_3piUtpJW3t54QXd5U',
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
			'Worked on an internal web tool for ~50 project managers to complete a new procedure and collect procedural data for executive analysis using Java, Spring MVC, and Javascript.',
			'Was responsible for carrying out the full software engineering process, from talking to stakeholders, to writing the SRS document, to implementation and feedback.',
		]
	}
];

export const projects = [
	{
		name: 'Origami Odyssey',
		links: [
			{
				text: 'SITE (may take ~30s to spin up)',
				icon: 'external',
				href: 'https://origamiodyssey.herokuapp.com/'
			},
			{
				text: 'GITHUB',
				icon: 'github',
				href: 'https://github.com/robbwdoering/origamiodyssey'
			}
		],
		blurb: 'Built a React webapp that delivers origami instructions using a novel method: 3D simulations.',
		bullets: [
			'A React SPA site built to teach origami, the art of folding paper into complex 3D models.',
			'Designed a set of novel algorithms for simulating the folding motions of a piece paper in 3D space, based on the chosen instructions.',
			'Extended the .FOLD file format devised by Erik Demaine at MIT for use in describing a set of sequential origami instructions, as opposed to just one completed, static, model.',
			'Each specific method used in this application is supported by research I did as part of GaTech’s CS6460: Educational Technology.'
		],
		technologies: ['Javascript', 'React', 'Redux', 'Three.js', 'react-three-fiber', 'Material-UI']
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
		blurb: 'Building a React webapp to teach and analyze a complex boardgame called Warhammer 40k.',
		bullets: [
			'[IN PROGRESS] Building a React SPA to provide tools for the notoriously complex tabletop wargame, Warhammer 40k, in order to speed up the game and give tactical advice.',
			'Designed a performant system for offloading the most intensive probability calculations to a RESTful stateless backend written in Express.js.',
			'Built a 3D simulation of the board, allowing the user to track the location of the many models in play.',
			'In order to integrate with existing tools, I wrote a regex parser to read complex plaintext “army lists” into json objects for manipulation using a rules-translation schema I designed.'
		],
		technologies: ['Javascript', 'React', 'Express.js', 'Redux', 'Three.js', 'react-three-fiber', 'D3.js', 'Auth0', 'Semantic UI']
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
		desc: 'I was taught Lisp in my programming language course during undergraduate.',
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
		blurb: 'Pursuing a **M.S. in Computer Science** with a specializion in Interactive Intelligence',
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
			'This is a 10-course program known colloqiually as OMSCS, of which I have completed 4: Networks, OS, Educational Technology, and Human-Computer Interaction.'
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
	},
	{
		name: '.pdf',
		href: resumePDF,
		icon: 'file pdf'
	},
	{
		name: '.docx',
		href: resumeDOCX,
		icon: 'file word'
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
