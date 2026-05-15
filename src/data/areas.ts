/**
 * TeeJays Disco — Areas Data (typed & exported)
 * Clean, typed version of the original areas array.
 * Featured areas appear in navigation and get priority in pSEO rollout.
 */

export interface Area {
  slug: string;
  name: string;
  featured: boolean;
  description: string;
  venues: string[]; // legacy flat list — will be superseded by localIntelligence for rich pages
}

export const areas: Area[] = [
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

export type { Area };
