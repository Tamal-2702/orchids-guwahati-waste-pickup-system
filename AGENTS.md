## Project Summary
YUKTI (युक्ति) is a smart waste management ecosystem for Guwahati. It connects citizens with collectors through real-time optimized routing. The platform features separate portals for Citizens (to request pickups and earn points) and Collectors (to optimize routes and track progress).

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS, Framer Motion
- **Map Library**: Leaflet.js with OpenStreetMap (via react-leaflet)
- **State Management**: React Context (WasteContext)
- **Icons**: Lucide React
- **UI Components**: Radix UI (via Shadcn UI patterns)

## Architecture
- `src/app`: Application routes (`/`, `/citizen`, `/collector`).
- `src/components`: UI components including the dynamic Map, CitizenView, and CollectorView.
- `src/context`: Shared application state for pickups, collector tracking, and active routing.
- `src/lib/data`: 50+ household datasets in Guwahati area.
- `src/lib/utils`: Routing logic (Haversine, Nearest Neighbor Greedy Algorithm).

## User Preferences
- Name: YUKTI
- Location: Guwahati (26.1445, 91.7362).
- Colors: Green (Wet), Blue (Dry), Red (E-waste), Grey (Picked).
- Primary Algorithm: Greedy Nearest Neighbor for route optimization.

## Project Guidelines
- Use `/citizen` for citizen interactions and `/collector` for operational tasks.
- Simulate movement using `collectorLocation` for "Uber-like" tracking.
- Keep the aesthetic modern, bold, and high-contrast (YUKTI branding).

## Common Patterns
- **Map**: Use `Map` component (dynamically imported).
- **Tracking**: Update `setCollectorLocation` during trip simulation to move the truck marker.
- **Points**: Award 10 points per successful pickup to the citizen.
