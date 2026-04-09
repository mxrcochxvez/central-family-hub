import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getEventById } from '@/lib/events'
import { formatEventDateRange } from '@/lib/format'

interface EventDetailPageProps {
  params: {
    id: string
  }
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const event = getEventById(params.id)

  if (!event) {
    notFound()
  }

  return (
    <main className="page-shell">
      <div className="panel event-detail">
        <div className="header-row">
          <div>
            <p className="muted">{event.city} family event</p>
            <h1>{event.title}</h1>
          </div>
          <Link href="/" className="secondary-button">
            Back to events
          </Link>
        </div>

        <p className="muted">{event.description}</p>

        <div className="pill-row">
          <span className="pill">{event.category}</span>
          <span className="pill">Ages {event.ageMin} to {event.ageMax}</span>
          <span className={`pill ${event.priceType === 'free' ? 'price-pill-free' : 'price-pill-paid'}`}>
            {event.priceType === 'free' ? 'Free' : `$${event.price}`}
          </span>
        </div>

        <div className="event-meta-grid">
          <div className="meta-card">
            <h3>When</h3>
            <p>{formatEventDateRange(event.startDate, event.endDate)}</p>
          </div>
          <div className="meta-card">
            <h3>Where</h3>
            <p>{event.locationName}</p>
          </div>
          <div className="meta-card">
            <h3>Address</h3>
            <p>{event.address}</p>
          </div>
          <div className="meta-card">
            <h3>Good fit for</h3>
            <p>Kids ages {event.ageMin} to {event.ageMax}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
