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
    <main>
      <section className="civic-band">
        <div className="page-shell civic-band-inner">
          <div className="brand brand-light">
            <div className="brand-mark brand-mark-light">FH</div>
            <div>
              <p className="brand-title">Family Hub</p>
              <p className="brand-subtitle brand-subtitle-light">Fresno + Clovis events</p>
            </div>
          </div>
          <button className="hero-button hero-button-light">Browse events</button>
        </div>
      </section>

      <main className="page-shell">
        <section className="hero hero-civic">
          <span className="hero-eyebrow">Local family events</span>
          <div className="hero-main">
            <div>
              <h1>Find events near you.</h1>
              <p>Simple filters. Clear details. Local plans.</p>
            </div>
            <div className="hero-stats">
              <div className="hero-stat-card">
                <strong>{filteredEvents.length}</strong>
                <span>Events</span>
              </div>
              <div className="hero-stat-card">
                <strong>2</strong>
                <span>Cities</span>
              </div>
            </div>
          </div>
        </section>

        <div className="layout-grid">
          <Filters />

          <section className="content">
            <div className="results-bar results-bar-civic">
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
    </main>
  )
}
