export const business = {
	name: 'TeeJays Disco',
	legalName: 'TeeJays Disco',
	url: 'https://teeandjaysdisco.com',
	logo: 'https://teeandjaysdisco.com/favicon.svg',
	description: 'Professional mobile DJ services for weddings, birthdays, anniversaries, corporate events and parties across Tameside, Manchester and the North West.',
	priceRange: '££',
	serviceArea: ['Tameside', 'Manchester', 'Stockport', 'Oldham', 'Bolton', 'Cheshire', 'North West England'],
	addressLocality: 'Tameside',
	addressRegion: 'Greater Manchester',
	addressCountry: 'GB',
	founded: '1989',
	sameAs: [] as string[],
};

export const contact = {
	phone: '07710 123456',
	phoneHref: 'tel:07710123456',
	email: 'info@teejaysdisco.co.uk',
	emailHref: 'mailto:info@teejaysdisco.co.uk',
	location: 'Tameside, Greater Manchester',
};

type NavItem = {
	label: string;
	href: string;
	children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
	{ label: 'Home', href: '/' },
	{
		label: 'Services',
		href: '/services/',
		children: [], // populated below from services array
	},
	{
		label: 'Areas',
		href: '/areas/',
		children: [], // populated below from areas array
	},
	{ label: 'About', href: '/about/' },
	{ label: 'Gallery', href: '/gallery/' },
	{ label: 'Reviews', href: '/reviews/' },
	{ label: 'FAQ', href: '/faq/' },
	{ label: 'Contact', href: '/contact/' },
];

export const icons = {
	calendar:
		'<path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
	phone:
		'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.58 2.61a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.26-1.24a2 2 0 0 1 2.11-.45c.84.26 1.71.46 2.61.58A2 2 0 0 1 22 16.92Z"/>',
	users:
		'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
	shield:
		'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67 0C7.5 20.5 4 18 4 13V5a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.1 1.1 0 0 1 1.52 0C14.5 2.8 17 4 19 4a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/>',
	speaker:
		'<path d="M4 9v6h4l5 4V5L8 9Z"/><path d="M16 9.5a4 4 0 0 1 0 5"/><path d="M19 7a8 8 0 0 1 0 10"/>',
	pin:
		'<path d="M12 22s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/>',
	rings:
		'<circle cx="9" cy="12" r="5"/><circle cx="15" cy="12" r="5"/>',
	cake:
		'<path d="M20 21H4v-9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z"/><path d="M8 10V7M12 10V7M16 10V7M4 15h16"/>',
	heart:
		'<path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 0 1 12 6a5 5 0 0 1 7.5 6.6Z"/>',
	briefcase:
		'<path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1"/><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M3 13h18"/>',
	graduate:
		'<path d="m22 10-10-5-10 5 10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/><path d="M22 10v6"/>',
	music:
		'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
	group:
		'<path d="M18 21a5 5 0 0 0-10 0"/><circle cx="13" cy="7" r="4"/><path d="M22 21a4 4 0 0 0-3-3.87"/><path d="M5 17.13A4 4 0 0 0 2 21"/>',
	mail:
		'<path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/>',
	send:
		'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
	star:
		'<path d="m12 2 2.9 6.25 6.84.83-5.05 4.67 1.34 6.75L12 17.16 5.97 20.5l1.34-6.75-5.05-4.67 6.84-.83Z"/>',
	check:
		'<path d="m20 6-11 11-5-5"/>',
	plus:
		'<path d="M12 5v14M5 12h14"/>',
} as const;

export type IconName = keyof typeof icons;

export const stats = [
	{ icon: 'star', badge: '35+', value: '35+ Years Each', label: 'of Experience' },
	{ icon: 'users', value: 'Weddings, Parties &', label: 'Corporate Events' },
	{ icon: 'shield', value: 'Fully', label: 'Insured' },
	{ icon: 'speaker', value: 'Professional', label: 'Sound & Lighting' },
	{ icon: 'pin', value: 'Serving Tameside,', label: 'Manchester & the North West' },
] satisfies Array<{ icon: IconName; badge?: string; value: string; label: string }>;

export const services = [
	{
		slug: 'weddings',
		title: 'Weddings',
		copy: 'The perfect soundtrack for your big day.',
		intro: 'A polished, friendly wedding DJ service for first dances, family favourites and a dancefloor that stays full.',
		icon: 'rings',
		accent: '#258dff',
		image: '/images/services/weddings.jpg',
		highlights: ['First dance and evening reception music', 'Guest-friendly requests and pacing', 'Professional setup for your venue'],
	},
	{
		slug: 'birthday-parties',
		title: 'Birthday Parties',
		copy: "From 18ths to 80ths, we've got it covered.",
		intro: 'Birthday parties work best when every age group gets a moment. We build the night in sections so nobody is left out.',
		icon: 'cake',
		accent: '#8b4dff',
		image: '/images/services/birthday-parties.jpg',
		highlights: ['18ths, 21sts, 30ths, 40ths, 50ths and beyond', '60s through current chart favourites', 'Announcements and friendly hosting'],
	},
	{
		slug: 'anniversaries',
		title: 'Anniversaries',
		copy: 'Celebrate in style with music you love.',
		intro: 'For anniversaries and family celebrations, we shape the music around the people in the room and the memories behind the night.',
		icon: 'heart',
		accent: '#e44ab8',
		image: '/images/services/anniversaries.jpg',
		highlights: ['Classic party sections across decades', 'Special songs planned in advance', 'Warm hosting without taking over'],
	},
	{
		slug: 'corporate-events',
		title: 'Corporate Events',
		copy: 'Professional DJ services for any corporate function.',
		intro: 'Reliable entertainment for staff parties, awards nights, Christmas events and company celebrations across Greater Manchester.',
		icon: 'briefcase',
		accent: '#2d9dff',
		image: '/images/services/corporate-events.jpg',
		highlights: ['Professional setup and punctual arrival', 'Background music into party mode', 'Clear communication with organisers'],
	},
	{
		slug: 'school-discos',
		title: 'School Discos',
		copy: 'Safe, fun and age appropriate music.',
		intro: 'Safe, controlled school disco entertainment with age-appropriate tracks and the right energy for the room.',
		icon: 'graduate',
		accent: '#19c98f',
		image: '/images/services/school-discos.jpg',
		highlights: ['Age-appropriate playlists', 'Reliable setup and clear sound', 'Friendly atmosphere and sensible pacing'],
	},
	{
		slug: 'pub-club-nights',
		title: 'Pub & Club Nights',
		copy: 'Keeping dancefloors full all night long.',
		intro: 'For the right venues and events, we bring crowd-reading, requests and decades of party music experience.',
		icon: 'music',
		accent: '#774cff',
		image: '/images/services/pub-club-nights.jpg',
		highlights: ['Party-focused sets, not generic playlists', 'Requests handled properly', 'Experienced hosts who can keep control'],
	},
	{
		slug: 'community-events',
		title: 'Community Events',
		copy: 'Festivals, fundraisers and local events.',
		intro: 'Community events need music that works for families, groups and mixed ages. We bring a friendly, local approach.',
		icon: 'group',
		accent: '#df9239',
		image: '/images/services/community.jpg',
		highlights: ['Fundraisers, festivals and local gatherings', 'Music for mixed-age crowds', 'Professional sound and setup'],
	},
] satisfies Array<{
	slug: string;
	title: string;
	copy: string;
	intro: string;
	icon: IconName;
	accent: string;
	image: string;
	highlights: string[];
}>;

export type Service = (typeof services)[number];

export const bullets = [
	['Experienced & Trusted', '35+ years of happy clients and packed dancefloors.'],
	['Tailored Playlists', 'We play the right music for your crowd.'],
	['Professional Setup', 'Quality sound, lighting and reliable equipment.'],
	['Smooth & Friendly MC', 'Clear announcements and seamless event flow.'],
	['Reliable & Punctual', 'We turn up, set up and deliver every time.'],
	['Local & Dedicated', 'Based in Tameside, proud to support our community.'],
] as const;

export const testimonials = [
	{
		quote: 'Tony & John were amazing at our wedding! The dancefloor was full all night.',
		name: 'Emma & Liam',
		location: 'Hyde',
		rating: 5,
		eventType: 'Wedding',
	},
	{
		quote: 'Brilliant DJs, great mix of music and very professional. Highly recommend.',
		name: 'Sarah',
		location: 'Ashton-under-Lyne',
		rating: 5,
		eventType: 'Birthday Party',
	},
	{
		quote: 'They know how to read a crowd and keep the party going. 10/10!',
		name: 'Mark',
		location: 'Stalybridge',
		rating: 5,
		eventType: 'Birthday Party',
	},
	{
		quote: 'Reliable, friendly and made our corporate night a huge success.',
		name: 'Lisa',
		location: 'Manchester',
		rating: 5,
		eventType: 'Corporate Event',
	},
	{
		quote: 'We have used TeeJays Disco for our pub nights for years. Simply the best.',
		name: 'The Royal Oak',
		location: 'Oldham',
		rating: 5,
		eventType: 'Pub Night',
	},
];

export const gallery = [
	{ src: '/images/gallery/dancefloor-lights.jpg', alt: 'Packed dancefloor under DJ stage lighting at a TeeJays Disco party night' },
	{ src: '/images/gallery/birthday-celebration.jpg', alt: 'Birthday party guests dancing to TeeJays Disco in Tameside' },
	{ src: '/images/gallery/wedding-reception.jpg', alt: 'Wedding reception with the bride and groom on the dancefloor' },
	{ src: '/images/gallery/dj-decks.jpg', alt: 'Tony at the DJ decks reading the room at a private function' },
	{ src: '/images/gallery/club-night.jpg', alt: 'Lively club night crowd dancing to a TeeJays set' },
	{ src: '/images/gallery/school-disco.jpg', alt: 'Children enjoying a TeeJays Disco school disco event' },
	{ src: '/images/gallery/dj-setup.jpg', alt: 'TeeJays Disco professional sound and lighting setup at a venue' },
	{ src: '/images/gallery/anniversary-party.jpg', alt: 'Couple dancing at an anniversary celebration with TeeJays Disco' },
	{ src: '/images/gallery/party-crowd.jpg', alt: 'Party crowd cheering as the DJ drops a favourite track' },
];

export const faqs = [
	{
		question: 'How much do you charge?',
		answer: 'Most professional private and corporate bookings start from around £500, depending on the date, venue, travel, timings and setup requirements.',
	},
	{
		question: 'What areas do you cover?',
		answer: 'We regularly cover Tameside, Manchester, Stockport, Oldham, Chester, Bolton and the wider North West. Travel further afield can be discussed.',
	},
	{
		question: 'What types of music do you play?',
		answer: 'We play party music across decades and styles, including 60s, 70s, 80s, 90s, 00s and current favourites. The set is shaped around your guests.',
	},
	{
		question: 'How far in advance should we book?',
		answer: 'As early as possible for Saturdays, weddings and Christmas dates. If your date is close, send an enquiry and we will confirm availability quickly.',
	},
	{
		question: 'How long is your typical set?',
		answer: 'Most evening parties run for around four to five hours, but we can tailor timings around your venue and event plan.',
	},
	{
		question: 'What do you need for setup?',
		answer: 'We need safe access, a suitable power supply, enough setup space and reasonable loading arrangements. We can confirm the details with your venue.',
	},
];

export const areas = [
	{
		slug: 'tameside',
		name: 'Tameside',
		description: 'Mobile DJs covering weddings, birthdays and parties across the whole of Tameside — Ashton, Hyde, Stalybridge, Denton, Droylsden, Mossley and Dukinfield.',
		venues: ['The Park, Dukinfield', 'Tameside Hippodrome', 'Stamford Park', 'Hartshead Pike', 'Hyde Town Hall'],
	},
	{
		slug: 'manchester',
		name: 'Manchester',
		description: 'Reliable Manchester DJ hire for city-centre venues, suburban hotels and private parties across Greater Manchester.',
		venues: ['The Midland Hotel', 'Manchester Hall', 'Victoria Warehouse', 'The Lowry Hotel', 'Town Hall venues'],
	},
	{
		slug: 'ashton-under-lyne',
		name: 'Ashton-under-Lyne',
		description: 'Local Ashton DJs for weddings, birthdays and community events with full sound and lighting setups.',
		venues: ['Ashton Town Hall', 'The Witchwood', 'Local clubs and pubs'],
	},
	{
		slug: 'hyde',
		name: 'Hyde',
		description: 'Hyde-based party DJs known for first dances, family birthdays and packed dancefloors all across SK14.',
		venues: ['Hyde Town Hall', 'Werneth Low venues', 'Local social clubs'],
	},
	{
		slug: 'stalybridge',
		name: 'Stalybridge',
		description: 'Stalybridge mobile DJ hire for private parties, weddings and pub nights with a true Tameside accent.',
		venues: ['Astley Cheetham Hall', 'Stalybridge Civic Hall', 'Local pubs and clubs'],
	},
	{
		slug: 'oldham',
		name: 'Oldham',
		description: 'Oldham wedding and party DJs covering Saddleworth, Lees, Royton, Chadderton and the surrounding area.',
		venues: ['Saddleworth Hotel', 'Oldham Event Centre', 'The Old Bell Inn'],
	},
	{
		slug: 'stockport',
		name: 'Stockport',
		description: 'Stockport DJ hire for weddings, milestone birthdays and corporate events from Bramhall to Marple.',
		venues: ['Bredbury Hall', 'Stockport Plaza', 'Bramall Hall'],
	},
];

// Populate dropdown children from data arrays
navItems.find((item) => item.label === 'Services')!.children = services.map((service) => ({
	label: service.title,
	href: `/services/${service.slug}/`,
}));

navItems.find((item) => item.label === 'Areas')!.children = areas.map((area) => ({
	label: area.name,
	href: `/areas/${area.slug}/`,
}));

export const serviceOptions = ['Wedding', 'Birthday Party', 'Anniversary', 'Corporate Event', 'School Disco', 'Community Event', 'Other'];
