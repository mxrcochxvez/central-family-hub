import { FamilyEvent } from '@/lib/types'

export const events: FamilyEvent[] = [
  {
    id: 'storytime-woodward-park',
    title: 'Saturday Storytime in the Park',
    description:
      'A family storytime with songs, movement, and a simple craft for younger kids.',
    startDate: '2026-04-11T09:30:00',
    endDate: '2026-04-11T10:30:00',
    locationName: 'Woodward Park Library Lawn',
    city: 'Fresno',
    address: '944 E Perrin Ave, Fresno, CA',
    ageMin: 2,
    ageMax: 7,
    priceType: 'free',
    price: null,
    category: 'Library',
    featured: true
  },
  {
    id: 'clovis-youth-soccer-skills',
    title: 'Youth Soccer Skills Clinic',
    description:
      'Intro drills, footwork, and small games for kids who want a fun soccer session.',
    startDate: '2026-04-11T10:00:00',
    endDate: '2026-04-11T11:30:00',
    locationName: 'Dry Creek Park',
    city: 'Clovis',
    address: 'Clovis Ave & Dry Creek Dr, Clovis, CA',
    ageMin: 6,
    ageMax: 10,
    priceType: 'paid',
    price: 8,
    category: 'Sports',
    featured: false
  },
  {
    id: 'fresno-art-saturday',
    title: 'Kids Canvas Morning',
    description:
      'A guided painting activity with take-home art for families who want a creative outing.',
    startDate: '2026-04-12T11:00:00',
    endDate: '2026-04-12T12:30:00',
    locationName: 'Tower Arts Collective',
    city: 'Fresno',
    address: 'Olive Ave, Fresno, CA',
    ageMin: 5,
    ageMax: 12,
    priceType: 'paid',
    price: 12,
    category: 'Arts',
    featured: true
  },
  {
    id: 'stem-robotics-junior',
    title: 'Junior Robotics Build Lab',
    description:
      'Hands-on STEM activity where kids build a simple moving project with guided help.',
    startDate: '2026-04-12T13:00:00',
    endDate: '2026-04-12T14:30:00',
    locationName: 'Fresno Discovery Center',
    city: 'Fresno',
    address: '1944 N Winery Ave, Fresno, CA',
    ageMin: 8,
    ageMax: 13,
    priceType: 'paid',
    price: 10,
    category: 'STEM',
    featured: false
  },
  {
    id: 'clovis-family-market-day',
    title: 'Family Market Day',
    description:
      'Local vendors, snacks, music, and kid-friendly booths in a walkable family setting.',
    startDate: '2026-04-12T09:00:00',
    endDate: '2026-04-12T13:00:00',
    locationName: 'Old Town Clovis',
    city: 'Clovis',
    address: 'Pollasky Ave, Clovis, CA',
    ageMin: 0,
    ageMax: 14,
    priceType: 'free',
    price: null,
    category: 'Community',
    featured: true
  },
  {
    id: 'river-park-family-walk',
    title: 'Family Nature Walk',
    description:
      'A guided morning walk with simple observation prompts for families and younger explorers.',
    startDate: '2026-04-13T08:30:00',
    endDate: '2026-04-13T09:30:00',
    locationName: 'San Joaquin River Trail Meetup',
    city: 'Fresno',
    address: 'Friant Rd, Fresno, CA',
    ageMin: 4,
    ageMax: 12,
    priceType: 'free',
    price: null,
    category: 'Outdoors',
    featured: false
  }
]

export interface EventFilters {
  city?: string
  age?: number
  freeOnly?: boolean
  category?: string
  query?: string
}

export function filterEvents(allEvents: FamilyEvent[], filters: EventFilters) {
  return allEvents.filter((event) => {
    const matchesCity = !filters.city || filters.city === 'All' || event.city === filters.city
    const matchesAge =
      filters.age === undefined || (event.ageMin <= filters.age && event.ageMax >= filters.age)
    const matchesPrice = !filters.freeOnly || event.priceType === 'free'
    const matchesCategory =
      !filters.category || filters.category === 'All' || event.category === filters.category
    const normalizedQuery = filters.query?.trim().toLowerCase() ?? ''
    const matchesQuery =
      !normalizedQuery ||
      [event.title, event.description, event.locationName, event.city, event.category]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery)

    return matchesCity && matchesAge && matchesPrice && matchesCategory && matchesQuery
  })
}

export function getEventById(id: string) {
  return events.find((event) => event.id === id)
}
