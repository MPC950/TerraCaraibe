# Changelog

All notable changes to TerraCaraïbe are documented here.

The project follows semantic versioning: `MAJOR.MINOR.PATCH`.

## [2.4.0] - 2026-07-19

### Added
- Added PDF-ready export from the Land Value Parcel Summary.
- Added individual PDF export controls to every saved parcel.
- Reports include parcel size, total land cost, cost per supported unit, exchange-rate context, notes, and generation date.
- Added English and French report labels.

### Changed
- Updated the application version and offline cache to v2.4.0.
- PDF export uses the browser print dialog and works without an external PDF library or network connection.

## [2.3.1] - 2026-07-19

### Added
- Added a Parcel Summary card to the Land Value screen.
- Added live display of the total land cost and parcel size.
- Added an approximate converted total when the input and output currencies differ.

### Changed
- Connected the summary to Converter inputs and Saved Parcel handoff data.
- Updated the application version and offline cache to v2.3.1.

## [2.3.0] - 2026-07-19

### Added
- Added a Saved Parcels module with locally stored parcel records.
- Added parcel fields for name, area, unit, location, purchase price, currency, and notes.
- Added actions to reopen saved records in the Converter and Land Value tools.
- Added JSON export and import for parcel backups and transfer.
- Added a Saved Parcels dashboard card and bottom-navigation destination.

### Changed
- Expanded the floating navigation from five to six destinations.
- Updated the application version and offline cache to v2.3.0.

## [2.2.0] - 2026-07-18

### Added
- Added a formal design-token system for color, typography, spacing, radii, shadows, and control sizing.
- Added a consistent offline-safe outline icon set used across the dashboard, navigation, actions, and generated result cards.

### Changed
- Standardized card, button, input, select, focus, hover, pressed, and selected states across every screen.
- Consolidated light, dark, and system appearance styles under the same semantic design tokens.
- Refined responsive spacing and component proportions to support future Parcel Planner and Plantation Planner modules.
- Updated the application version and offline cache identifier.

## [2.1.2] - 2026-07-18

### Changed
- Shortened the Home screen tagline to: “Convert land area. Compare values. Calculate land costs.”
- Updated the corresponding French tagline for consistency.
- Updated the application version and offline cache identifier.

## [2.1.1] - 2026-07-18

### Changed
- Removed the decorative hero card from the Home screen.
- Reduced top spacing so the tool launcher begins closer to the application header.
- Improved spacing, touch targets, hover, focus, and pressed states for dashboard tool cards.
- Retained fully tappable cards, concise descriptions, icons, and navigation chevrons.
- Updated the application version and offline cache identifier.

## [2.1.0] - 2026-07-18

### Added
- Added a unified favorites system shared by the Reference and Land Value screens.
- Added favorite controls to every cost-per-unit result card.
- Added a Favorites-only filter to the Land Value screen.

### Changed
- Favorite units now sort ahead of non-favorite units in both Reference and Land Value.
- Favorite selections continue to persist in browser storage without requiring an account.
- Updated the application version and offline cache identifier.

## [2.0.0] - 2026-07-18

### Added
- Added a native-style home dashboard and floating five-tab navigation.
- Added searchable unit results, unit favorites, copy actions, Settings, appearance controls, and an improved exchange-rate card.

### Changed
- Rebuilt the interface around separate tool screens and spacious result cards.

## [1.9.0] - 2026-07-18

### Changed
- Simplified the application header to display only the TerraCaraïbe name.
- Moved the English/French language switch to the Units screen.
- Retained bottom navigation and separate tool screens.
- Reduced header height and removed secondary branding text and controls.

All notable changes to TerraCaraïbe are documented here.

The project follows semantic versioning: `MAJOR.MINOR.PATCH`.

## [1.5.0] - 2026-07-18

### Changed

- Reorganized static assets into `assets/css`, `assets/js`, and `assets/icons`.
- Added dedicated project documentation under `docs`.
- Added contribution, licensing, changelog, roadmap, and Git ignore files.
- Updated application asset paths and the offline service-worker cache.
- Preserved root-level GitHub Pages deployment with no build step.

## [1.4.0] - 2026-07-18

### Added

- Collapsible application sections.
- Smooth accordion animations and rotating chevrons.
- Remembered open sections and automatic scrolling.
- Reduced-motion accessibility support.

## [1.3.0] - 2026-07-18

### Changed

- Renamed and rebranded the application as TerraCaraïbe.

## [1.2.0]

### Added

- Live USD-to-HTG exchange rates, caching, refresh, and manual override.

## [1.1.0]

### Added

- Land cost-per-unit calculations and currency selection.

## [1.0.0]

### Added

- Initial bilingual land-area converter and installable PWA.
