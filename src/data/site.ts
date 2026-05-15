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
	phone: '07545 378105',
	phoneHref: 'tel:07545378105',
	whatsapp: '07545 378105',
	whatsappHref: 'https://wa.me/447545378105?text=Hi%20TeeJays%20%E2%80%94%20I%27d%20like%20to%20check%20availability%20for%20an%20event.',
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
	whatsapp:
		'<path d="M20.5 3.5A11 11 0 0 0 3.5 18.7L2 22l3.4-1.4a11 11 0 0 0 16.1-9.5 11 11 0 0 0-1-7.6Z"/><path d="M8.5 8.5c.3-.6.6-.7 1.1-.7h.5c.2 0 .5 0 .7.6.3.7.9 2.3 1 2.4 0 .2.1.3 0 .5l-.4.6-.5.6c-.2.1-.3.3-.2.6.3.5 1 1.6 2 2.4 1.2 1 2.2 1.3 2.5 1.5.3.1.5.1.6 0 .2-.2.7-.8.9-1.1.2-.3.4-.3.6-.2.3.1 1.7.8 2 1l.3.1c0 .1.1.4 0 1-.2.6-1 1.2-1.5 1.3-.4.1-1 .2-2.7-.6-2.3-1.1-3.8-3.4-3.9-3.6-.1-.1-.9-1.2-.9-2.4 0-1.1.6-1.7.8-1.9Z"/>',
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

export const galleryCategories = [
	{ id: 'all', label: 'All' },
	{ id: 'weddings', label: 'Weddings' },
	{ id: 'birthdays', label: 'Birthdays' },
	{ id: 'anniversaries', label: 'Anniversaries' },
	{ id: 'corporate', label: 'Corporate' },
	{ id: 'pub-club', label: 'Pub & Club' },
	{ id: 'school', label: 'School Discos' },
	{ id: 'community', label: 'Community' },
	{ id: 'setup', label: 'Setup & Decks' },
] as const;

type GalleryCategory = Exclude<(typeof galleryCategories)[number]['id'], 'all'>;

export const gallery: { src: string; alt: string; category: GalleryCategory }[] = [
	// Weddings
	{ src: '/images/gallery/wedding-reception.jpg', alt: 'Wedding reception with the bride and groom on the dancefloor', category: 'weddings' },
	{ src: '/images/gallery/wedding-newlyweds-dance.jpg', alt: 'Newlyweds during the first dance at the wedding reception', category: 'weddings' },
	{ src: '/images/gallery/dance-crowd.jpg', alt: 'Wedding guests filling the dancefloor at a TeeJays Disco set', category: 'weddings' },
	{ src: '/images/gallery/dancefloor-lights.jpg', alt: 'Packed wedding dancefloor under coloured DJ stage lighting', category: 'weddings' },

	// Birthdays
	{ src: '/images/gallery/birthday-cake-friends.jpg', alt: 'Birthday celebration with friends and a candle-lit cake', category: 'birthdays' },
	{ src: '/images/gallery/birthday-family.jpg', alt: 'Family celebrating a milestone birthday party with TeeJays Disco', category: 'birthdays' },
	{ src: '/images/gallery/birthday-friends.jpg', alt: 'Friends raising a toast at a joyful birthday celebration', category: 'birthdays' },
	{ src: '/images/gallery/birthday-celebration.jpg', alt: 'Birthday party guests dancing to TeeJays Disco in Tameside', category: 'birthdays' },
	{ src: '/images/gallery/party-crowd.jpg', alt: 'Birthday crowd cheering as the DJ drops a favourite track', category: 'birthdays' },

	// Anniversaries
	{ src: '/images/gallery/anniversary-elderly-dance.jpg', alt: 'Elderly couple dancing together at an anniversary celebration', category: 'anniversaries' },
	{ src: '/images/gallery/anniversary-party.jpg', alt: 'Couple dancing at an anniversary celebration with TeeJays Disco', category: 'anniversaries' },

	// Corporate
	{ src: '/images/gallery/corporate-event.jpg', alt: 'Corporate event with attendees enjoying a professional evening function', category: 'corporate' },
	{ src: '/images/gallery/corporate-businessman.jpg', alt: 'Business attendees at a TeeJays Disco corporate party', category: 'corporate' },

	// Pub & Club Nights
	{ src: '/images/gallery/club-night.jpg', alt: 'Lively pub and club night crowd dancing to a TeeJays Disco set', category: 'pub-club' },
	{ src: '/images/gallery/disco-laser-lights.jpg', alt: 'Vibrant disco party with laser lights and dancing crowd', category: 'pub-club' },
	{ src: '/images/gallery/club-rave-crowd.jpg', alt: 'Crowd of people dancing at a high-energy club night', category: 'pub-club' },
	{ src: '/images/gallery/club-dancing.jpg', alt: 'People dancing inside a venue at a TeeJays Disco party night', category: 'pub-club' },
	{ src: '/images/gallery/disco-bar.jpg', alt: 'People dancing at a disco bar with mood lighting', category: 'pub-club' },
	{ src: '/images/gallery/disco-women.jpg', alt: 'Group enjoying themselves on a busy disco dancefloor', category: 'pub-club' },

	// School Discos
	{ src: '/images/gallery/school-disco.jpg', alt: 'Children enjoying a TeeJays Disco school disco event', category: 'school' },

	// Community
	{ src: '/images/gallery/festival-crowd.jpg', alt: 'Community festival crowd enjoying outdoor entertainment', category: 'community' },
	{ src: '/images/gallery/festival-stage.jpg', alt: 'Community event stage with attendees enjoying live entertainment', category: 'community' },

	// Setup & Decks
	{ src: '/images/gallery/dj-setup.jpg', alt: 'TeeJays Disco professional sound and lighting setup at a venue', category: 'setup' },
	{ src: '/images/gallery/dj-decks.jpg', alt: 'Tony at the DJ decks reading the room at a private function', category: 'setup' },
	{ src: '/images/gallery/dj-board-lit.jpg', alt: 'Illuminated DJ controller with vibrant LED pads at a party', category: 'setup' },
	{ src: '/images/gallery/dj-mixer-closeup.jpg', alt: 'DJ mixer console under colourful neon party lights', category: 'setup' },
	{ src: '/images/gallery/dj-mixer-blue.jpg', alt: 'DJ playing a mixer with blue stage lighting', category: 'setup' },
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
	// === Tameside core (home turf) ===
	{
		slug: 'tameside',
		name: 'Tameside',
		featured: true,
		description: 'Mobile DJs covering weddings, birthdays and parties across the whole of Tameside — Ashton, Hyde, Stalybridge, Denton, Droylsden, Mossley and Dukinfield.',
		venues: ['Dukinfield Town Hall', 'Tameside Hippodrome', 'Stalybridge Civic Hall', 'Ashton Town Hall', 'Hyde Town Hall'],
	},
	{
		slug: 'ashton-under-lyne',
		name: 'Ashton-under-Lyne',
		featured: true,
		description: 'Local Ashton DJs for weddings, milestone birthdays and community events with full sound and lighting setups.',
		venues: ['Ashton Town Hall', 'The Witchwood', 'Premier Suite & Lounge (Audenshaw)'],
	},
	{
		slug: 'hyde',
		name: 'Hyde',
		featured: true,
		description: 'Hyde-based party DJs for weddings, family birthdays and packed dancefloors right across SK14 and the surrounding villages.',
		venues: ['Hyde Town Hall', 'Werneth Low Country Park venues', 'Local social and sports clubs'],
	},
	{
		slug: 'stalybridge',
		name: 'Stalybridge',
		featured: true,
		description: 'Stalybridge mobile DJ hire for weddings, private parties and pub nights with a proper Tameside accent.',
		venues: ['Astley Cheetham Public Hall', 'Stalybridge Civic Hall', 'Stalybridge Celtic event venues'],
	},
	{
		slug: 'dukinfield',
		name: 'Dukinfield',
		featured: false,
		description: 'Dukinfield DJ services for weddings, retirements, anniversaries and milestone birthdays at the local town hall and Masonic suite.',
		venues: ['Dukinfield Town Hall', 'Dukinfield Masonic Hall', 'Local pubs and sports clubs'],
	},
	{
		slug: 'denton',
		name: 'Denton',
		featured: false,
		description: 'Denton mobile DJs for parties, anniversaries and family celebrations at The Civic Building and across the town.',
		venues: ['The Civic Building (Festival Hall)', 'The Pennine Lounge', 'Local function rooms'],
	},
	{
		slug: 'mossley',
		name: 'Mossley',
		featured: false,
		description: 'Mossley party DJ hire for weddings, birthdays and community events across the Pennine edge of Tameside.',
		venues: ['Mossley Civic Hall', 'Local pubs and community venues'],
	},

	// === Greater Manchester core boroughs ===
	{
		slug: 'manchester',
		name: 'Manchester',
		featured: true,
		description: 'Reliable Manchester DJ hire for city-centre wedding venues, Northern Quarter parties and corporate functions across the city.',
		venues: ['Manchester Hall', 'King Street Townhouse', 'Ducie Street Warehouse', 'The Midland Hotel', 'Victoria Warehouse'],
	},
	{
		slug: 'oldham',
		name: 'Oldham',
		featured: true,
		description: 'Oldham wedding and party DJs covering Royton, Chadderton, Lees and on into Saddleworth — high DJ-search volume borough.',
		venues: ['Oldham Event Centre', 'Mercure Norton Grange Hotel', 'The Royal Toby Hotel (border)'],
	},
	{
		slug: 'saddleworth',
		name: 'Saddleworth',
		featured: false,
		description: 'Saddleworth wedding DJ hire for the rolling Pennine villages — Uppermill, Delph, Greenfield and Diggle — and the destination country venues.',
		venues: ['The Old Bell Inn (Delph)', 'West Tower (border)', 'Saddleworth Hotel'],
	},
	{
		slug: 'stockport',
		name: 'Stockport',
		featured: true,
		description: 'Stockport DJ hire for weddings, milestone birthdays and corporate events — high-demand borough with 300+ DJs but few you can trust.',
		venues: ['Bramall Hall', 'Alma Lodge Hotel', 'Stockport Town Hall', 'Bredbury Hall', 'Edgeley Park Events'],
	},
	{
		slug: 'bramhall',
		name: 'Bramhall',
		featured: false,
		description: 'Bramhall wedding DJ hire for Bramall Hall, Bramall Park Golf Club and the leafy SK7 venues — premium Stockport bookings.',
		venues: ['Bramall Hall', 'Bramall Park Golf Club', 'Local hotels and country clubs'],
	},
	{
		slug: 'cheadle',
		name: 'Cheadle',
		featured: false,
		description: 'Cheadle DJ services for weddings, Christmas parties and corporate functions at the Village Hotel and across SK8.',
		venues: ['Village Hotel Cheadle', 'Cheadle House', 'Local pub function rooms'],
	},
	{
		slug: 'marple',
		name: 'Marple',
		featured: false,
		description: 'Marple mobile DJ hire for weddings at Roman Lakes, Marple Sports Club functions and country pub parties along the canal side.',
		venues: ['Roman Lakes', 'Marple Sports Club', 'The Crown (Hawk Green)', 'Marple & Mellor Conservative Club'],
	},

	// === Trafford (premium / affluent belt) ===
	{
		slug: 'altrincham',
		name: 'Altrincham',
		featured: true,
		description: 'Altrincham wedding DJ hire for the Bowdon Rooms, OYEZ Arts at the Town Hall, and the affluent Cheshire-border party scene.',
		venues: ['The Bowdon Rooms', 'OYEZ Arts at Altrincham Town Hall', 'Local hotels and country clubs'],
	},
	{
		slug: 'sale',
		name: 'Sale',
		featured: false,
		description: 'Sale DJ services for weddings, anniversaries and family celebrations across leafy Trafford — 50+ wedding venues within reach.',
		venues: ['Sale Masonic Hall', 'Local function rooms', 'Cheshire-border country venues'],
	},

	// === Bolton & Bury countryside ===
	{
		slug: 'bolton',
		name: 'Bolton',
		featured: true,
		description: 'Bolton mobile DJ hire for weddings, milestone birthdays and corporate events — Mercure Georgian House, Bolton Whites and beyond.',
		venues: ['Mercure Bolton Georgian House Hotel', 'Bolton Whites Hotel', 'Silverwell Hall', 'Regent Hall'],
	},
	{
		slug: 'bury',
		name: 'Bury',
		featured: true,
		description: 'Bury DJ hire for weddings at Red Hall Hotel, civic celebrations and parties across BL9 — including Holcombe-edge countryside venues.',
		venues: ['Red Hall Hotel', 'Bolholt Country Park Hotel', 'Local civic venues'],
	},
	{
		slug: 'ramsbottom',
		name: 'Ramsbottom',
		featured: false,
		description: 'Ramsbottom destination wedding DJs for the Fisherman\'s Retreat, Ramsbottom Civic Hall and the Holcombe Hill country setting.',
		venues: ['The Fisherman\'s Retreat', 'Ramsbottom Civic Hall (Holcombe Room)', 'Holcombe Hill country venues'],
	},
	{
		slug: 'prestwich',
		name: 'Prestwich',
		featured: false,
		description: 'Prestwich party and wedding DJs for Prestwich Golf Club, the Cricket & Bowling Club and family-celebration venues.',
		venues: ['Prestwich Golf Club', 'Prestwich Cricket, Tennis & Bowling Club', 'Fairways Lodge'],
	},
	{
		slug: 'whitefield',
		name: 'Whitefield',
		featured: false,
		description: 'Whitefield mobile DJ hire for cricket club weddings, milestone birthdays and corporate functions across M45.',
		venues: ['Stand Cricket Club', 'Local hotels and function rooms'],
	},

	// === Salford ===
	{
		slug: 'salford',
		name: 'Salford',
		featured: true,
		description: 'Salford DJ hire for weddings at Buile Hill Park Hall, MediaCity corporate events and family parties across M5/M6/M7.',
		venues: ['Buile Hill Park Hall', 'The Court House (Worsley)', 'Local hotels and function rooms'],
	},
	{
		slug: 'worsley',
		name: 'Worsley',
		featured: false,
		description: 'Worsley wedding DJ hire for Delta Hotels Worsley Park Country Club, The Court House and the leafier side of Salford.',
		venues: ['Delta Hotels by Marriott Worsley Park', 'The Court House Worsley', 'Local country pubs'],
	},

	// === Rochdale ===
	{
		slug: 'rochdale',
		name: 'Rochdale',
		featured: false,
		description: 'Rochdale wedding and party DJs for the Town Hall, Royal Toby Hotel and Touchstones — high-volume borough with 300+ DJs to choose from.',
		venues: ['Rochdale Town Hall', 'The Royal Toby Hotel', 'Touchstones Rochdale'],
	},
	{
		slug: 'heywood',
		name: 'Heywood',
		featured: false,
		description: 'Heywood DJ services for weddings at The Birch Hotel, civic events and milestone birthdays across OL10.',
		venues: ['The Birch Hotel', 'Heywood Civic Centre', 'Local clubs and pubs'],
	},

	// === South Manchester suburbs (premium pub / private party niche) ===
	{
		slug: 'didsbury',
		name: 'Didsbury',
		featured: false,
		description: 'Didsbury DJ hire for premium pub weddings, private parties and milestone birthdays across M20 — The Metropolitan, Woodstock Arms and beyond.',
		venues: ['The Metropolitan (West Didsbury)', 'The Woodstock Arms', 'Volta'],
	},
	{
		slug: 'chorlton',
		name: 'Chorlton',
		featured: false,
		description: 'Chorlton mobile DJ hire for pub weddings, birthdays and the bohemian party crowd of M21.',
		venues: ['Beech Inn', 'The Beagle', 'Electrik'],
	},
];

// Populate dropdown children from data arrays
navItems.find((item) => item.label === 'Services')!.children = services.map((service) => ({
	label: service.title,
	href: `/services/${service.slug}/`,
}));

navItems.find((item) => item.label === 'Areas')!.children = areas
	.filter((area) => area.featured)
	.map((area) => ({
		label: area.name,
		href: `/areas/${area.slug}/`,
	}));

export const serviceOptions = ['Wedding', 'Birthday Party', 'Anniversary', 'Corporate Event', 'School Disco', 'Community Event', 'Other'];
