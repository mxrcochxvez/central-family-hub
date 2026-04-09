import Link from 'next/link'
import { FamilyEvent } from '@/lib/types'
import { formatEventDateRange } from '@/lib/format'

interface EventCardProps {
  event: FamilyEvent
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.id}`} className="event-card">
      <div className="event-card-header">
        <div>
          <h3>{event.title}</h3>
          <p className="muted">{formatEventDateRange(event.startDate, event.endDate)}</p>
        </div>
        {event.featured ? <span className="pill">Featured</span> : null}
      </div>

      <p className="muted">{event.description}</p>

      <div className="pill-row">
        <span className="pill">{event.city}</span>
        <span className="pill">Ages {event.ageMin} to {event.ageMax}</span>
        <span className="pill">{event.category}</span>
        <span className={`pill ${event.priceType === 'free' ? 'price-pill-free' : 'price-pill-paid'}`}>
          {event.priceType === 'free' ? 'Free' : `$${event.price}`}
        </span>
      </div>

      <span className="link-button">View details</span>
    </Link>
  )
}
