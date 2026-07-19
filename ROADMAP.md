# TerraCaraïbe Roadmap

This roadmap is directional. Features should be developed in small, testable branches and merged only after mobile and offline testing.

## Near term

- Haitian Creole interface option
- Favorites and recently used conversions
- Saved parcel valuations
- Additional currencies: DOP, EUR, and CAD
- Dedicated settings for language, precision, and appearance
- Improved accessibility testing

## Land and valuation tools

- Parcel subdivision calculator
- Comparable land-price records
- Printable valuation summaries
- CSV and spreadsheet export
- Historical exchange-rate lookup
- Mortgage and transaction-cost estimates

## Mapping and surveying

- GPS-based parcel measurement
- Polygon drawing and area calculation
- Coordinate display and measurement tools
- GeoJSON and KML import and export
- Offline map support

## Agricultural planning

- Planting-density calculator
- Cost-per-tree calculator
- Cocoa shade-system planner
- Yield and revenue projections
- Field-grid and row-layout tools

## Release discipline

- Use feature branches for substantive changes.
- Keep `main` deployable at all times.
- Update `CHANGELOG.md` in each release.
- Increment the service-worker cache version whenever deployable assets change.

## Completed in v2.3.0

- Saved Parcels foundation with local storage, tool handoff, and JSON backup.
