# Design Notes

## Product direction

TerraCaraïbe is intended to become a practical land-measurement, valuation, currency, mapping, and agricultural-planning platform for Haiti and the Caribbean.

## Interface principles

- Mobile-first and usable on smaller iPhone screens
- French and English terminology treated as equal first-class interfaces
- Haitian land units presented alongside SI and imperial units
- Critical calculations kept visible and easy to verify
- Advanced functions grouped into collapsible sections
- Offline functionality retained wherever possible

## Technical principles

- Static deployment through GitHub Pages
- No mandatory build process
- Progressive enhancement and accessible semantic HTML
- Local storage for non-sensitive preferences and cached public rate data
- Versioned service-worker cache for reliable upgrades
- Modular folder structure without unnecessary framework dependencies

## v1.7.0 Interface System

The application now uses a responsive dashboard shell. Desktop navigation remains persistent, while screens below 960 px use an off-canvas drawer. Existing tools remain accordion-based within the workspace so navigation can deep-link to and open each module without changing calculation behavior.
