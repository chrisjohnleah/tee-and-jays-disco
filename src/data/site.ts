// =====================================================
// TeeJays Disco — Core Site Data (minimal, stable core)
// =====================================================
// All large arrays have been moved to dedicated modules.
// This file now only holds unique assets + re-exports.

import { areas } from './areas';
import { services } from './services';
import { icons, type IconName } from './icons';

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
	email: 'bookings@teejaysdisco.co.uk',
	emailHref: 'mailto:bookings@teejaysdisco.co.uk',
	location: 'Tameside, Greater Manchester',
};


type NavItem = {
	label: string;
	href: string;
	children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Weddings', href: '/wedding-djs/' }, // Biggest market — direct prominent link
	{ label: 'Services', href: '/services/', children: [] },
	{ label: 'Areas', href: '/areas/', children: [] },
	{ label: 'About', href: '/about/' },
	{ label: 'Gallery', href: '/gallery/' },
	{ label: 'Contact', href: '/contact/' },
];

// icons moved to ./icons.ts to break circular dependencies
export { icons, type IconName } from './icons';

export const stats = [
	{ icon: 'star', badge: '35+', value: '35+ Years Each', label: 'of Experience' },
	{ icon: 'users', value: 'Weddings, Parties &', label: 'Corporate Events' },
	{ icon: 'shield', value: 'Fully', label: 'Insured' },
	{ icon: 'speaker', value: 'Professional', label: 'Sound & Lighting' },
	{ icon: 'pin', value: 'Serving Tameside,', label: 'Manchester & the North West' },
] satisfies Array<{ icon: IconName; badge?: string; value: string; label: string }>;


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

// =====================================================
// Re-exports from the new modular data layer
// =====================================================
export { services, type Service } from './services';
export { areas, type Area } from './areas';
export { localIntelligence, type AreaIntelligence, type VenueIntel } from './localIntelligence';
export { personas, type Persona } from './personas';

// =====================================================
// Service hubs for the 7 complete service + location sections
// (rich pSEO pages with area sub-pages and local intelligence).
// Balanced nav: Weddings kept as *sole* prominent top-level item
// (highest-value market). The other 6 rich hubs live in Services
// dropdown + cross-links. This prevents top-nav bloat as we scale.
// "All Services" still points to the general /services/ overview.
// =====================================================
const serviceHubs: Record<string, { label: string; href: string }> = {
	'weddings': { label: 'Wedding DJs', href: '/wedding-djs/' },
	'birthday-parties': { label: 'Birthday Party DJs', href: '/birthday-party-djs/' },
	'anniversaries': { label: 'Anniversary DJs', href: '/anniversary-djs/' },
	'corporate-events': { label: 'Corporate DJs', href: '/corporate-djs/' },
	'school-discos': { label: 'School Disco DJs', href: '/school-disco-djs/' },
	'pub-club-nights': { label: 'Pub & Club DJs', href: '/pub-club-djs/' },
	'community-events': { label: 'Community DJs', href: '/community-djs/' },
};

// =====================================================
// Nav population — clean, balanced & scalable structure
// =====================================================
const servicesNavItem = navItems.find((item) => item.label === 'Services')!;
servicesNavItem.children = services
	.filter((service) => service.slug !== 'weddings')
	.map((service) => {
		const hub = serviceHubs[service.slug];
		return {
			label: hub?.label ?? service.title,
			href: hub?.href ?? `/services/${service.slug}/`,
		};
	});

navItems.find((item) => item.label === 'Areas')!.children = areas
	.filter((area) => area.featured)
	.map((area) => ({
		label: area.name,
		href: `/areas/${area.slug}/`,
	}));

export const serviceOptions = ['Wedding', 'Birthday Party', 'Anniversary', 'Corporate Event', 'School Disco', 'Pub & Club Night', 'Community Event', 'Other'];
