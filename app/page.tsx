import { EventCard } from '@/components/EventCard'
import { Filters } from '@/components/Filters'
import { events, filterEvents } from '@/lib/events'

interface HomePageProps {
  searchParams?: {
    city?: string
    age?: string
    category?: string
    query?: string
    freeOnly?: string
  }
}

export default function HomePage({ searchParams }: HomePageProps) {
  const activeAge =
    searchParams?.age && searchParams.age !== 'All' ? Number(searchParams.age) : undefined

  const filteredEvents = filterEvents(events, {
    city: searchParams?.city,
    age: Number.isFinite(activeAge) ? activeAge : undefined,
    category: searchParams?.category,
    query: searchParams?.query,
    freeOnly: searchParams?.freeOnly === 'true'
  })

  return (
    <main className="page-shell">
      <section className="hero">
        <span className="hero-eyebrow">Fresno + Clovis family events</span>
        <h1>Find something fun to do with your kids this weekend</h1>
        <p>
          This starter MVP helps local parents discover simple, kid-friendly plans without digging
          through scattered Facebook posts and websites.
        </p>
      </section>

      <div className="layout-grid">
        <Filters />

        <section className="content">
          <div className="results-bar">
            <div>
              <h2>Upcoming events</h2>
              <p className="results-meta">
                {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found
              </p>
            </div>
          </div>

          <div className="card-grid">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
