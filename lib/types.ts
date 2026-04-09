export type EventCategory =
  | 'Arts'
  | 'Sports'
  | 'STEM'
  | 'Community'
  | 'Outdoors'
  | 'Library'

export type PriceType = 'free' | 'paid'

export interface FamilyEvent {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  locationName: string
  city: 'Fresno' | 'Clovis'
  address: string
  ageMin: number
  ageMax: number
  priceType: PriceType
  price: number | null
  category: EventCategory
  featured: boolean
}
