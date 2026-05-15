/**
 * TeeJays Disco — Persona Pages Data
 * High-intent audience-specific landing pages (e.g. "50th Birthday DJ", "Asian Wedding DJ")
 * These pages will live at /personas/[slug] and cross-link heavily with service+location pages.
 */

export interface Persona {
  slug: string;
  title: string;           // "50th Birthday DJs"
  shortTitle: string;      // "50th Birthday"
  targetAudience: string;
  keyChallenges: string[];
  musicStrategy: string;
  recommendedServices: string[]; // slugs from services
  seoDescription: string;
}

export const personas: Persona[] = [
  {
    slug: '50th-birthday-dj',
    title: '50th Birthday DJs',
    shortTitle: '50th Birthday',
    targetAudience: 'People celebrating a milestone 50th with family and friends',
    keyChallenges: [
      'Multiple generations in one room (kids to grandparents)',
      'Want it to feel special, not "just another party"',
      'Need the right balance of classic hits + current music',
    ],
    musicStrategy: 'Strong 70s/80s soul & pop section, big sing-alongs, then modern floor-fillers. We read the room and move between decades smoothly.',
    recommendedServices: ['birthday-parties', 'anniversaries'],
    seoDescription: 'Professional 50th birthday DJs across Tameside, Stockport, Oldham and Greater Manchester. Multi-generational parties done properly.',
  },
  {
    slug: 'asian-wedding-dj',
    title: 'Asian Wedding DJs',
    shortTitle: 'Asian Wedding',
    targetAudience: 'South Asian families planning a wedding with traditional + modern elements',
    keyChallenges: [
      'Long day (often 3–4 separate events)',
      'Mixture of traditional music requests + modern British-Asian tastes',
      'Need a DJ who understands the flow of the day',
    ],
    musicStrategy: 'Respectful handling of traditional songs + seamless transition into high-energy Bhangra, Bollywood, and current UK/Asian chart. We work closely with the family and planners.',
    recommendedServices: ['weddings'],
    seoDescription: 'Experienced Asian wedding DJs in Manchester, Tameside and the North West. We understand the full day flow and music requirements.',
  },
  {
    slug: 'school-disco-dj',
    title: 'School Disco DJs',
    shortTitle: 'School Disco',
    targetAudience: 'Primary and secondary schools, PTAs, and youth organisations',
    keyChallenges: [
      'Age-appropriate music only',
      'High energy but safe environment',
      'Teachers and parents want reliability and professionalism',
    ],
    musicStrategy: 'Carefully curated age-appropriate playlists (no explicit lyrics), big interactive moments, and a friendly hosting style that keeps everyone happy and safe.',
    recommendedServices: ['school-discos'],
    seoDescription: 'Safe, fun and properly age-appropriate school disco DJs across Tameside, Manchester and the North West.',
  },
  {
    slug: 'retirement-party-dj',
    title: 'Retirement Party DJs',
    shortTitle: 'Retirement Party',
    targetAudience: 'Colleagues, friends and family celebrating someone leaving work',
    keyChallenges: [
      'Often held in pubs or function rooms with mixed ages',
      'Want to honour the person without being overly sentimental',
      'Good mix of music from their era + dancefloor fillers',
    ],
    musicStrategy: 'Focus on the music the retiree actually loves, plus enough crowd-pleasers to keep the younger guests dancing. Speeches and presentations handled sensitively.',
    recommendedServices: ['anniversaries', 'birthday-parties', 'community-events'],
    seoDescription: 'Professional retirement party DJs in Greater Manchester. Warm, respectful, and still able to throw a proper party.',
  },
];

export type { Persona };
