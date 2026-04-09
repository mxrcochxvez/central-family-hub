'use client'

import { useRouter, useSearchParams } from 'next/navigation'

const ageOptions = [
  { label: 'Any age', value: 'All' },
  { label: 'Toddlers (2)', value: '2' },
  { label: 'Preschool (4)', value: '4' },
  { label: 'Elementary (7)', value: '7' },
  { label: 'Older kids (10)', value: '10' }
]

const cityOptions = ['All', 'Fresno', 'Clovis']
const categoryOptions = ['All', 'Arts', 'Sports', 'STEM', 'Community', 'Outdoors', 'Library']

export function Filters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('query') ?? ''
  const city = searchParams.get('city') ?? 'All'
  const age = searchParams.get('age') ?? 'All'
  const category = searchParams.get('category') ?? 'All'
  const freeOnly = searchParams.get('freeOnly') === 'true'

  function updateParam(key: string, value: string | boolean) {
    const params = new URLSearchParams(searchParams.toString())

    if (value === 'All' || value === '' || value === false) {
      params.delete(key)
    } else {
      params.set(key, String(value))
    }

    router.push(`/?${params.toString()}`)
  }

  return (
    <div className="panel sidebar">
      <h2>Find your weekend plan</h2>

      <div className="field-group">
        <label htmlFor="query">Search</label>
        <input
          id="query"
          className="input"
          defaultValue={query}
          placeholder="Art, storytime, soccer..."
          onBlur={(event) => updateParam('query', event.target.value)}
        />
      </div>

      <div className="field-group">
        <label htmlFor="city">City</label>
        <select
          id="city"
          className="select"
          value={city}
          onChange={(event) => updateParam('city', event.target.value)}
        >
          {cityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="field-group">
        <label htmlFor="age">Age group</label>
        <select
          id="age"
          className="select"
          value={age}
          onChange={(event) => updateParam('age', event.target.value)}
        >
          {ageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="field-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          className="select"
          value={category}
          onChange={(event) => updateParam('category', event.target.value)}
        >
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="field-group">
        <label>Price</label>
        <label className="checkbox-row">
          <input
            type="checkbox"
            checked={freeOnly}
            onChange={(event) => updateParam('freeOnly', event.target.checked)}
          />
          Free events only
        </label>
      </div>
    </div>
  )
}
