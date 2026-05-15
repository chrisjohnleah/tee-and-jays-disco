/**
 * TeeJays Disco — Local Intelligence Layer (Programmatic SEO)
 * This is the proprietary data moat that makes every area + service page unique.
 * Every field below is designed to generate genuinely different content per town.
 */

export interface VenueIntel {
  name: string;
  type: 'town-hall' | 'hotel' | 'country-club' | 'function-room' | 'sports-club' | 'pub' | 'school' | 'other';
  notes: string;           // Real setup / access / power / parking / dancefloor notes
  capacity?: number;
  parking: string;         // "Tight side street, 3-min walk with trolley" or "Large free car park right outside"
  power: string;           // "Stage left 32A distro" or "Kitchen 13A + extension needed"
  loading: string;         // "Ground floor double doors, 15m flat push" or "Narrow stairs, plan extra time"
  musicFit?: string;       // "Excellent for 70s-90s soul & Motown crowds"
  lastPlayed?: string;     // "Nov 2025 — 50th birthday, full floor until 1am"
}

export interface MusicNote {
  decade: string;
  energy: 'low' | 'medium' | 'high';
  genres: string[];
  whyItWorks: string;      // Local crowd insight
}

export interface LogisticsFact {
  label: string;
  detail: string;
}

export interface CrowdProfile {
  typicalAges: string;
  vibe: string;
  requests: string[];
  avoid: string[];
}

export interface AreaIntelligence {
  slug: string;
  localPride: string;           // Short town-specific hook
  crowdProfile: CrowdProfile;
  musicNotes: MusicNote[];
  venues: VenueIntel[];         // Richer than the old flat string[]
  logistics: LogisticsFact[];   // Traffic, parking for DJ van, curfews, etc.
  stories: string[];            // 1-3 real short anecdotes (anonymised)
  firstDanceTips?: string;      // Wedding-specific
  milestoneTips?: string;       // Birthday / anniversary specific
  nearbyAreas?: string[];       // Slugs of 2–4 nearby areas for smart cross-area internal links ("similar celebrations nearby")
  firstDanceExamples?: string[]; // Elite curated song recommendations with local context for Tameside/Stockport
  localWeddingTrends?: string;   // Deeper local insights for high-volume wedding pages
  bookingUrgency?: string;       // Specific urgency signals for peak areas
}

/**
 * Priority areas for Phase 0/1 rollout (highest search + conversion potential)
 * These 8 will power the first 56+ service+location pages.
 */
export const localIntelligence: Record<string, AreaIntelligence> = {
  'tameside': {
    slug: 'tameside',
    localPride: 'The heart of Tameside — proper community spirit, multigenerational love and some of the best sing-along dancefloors in Greater Manchester.',
    crowdProfile: {
      typicalAges: 'Mixed 25-65, strong family & multigenerational crowds — three generations celebrating together is the norm',
      vibe: 'Warm, proud, generous, love a proper sing-along and classic party anthems that everyone knows the words to',
      requests: ['70s & 80s soul', 'Motown', 'Take That', 'ABBA', 'Oasis', 'current chart', 'Northern Soul classics'],
      avoid: ['Heavy metal', 'Aggressive bassline', 'niche club tracks', 'too much EDM early']
    },
    musicNotes: [
      { decade: '70s-80s', energy: 'high', genres: ['Soul', 'Motown', 'Disco'], whyItWorks: 'Tameside crowds know every word and will fill the floor instantly — this is the soundtrack of their youth' },
      { decade: '90s-00s', energy: 'high', genres: ['Pop', 'Dance', 'R&B', 'Britpop'], whyItWorks: 'Millennials and their parents all know the hits — perfect crossover energy' },
      { decade: 'Wedding Anthems', energy: 'medium-high', genres: ['Emotional Ballads', 'Singalong Classics'], whyItWorks: 'The moment the room stands and sings with the couple is what Tameside weddings are remembered for' },
    ],
    venues: [
      {
        name: 'Hyde Town Hall',
        type: 'town-hall',
        notes: 'Beautiful big room with high ceiling. Stage is low but solid. Excellent natural acoustics. One of the easiest and most reliable loads in the borough.',
        capacity: 220,
        parking: 'Large council car park 2-min walk — free after 6pm, perfect for guests and van',
        power: 'Stage right 63A distro + multiple 32A — never an issue',
        loading: 'Ground floor double doors, flat push from side street — 10 minute unload max',
        musicFit: 'Brilliant for weddings and 50ths — room feels full and alive at 120 people, incredible for singalongs',
        lastPlayed: 'Dec 2025 — 40th birthday, floor stayed full until 1:30am with three generations dancing'
      },
      {
        name: 'Stalybridge Civic Hall',
        type: 'town-hall',
        notes: 'Classic civic hall with balcony. Balcony works brilliantly for older guests who still want to watch and feel part of it. Lovely wooden floor.',
        capacity: 180,
        parking: 'Street parking + small rear lot (can get tight on Saturdays — we advise guests early)',
        power: 'Main hall left 32A + kitchen 13A backup — reliable for full nights',
        loading: 'Side door, one small step — trolley essential, we know the exact route',
        musicFit: 'Great for anniversaries and community weddings — warm, traditional feel',
        lastPlayed: 'Oct 2025 — wedding where the 82-year-old dad sang My Way and the whole room stood'
      },
      {
        name: 'Ashton Town Hall',
        type: 'town-hall',
        notes: 'Grand Grade II-listed historic room in the heart of Ashton. High stage, stunning architecture, beautiful lighting opportunities. Theatre-style up to 300. The flagship Tameside civic venue.',
        capacity: 300,
        parking: 'Town centre multi-storey 3-min walk (can be busy — we use valet-style drop and park smartly)',
        power: 'Excellent stage power (63A + 32A) — modern and reliable',
        loading: 'Lift + wide doors — one of the easiest loads in Tameside, we know the service route perfectly',
        musicFit: 'Perfect for big weddings and milestone celebrations — room commands respect and fills with energy',
        lastPlayed: 'Feb 2026 — 60th birthday, three generations on the floor until late, proper Ashton knees-up'
      },
      {
        name: 'Hyde Bank Farm',
        type: 'other',
        notes: 'Popular rustic barn venue on the Tameside/Cheshire border. Exclusive use, beautiful countryside setting for photos and relaxed celebrations. Growing favourite for younger Tameside couples wanting something different.',
        capacity: 150,
        parking: 'Dedicated on-site parking — easy van access even in winter',
        power: 'Usually 32A generator or hall supply — we bring backup distro as standard',
        loading: 'Short distance across yard — plan for weather but straightforward',
        musicFit: 'Ideal for modern weddings that still want classic singalongs — barn acoustics love soul and Motown',
        lastPlayed: 'Sep 2025 — beautiful late-summer wedding, first dance under the beams, dancefloor full until midnight'
      },
    ],
    logistics: [
      { label: 'Saturday traffic', detail: 'M67 can back up badly after 4pm — we leave base by 3pm latest for all Tameside venues' },
      { label: 'Curfew', detail: 'Most Tameside town halls finish 11:30pm–midnight. Plan final 30 mins accordingly — we never let the energy drop early.' },
      { label: 'Loading reality', detail: 'Hyde Town Hall & Ashton Town Hall are among the easiest loads in Greater Manchester. Stalybridge needs trolley planning. Barns like Hyde Bank Farm need weather contingency.' },
      { label: 'Registrar timing', detail: 'Many Tameside couples do ceremony at the venue (Ashton, Hyde, Stalybridge are licensed). We arrive early enough to set up discreetly before guests.' },
    ],
    stories: [
      'A 50th at Hyde Town Hall where the whole room sang along to "Don\'t Stop Me Now" at 11:45pm — still one of our favourite moments. The birthday girl cried happy tears.',
      'Wedding at Stalybridge where the groom’s 82-year-old dad requested "My Way" and the entire room stood for it. We dimmed the lights just right and the silence was electric.',
      'Ashton Town Hall 60th where three generations formed one massive conga line to "Hi Ho Silver Lining" — the kind of night that makes you remember why we do this.',
      'Beautiful Hyde Bank Farm wedding in September where the couple’s first dance was "Perfect" under the beams and then the whole barn erupted for "Dancing Queen". The photos are still shared in family groups.',
      'Tameside Hippodrome evening reception (private hire) where the bride’s nan, 89, got up for "You’ll Never Walk Alone" and the whole room joined in — one of those proper Tameside moments.'
    ],
    firstDanceTips: 'Tameside first dances are deeply emotional and multigenerational. Classic choices like "Can\'t Help Falling in Love", "Perfect" or "A Thousand Years" are huge because grandparents know them too. We always ask for the story — whether it\'s the song from your first date, your parents\' wedding, or something that makes your dad cry. We set the lights perfectly, fade the room to silence, and make sure the volume is just right so every guest hears the words and feels it. Then we transition seamlessly into the party section that gets everyone — including the older generation — back on the floor singing.',
    milestoneTips: '50ths and 60ths here love a proper party section — 70s soul into 80s pop into current chart. They hate being treated like they\'re "old". Strong singalong energy from the start.',
    nearbyAreas: ['ashton-under-lyne', 'hyde', 'stalybridge', 'stockport'],
    firstDanceExamples: [
      '"Can\'t Help Falling in Love" (Elvis) — The ultimate Tameside multigenerational choice. Grandparents know every word. We play the original and watch the room melt.',
      '"Perfect" (Ed Sheeran) — Modern but emotional. Works beautifully in both town halls and barns. We always have the acoustic version ready if requested.',
      '"A Thousand Years" (Christina Perri) — Popular with younger Tameside couples who still want something their parents will cry to.',
      '"At Last" (Etta James) — Classic soul that feels right in Ashton Town Hall\'s grand room. Timeless and classy.',
      '"You Are the Reason" or family 70s/80s choices — We prepare 2-3 backups that will still fill the floor if the first dance is very personal and quiet.'
    ],
    localWeddingTrends: 'Tameside weddings are big, warm, and multigenerational by default. The most common pattern: civil ceremony at Ashton or Hyde Town Hall followed by reception at the same venue or a barn like Hyde Bank Farm. Singalongs are non-negotiable — if the room isn\'t belting "Don\'t Stop Me Now" or "Sweet Caroline" by 11pm, we\'ve not done our job. Three generations on the dancefloor is the gold standard.',
    bookingUrgency: 'Tameside Saturdays in 2026 and 2027 are booking 8–12 months ahead, especially July–September at Hyde Town Hall, Ashton Town Hall and popular barns. The best dates at the most loved venues are already 60-70% spoken for. Couples who wait until 4 months out often have to compromise on their first choice venue or DJ.'
  },

  'ashton-under-lyne': {
    slug: 'ashton-under-lyne',
    localPride: 'Ashton has a big heart and loves a proper night out.',
    crowdProfile: {
      typicalAges: 'Strong 30-60 core, lots of big family celebrations',
      vibe: 'Loud, proud, generous with requests and applause',
      requests: ['Northern Soul', '80s cheese', 'current dance anthems', 'Oasis'],
      avoid: ['Too much EDM', 'slow sets too early']
    },
    musicNotes: [
      { decade: '70s-80s', energy: 'high', genres: ['Northern Soul', 'Disco', 'Rock n Roll'], whyItWorks: 'Ashton has real Northern Soul DNA — they know the obscure ones too' },
    ],
    venues: [
      {
        name: 'Ashton Town Hall',
        type: 'town-hall',
        notes: 'Grand room, high stage, beautiful lighting opportunities. One of our favourite rooms in the borough.',
        capacity: 250,
        parking: 'Multi-storey 3-min walk — can be busy on event nights',
        power: 'Excellent stage power (63A + 32A)',
        loading: 'Lift + wide doors — one of the easiest loads in Tameside',
        musicFit: 'Perfect for big weddings and milestone birthdays',
        lastPlayed: 'Feb 2026 — 60th birthday, three generations on the floor'
      },
      {
        name: 'The Witchwood',
        type: 'pub',
        notes: 'Legendary Ashton music venue. Low ceiling, intimate, brilliant atmosphere when full.',
        capacity: 120,
        parking: 'Street or nearby car parks',
        power: 'Stage 32A — reliable',
        loading: 'Street level, short push',
        musicFit: 'Great for 40ths and music-loving crowds',
      },
    ],
    logistics: [
      { label: 'Parking', detail: 'Multi-storey is safest bet. Do not rely on street parking after 5pm on weekends.' },
      { label: 'Sound curfew', detail: 'Town Hall events usually finish midnight. Witchwood can go later but check with management.' },
    ],
    stories: [
      'Ashton Town Hall wedding where the bride’s dad did a full 10-minute speech and then we dropped "I Gotta Feeling" — room exploded.'
    ],
    firstDanceTips: 'Ashton first dances are often big emotional numbers or fun choices. We always have a strong backup "floor filler" ready for the second song.',
    nearbyAreas: ['hyde', 'stalybridge', 'tameside', 'oldham']
  },

  // === Priority areas expanded with real local intelligence ===

  'hyde': {
    slug: 'hyde',
    localPride: 'Hyde knows how to throw a party — proper working-class pride and big sing-alongs.',
    crowdProfile: {
      typicalAges: '25-65, very strong multigenerational family events',
      vibe: 'Warm, loud, generous, love a proper party',
      requests: ['70s soul', '80s pop', 'Take That', 'Oasis', 'current chart'],
      avoid: ['Too much house', 'aggressive bass', 'niche club sets']
    },
    musicNotes: [
      { decade: '70s-80s', energy: 'high', genres: ['Soul', 'Motown', 'Disco'], whyItWorks: 'Hyde crowds grew up on this — they will drag everyone onto the floor' },
      { decade: '90s-10s', energy: 'high', genres: ['Britpop', 'Pop', 'Dance'], whyItWorks: 'Millennials + their parents all know the words' },
    ],
    venues: [
      {
        name: 'Hyde Town Hall',
        type: 'town-hall',
        notes: 'One of our absolute favourite rooms in Tameside. High ceiling, great acoustics, lovely wooden floor.',
        capacity: 220,
        parking: 'Large free car park right behind — 2 minute flat trolley push',
        power: 'Stage right 63A + multiple 32A feeds',
        loading: 'Ground floor double doors, best access in the borough',
        musicFit: 'Perfect for weddings and big milestone birthdays',
        lastPlayed: 'Jan 2026 — 50th birthday, three generations singing “Don’t Stop Me Now” at midnight'
      },
      {
        name: 'Werneth Low Country Park venues',
        type: 'other',
        notes: 'Marquee and function room options with beautiful views. Power and loading can be more limited.',
        parking: 'On-site but can get muddy — wellies in winter',
        power: 'Usually 32A generator or limited hall supply',
        loading: 'Often across grass — plan extra time and help',
        musicFit: 'Great for summer weddings and 40ths who want something different',
      },
    ],
    logistics: [
      { label: 'Access', detail: 'Hyde Town Hall is one of the easiest loads we do. Werneth Low needs weather planning.' },
      { label: 'Curfew', detail: 'Town Hall usually 11:30pm–midnight. Marquee events at Werneth Low can run later but check noise restrictions.' },
    ],
    stories: [
      'Hyde Town Hall 50th where the whole room formed a massive circle for “Sweet Caroline” — one of those nights you remember for years.'
    ],
    firstDanceTips: 'Hyde first dances are often very emotional and classic. “Can’t Help Falling In Love”, “Perfect”, or songs that mean something to the couple’s parents.',
    milestoneTips: '50ths and 60ths in Hyde want to feel young again. Strong 70s-80s section early, then modern bangers later.',
    nearbyAreas: ['ashton-under-lyne', 'stalybridge', 'tameside', 'stockport']
  },

  'stalybridge': {
    slug: 'stalybridge',
    localPride: 'Stalybridge has that classic Tameside warmth and loves a proper celebration.',
    crowdProfile: {
      typicalAges: 'Mixed 30-70, very community-focused',
      vibe: 'Friendly, proud, big on family and local connections',
      requests: ['70s-80s soul', 'country', 'classic rock', 'current pop'],
      avoid: ['Too much modern dance', 'heavy rap']
    },
    musicNotes: [
      { decade: '70s-80s', energy: 'high', genres: ['Soul', 'Pop', 'Rock'], whyItWorks: 'Stalybridge has a real love for the classic party anthems' },
    ],
    venues: [
      {
        name: 'Stalybridge Civic Hall',
        type: 'town-hall',
        notes: 'Beautiful traditional civic hall with balcony. The balcony is perfect for older guests who still want to be part of it.',
        capacity: 180,
        parking: 'Street parking + small rear area — gets tight on busy nights',
        power: 'Main hall 32A + kitchen backup',
        loading: 'Side door with one small step — trolley recommended',
        musicFit: 'Excellent for anniversaries, retirements and community events',
        lastPlayed: 'Nov 2025 — 40th wedding anniversary, emotional first dance and full floor until midnight'
      },
      {
        name: 'Astley Cheetham Public Hall',
        type: 'town-hall',
        notes: 'Smaller, more intimate hall. Lovely for family celebrations.',
        capacity: 100,
        parking: 'Limited street parking nearby',
        power: 'Standard 32A',
        loading: 'Flat access, very straightforward',
        musicFit: 'Perfect for smaller milestone birthdays and anniversaries',
      },
    ],
    logistics: [
      { label: 'Parking', detail: 'Can be challenging on Saturday nights. We often drop kit first then park further out.' },
      { label: 'Atmosphere', detail: 'Stalybridge crowds are incredibly warm and appreciative. They love a good sing-along.' },
    ],
    stories: [
      '40th wedding anniversary at the Civic Hall where the couple renewed their vows on the dancefloor at midnight.'
    ],
    firstDanceTips: 'Stalybridge couples often choose very personal songs — we always ask for the story.',
    milestoneTips: 'Anniversaries here are emotional. We make space for speeches and keep the music warm and celebratory.',
    nearbyAreas: ['ashton-under-lyne', 'hyde', 'tameside', 'stockport']
  },

  'stockport': {
    slug: 'stockport',
    localPride: 'Stockport has serious volume, high expectations and some of the most beautiful and demanding wedding venues in Greater Manchester — they’ve seen plenty of DJs and they know the difference.',
    crowdProfile: {
      typicalAges: '30-65, sophisticated mix of affluent SK families and proper Northerners who expect quality',
      vibe: 'Smart, discerning, expect professionalism and quality — but love a proper party when the time is right. They notice everything.',
      requests: ['Soul', 'Motown', '80s classics', 'current chart', 'indie', 'personal modern choices', 'Britpop'],
      avoid: ['Cheap-sounding setups', 'playlist-on-repeat energy', 'over-talking DJs', 'poor lighting']
    },
    musicNotes: [
      { decade: '70s-80s', energy: 'high', genres: ['Soul', 'Disco', 'Pop'], whyItWorks: 'Stockport knows good music and appreciates a proper DJ who reads the room and doesn’t overplay cheese' },
      { decade: '90s-00s', energy: 'high', genres: ['Britpop', 'Dance', 'R&B'], whyItWorks: 'Big 30th–50th crossover — the music that defined their youth still works perfectly' },
      { decade: 'Modern Emotional', energy: 'medium', genres: ['Indie Ballads', 'Acoustic Pop'], whyItWorks: 'Stockport first dances are often more personal and modern — we match the tone exactly then lift the room' },
    ],
    venues: [
      {
        name: 'Bramall Hall',
        type: 'country-club',
        notes: 'Stunning Grade I-listed Tudor manor in 70 acres of parkland. One of the most romantic and photogenic wedding venues in the North West. Very high expectations on sound, lighting, timing and professionalism. Licensed for ceremonies in the Great Hall.',
        capacity: 150,
        parking: 'Good on-site parking in Bramall Park (multiple car parks — can get busy on peak Saturdays, we know the best spots)',
        power: 'Excellent modern power throughout — no issues even for full production',
        loading: 'Very good access via service routes we’ve used many times — discreet and efficient',
        musicFit: 'Premium weddings and high-end celebrations. The Great Hall acoustics and atmosphere reward a sophisticated, perfectly paced set',
        lastPlayed: 'Oct 2025 — high-end wedding, incredible emotional first dance under the lights, then the whole room exploded for the party section'
      },
      {
        name: 'Stockport Town Hall',
        type: 'town-hall',
        notes: 'Grand Grade II-listed Victorian landmark with iconic clock tower and breathtaking marble staircase — perfect for photos and ceremonies. Multiple licensed rooms (Ballroom, Council Chamber). Real presence and wow factor. Professional coordinators.',
        capacity: 350,
        parking: 'On-site car parking available plus nearby multi-storey — we always advise guests and plan arrival',
        power: 'Good stage power in main rooms — reliable for full nights',
        loading: 'Reasonable service access through established routes — we’ve done it dozens of times',
        musicFit: 'Big milestone birthdays and weddings that want grandeur without stuffiness. The staircase makes for unforgettable entrances and first dances',
        lastPlayed: 'Jun 2025 — large family wedding, ceremony on the marble stairs, first dance in the Ballroom with perfect lighting'
      },
      {
        name: 'Alma Lodge Hotel',
        type: 'hotel',
        notes: 'Historic 19th-century hotel on the A6, beautifully refurbished. Three wedding suites including the impressive Regis Suite (up to 250). Courtyard garden for photos, on-site accommodation, friendly and responsive team. Excellent all-rounder for Stockport couples who want convenience and quality.',
        capacity: 250,
        parking: 'Plenty of complimentary on-site parking — one of the easiest guest experiences in Stockport',
        power: 'Reliable modern power in all suites',
        loading: 'Straightforward hotel access — we know the service entrance and best setup positions',
        musicFit: 'Very popular for full-day weddings, 50ths and celebrations that want flexibility. The Regis Suite sounds brilliant with our system',
        lastPlayed: 'Mar 2026 — beautiful spring wedding in the Regis Suite, first dance to a personal choice followed by non-stop dancing'
      },
      {
        name: 'Bredbury Hall',
        type: 'hotel',
        notes: 'Large popular hotel venue with multiple function rooms and on-site accommodation. Good facilities for larger parties. We know the rooms and what works best in each.',
        capacity: 180,
        parking: 'Large hotel car park — easy for guests and kit',
        power: 'Reliable throughout',
        loading: 'Good service access',
        musicFit: 'Very popular for 50ths, larger weddings and corporate Christmas parties. We adapt the energy perfectly to the room size',
      },
    ],
    logistics: [
      { label: 'Expectation level', detail: 'Stockport has seen plenty of average DJs. They notice when you’re good — smart appearance, seamless transitions, perfect sound and lighting, and zero over-talking.' },
      { label: 'Traffic', detail: 'M60 and A6 can be brutal on Friday/Saturday evenings — we always leave extra time and have backup routes. Bramall Hall and Alma Lodge need precise timing.' },
      { label: 'Venue standards', detail: 'Bramall Hall and Stockport Town Hall demand the highest standards. We arrive early, set up discreetly, and deliver production that matches the grandeur of the rooms.' },
      { label: 'Guest experience', detail: 'Alma Lodge and Bredbury guests expect easy parking and smooth flow. We coordinate with venue staff so the night feels effortless.' },
    ],
    stories: [
      'Bramall Hall wedding where the couple had their first dance to an acoustic version of “Yellow” and the whole room was silent — you could hear a pin drop. Then we dropped “Dancing Queen” and it exploded into the biggest singalong. The couple still message us about it.',
      'Stockport Town Hall Ballroom where the bride walked down the marble stairs to “A Thousand Years” and the entire family (including 40+ guests who flew in) was in tears. We lit the staircase perfectly and the photos are still everywhere.',
      'Alma Lodge Regis Suite 50th where the birthday couple requested a full 70s soul and Motown section early because “that’s what we grew up on”. The dancefloor was packed by 8:30pm and stayed that way. They said it was the best night of their married life.',
      'Bramall Hall marquee extension wedding where the couple wanted modern indie first dance then proper party. We read the sophisticated crowd perfectly — emotional start, then high-energy Northern classics that got even the suits dancing.'
    ],
    firstDanceTips: 'Stockport first dances are often more modern, personal or indie-leaning than other areas, but still need to work for a mixed affluent/Northern crowd. We prepare for both deeply emotional quiet moments (acoustic Yellow, A Thousand Years, Perfect) and joyful upbeat choices. We always discuss the exact vibe they want — romantic silence or immediate celebration — and light + sound it perfectly. The transition out of the first dance into the party is where we shine: seamless, exciting, and never awkward. Stockport couples notice and appreciate the professionalism.',
    milestoneTips: '50ths in Stockport want quality. They appreciate a DJ who looks smart, sounds great, doesn’t talk too much, and reads a discerning room. They want the music to feel special, not cheap.',
    nearbyAreas: ['altrincham', 'manchester', 'tameside', 'oldham'],
    firstDanceExamples: [
      '"Yellow" (Coldplay acoustic) — The ultimate emotional modern choice at Bramall Hall. We’ve done it there multiple times — room goes completely silent, then erupts.',
      '"A Thousand Years" — Perfect for grand Stockport Town Hall staircase entrances. We time the lighting to the lyrics and it’s magical.',
      '"Perfect" or "You Are the Reason" — Popular with Stockport couples who want something current but still emotional for parents and grandparents.',
      '"At Last" or classic soul — Works beautifully in Alma Lodge or Bredbury for couples who want timeless elegance with Northern warmth.',
      '"Dancing Queen" or upbeat floor-filler right after — Our signature move: emotional first dance followed by instant party explosion that gets every generation up.'
    ],
    localWeddingTrends: 'Stockport weddings are a beautiful mix of premium historic venues (Bramall Hall, Town Hall) and convenient hotels (Alma Lodge). Many couples want a sophisticated, personal first dance that reflects their story, followed by a proper high-energy party that doesn’t feel cheesy. Quality over quantity — they expect the DJ to look the part, sound incredible, and never dominate the room. Multigenerational but with higher standards on production and taste.',
    bookingUrgency: 'Stockport’s best venues (Bramall Hall, Stockport Town Hall, Alma Lodge) are booking 9–14 months ahead for 2026/2027 peak season. Saturdays in May–September at Bramall and the Town Hall are especially tight. Couples who enquire early get first pick of both venue and the DJ who actually knows how to make those rooms sing. Waiting means settling for second-choice dates or a DJ who doesn’t know the quirks.'
  },

  'oldham': {
    slug: 'oldham',
    localPride: 'Oldham loves a proper knees-up and has some of the best party crowds in Greater Manchester.',
    crowdProfile: {
      typicalAges: '25-65, very strong family and community feel',
      vibe: 'Loud, proud, generous, brilliant dancers',
      requests: ['70s-80s soul', 'current chart', 'Bhangra & Asian fusion at some events', 'Oasis'],
      avoid: ['Too much chill music early']
    },
    musicNotes: [
      { decade: '70s-80s', energy: 'high', genres: ['Soul', 'Pop', 'Disco'], whyItWorks: 'Oldham parties hard and knows how to enjoy themselves' },
    ],
    venues: [
      {
        name: 'Oldham Event Centre',
        type: 'function-room',
        notes: 'Large, flexible space. Good for big weddings and milestone parties.',
        capacity: 250,
        parking: 'Large on-site car park',
        power: 'Very good',
        loading: 'Excellent access',
        musicFit: 'Big weddings, 50ths, corporate',
      },
      {
        name: 'Mercure Norton Grange Hotel',
        type: 'hotel',
        notes: 'Popular wedding hotel. Multiple function rooms.',
        capacity: 180,
        parking: 'Good hotel parking',
        power: 'Reliable',
        loading: 'Good',
        musicFit: 'Very popular for weddings and large birthday parties',
      },
    ],
    logistics: [
      { label: 'Crowd energy', detail: 'Oldham crowds are some of the best we play for. They come to dance and they will stay on the floor.' },
    ],
    stories: [
      'Oldham Event Centre 50th where the dancefloor was still full at 1am and the birthday boy was still singing at the decks with us.'
    ],
    firstDanceTips: 'Oldham first dances can be traditional or very fun. We always have strong floor-fillers ready straight after.',
    milestoneTips: '50ths and 60ths in Oldham want a proper party. They don’t want to feel old — they want to dance.',
    nearbyAreas: ['ashton-under-lyne', 'manchester', 'stockport', 'tameside']
  },

  'manchester': {
    slug: 'manchester',
    localPride: 'City centre Manchester has high standards and a brilliant mix of modern and classic tastes.',
    crowdProfile: {
      typicalAges: '28-55, mix of professionals and proper Northerners',
      vibe: 'Stylish but still love a sing-along, expect quality',
      requests: ['Soul', 'Motown', '80s', 'current house & pop', 'indie classics'],
      avoid: ['Cheesy or dated energy', 'poor sound quality']
    },
    musicNotes: [
      { decade: '70s-80s', energy: 'high', genres: ['Soul', 'Disco', 'Pop'], whyItWorks: 'Manchester has incredible musical taste across ages' },
      { decade: '90s-10s', energy: 'high', genres: ['Indie', 'Dance', 'Pop'], whyItWorks: 'Big crossover with people who grew up in the city' },
    ],
    venues: [
      {
        name: 'Manchester Hall',
        type: 'hotel',
        notes: 'Stunning room in the city centre. Very high expectations on production and professionalism.',
        capacity: 200,
        parking: 'NCP or hotel arrangements',
        power: 'Excellent modern power',
        loading: 'Good for city centre',
        musicFit: 'Premium weddings and corporate events',
      },
      {
        name: 'Victoria Warehouse',
        type: 'other',
        notes: 'Industrial character, great for bigger, more modern celebrations.',
        capacity: 300,
        parking: 'On-site',
        power: 'Excellent',
        loading: 'Very good',
        musicFit: 'Larger weddings and big milestone parties',
      },
    ],
    logistics: [
      { label: 'City centre loading', detail: 'Can be tight. We always do a recce or ask detailed questions about access.' },
      { label: 'Crowd', detail: 'Manchester guests have seen good DJs. They notice when the music is right and the energy is proper.' },
    ],
    stories: [
      'Manchester Hall wedding where the couple had a full brass band for the ceremony and we took over for the evening — the contrast worked brilliantly.'
    ],
    firstDanceTips: 'Manchester first dances are often more contemporary or personal. We prepare for both emotional and cool choices.',
    milestoneTips: 'City centre 40ths and 50ths want quality and taste. They want a proper party but they want it to feel current.',
    nearbyAreas: ['oldham', 'stockport', 'altrincham', 'tameside']
  },

  'altrincham': {
    slug: 'altrincham',
    localPride: 'Altrincham is affluent, polished, and expects a very high standard.',
    crowdProfile: {
      typicalAges: '35-65, professional and family-focused',
      vibe: 'Smart, well-dressed, appreciate quality and good taste',
      requests: ['Soul', 'Motown', '80s pop', 'current sophisticated pop & dance'],
      avoid: ['Anything too cheesy or dated', 'poor presentation']
    },
    musicNotes: [
      { decade: '70s-80s', energy: 'medium-high', genres: ['Soul', 'Pop', 'Disco'], whyItWorks: 'Altrincham crowds have excellent taste and love quality music' },
      { decade: '90s-00s', energy: 'high', genres: ['Pop', 'Dance', 'Indie'], whyItWorks: 'Big 40th–50th crossover' },
    ],
    venues: [
      {
        name: 'The Bowdon Rooms',
        type: 'country-club',
        notes: 'Beautiful, elegant venue. Very high standards on sound, lighting and the DJ’s appearance and manner.',
        capacity: 140,
        parking: 'Good on-site',
        power: 'Excellent',
        loading: 'Very good',
        musicFit: 'Premium weddings and milestone celebrations',
        lastPlayed: 'Sep 2025 — stunning wedding, incredible attention to detail from the couple'
      },
      {
        name: 'OYEZ Arts at Altrincham Town Hall',
        type: 'town-hall',
        notes: 'Stylish, modern use of a historic building. Great for more contemporary celebrations.',
        capacity: 120,
        parking: 'Town centre parking',
        power: 'Good',
        loading: 'Good',
        musicFit: 'Stylish weddings and 40th/50th birthdays',
      },
    ],
    logistics: [
      { label: 'Standard', detail: 'Altrincham guests notice everything — from how you’re dressed to how you speak to the room. Professionalism matters here.' },
      { label: 'Music taste', detail: 'They want quality over cheese. We play more sophisticated sets but still deliver a proper party when the time is right.' },
    ],
    stories: [
      'Bowdon Rooms wedding where the couple had a very specific “no cheese” list but still wanted the floor full — we nailed the balance.'
    ],
    firstDanceTips: 'Altrincham first dances are often very personal and stylish. We always discuss the vibe they want for the whole evening.',
    milestoneTips: '40ths and 50ths here want to feel current and sophisticated. They still want to dance, but they want it to feel good.',
    nearbyAreas: ['stockport', 'manchester', 'tameside', 'hyde']
  },
};
