export function formatEventDateRange(startDate: string, endDate: string) {
  const start = new Date(startDate)
  const end = new Date(endDate)

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })

  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  })

  return `${dateFormatter.format(start)} • ${timeFormatter.format(start)} to ${timeFormatter.format(end)}`
}
