/**
 * TeeJays Disco — Services Data (typed & exported)
 * Migrated from site.ts with full TypeScript support for programmatic use.
 */

import type { IconName } from './icons';

export interface Service {
  slug: string;
  title: string;
  copy: string;
  intro: string;
  icon: IconName;
  accent: string;
  image: string;
  highlights: string[];
  /** The slug for the rich location-specific hub (e.g. 'wedding-djs') — powers conversion from general service pages into the 8-area pSEO pages */
  djsHub: string;
}

export const services: Service[] = [
  {
    slug: 'weddings',
    title: 'Weddings',
    copy: 'The perfect soundtrack for your big day.',
    intro: 'A polished, friendly wedding DJ service for first dances, family favourites and a dancefloor that stays full.',
    icon: 'rings',
    accent: '#258dff',
    image: '/images/services/weddings.jpg',
    highlights: [
      'First dance and evening reception music',
      'Guest-friendly requests and pacing',
      'Professional setup for your venue',
    ],
    djsHub: 'wedding-djs',
  },
  {
    slug: 'birthday-parties',
    title: 'Birthday Parties',
    copy: "From 18ths to 80ths, we've got it covered.",
    intro: 'Birthday parties work best when every age group gets a moment. We build the night in sections so nobody is left out.',
    icon: 'cake',
    accent: '#8b4dff',
    image: '/images/services/birthday-parties.jpg',
    highlights: [
      '18ths, 21sts, 30ths, 40ths, 50ths and beyond',
      '60s through current chart favourites',
      'Announcements and friendly hosting',
    ],
    djsHub: 'birthday-party-djs',
  },
  {
    slug: 'anniversaries',
    title: 'Anniversaries',
    copy: 'Celebrate in style with music you love.',
    intro: 'For anniversaries and family celebrations, we shape the music around the people in the room and the memories behind the night.',
    icon: 'heart',
    accent: '#e44ab8',
    image: '/images/services/anniversaries.jpg',
    highlights: [
      'Classic party sections across decades',
      'Special songs planned in advance',
      'Warm hosting without taking over',
    ],
    djsHub: 'anniversary-djs',
  },
  {
    slug: 'corporate-events',
    title: 'Corporate Events',
    copy: 'Professional DJ services for any corporate function.',
    intro: 'Reliable entertainment for staff parties, awards nights, Christmas events and company celebrations across Greater Manchester.',
    icon: 'briefcase',
    accent: '#2d9dff',
    image: '/images/services/corporate-events.jpg',
    highlights: [
      'Professional setup and punctual arrival',
      'Background music into party mode',
      'Clear communication with organisers',
    ],
    djsHub: 'corporate-djs',
  },
  {
    slug: 'school-discos',
    title: 'School Discos',
    copy: 'Safe, fun and age appropriate music.',
    intro: 'Safe, controlled school disco entertainment with age-appropriate tracks and the right energy for the room.',
    icon: 'graduate',
    accent: '#19c98f',
    image: '/images/services/school-discos.jpg',
    highlights: [
      'Age-appropriate playlists',
      'Reliable setup and clear sound',
      'Friendly atmosphere and sensible pacing',
    ],
    djsHub: 'school-disco-djs',
  },
  {
    slug: 'pub-club-nights',
    title: 'Pub & Club Nights',
    copy: 'Keeping dancefloors full all night long.',
    intro: 'For the right venues and events, we bring crowd-reading, requests and decades of party music experience.',
    icon: 'music',
    accent: '#774cff',
    image: '/images/services/pub-club-nights.jpg',
    highlights: [
      'Party-focused sets, not generic playlists',
      'Requests handled properly',
      'Experienced hosts who can keep control',
    ],
    djsHub: 'pub-club-djs',
  },
  {
    slug: 'community-events',
    title: 'Community Events',
    copy: 'Festivals, fundraisers and local events.',
    intro: 'Community events need music that works for families, groups and mixed ages. We bring a friendly, local approach.',
    icon: 'group',
    accent: '#df9239',
    image: '/images/services/community.jpg',
    highlights: [
      'Fundraisers, festivals and local gatherings',
      'Music for mixed-age crowds',
      'Professional sound and setup',
    ],
    djsHub: 'community-djs',
  },
];

export type { Service };
