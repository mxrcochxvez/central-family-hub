import { NextRequest, NextResponse } from 'next/server'
import { events, filterEvents } from '@/lib/events'

export function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const ageParam = params.get('age')
  const age = ageParam && ageParam !== 'All' ? Number(ageParam) : undefined

  const filteredEvents = filterEvents(events, {
    city: params.get('city') ?? undefined,
    category: params.get('category') ?? undefined,
    query: params.get('query') ?? undefined,
    age: Number.isFinite(age) ? age : undefined,
    freeOnly: params.get('freeOnly') === 'true'
  })

  return NextResponse.json(filteredEvents)
}
