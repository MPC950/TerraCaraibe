# TerraCaraïbe

**TerraCaraïbe** is a mobile-first English/French progressive web app for converting land-area units, calculating land cost per unit, and converting prices between U.S. dollars and Haitian gourdes. It is designed for Haiti and the wider Caribbean, works with GitHub Pages, and can be installed on an iPhone home screen.

## Brand

**App name:** TerraCaraïbe  
**Positioning:** A bilingual land measurement, valuation, and currency tool designed for Haiti and the Caribbean.

## Features

- Bilingual English and French interface
- Mobile-first interface optimized for iPhone
- Progressive Web App installation
- Offline area conversion after the first visit
- Automatic conversion among all supported area units
- Land cost-per-unit calculator
- Live USD-to-HTG exchange-rate retrieval
- Manual exchange-rate override
- Cached exchange rate for offline use
- Conversion among USD, HTG, and Haitian dollars
- Adjustable decimal precision
- Copy-to-clipboard controls
- Light and dark appearance support through the device color scheme
- GitHub Pages compatibility
- Collapsible mobile sections with smooth open/close animation
- Rotating section chevrons
- Remembered open sections between visits
- Automatic scrolling to newly expanded sections

## Supported area units

| English | Français | Display abbreviation |
|---|---|---:|
| Hectare | Hectare | ha |
| Acre | Acre | ac |
| Square meter | Mètre carré | m² |
| Square kilometer | Kilomètre carré | km² |
| Square mile | Mille carré | sq mi / mi² |
| Square foot | Pied carré | sq ft / pi² |
| Square yard | Verge carrée | sq yd / vg² |
| Carreau (Haiti) | Carreau (Haïti) | car. |
| Centième (Haiti) | Centième (Haïti) | ctme |
| Seizième (Haiti) | Seizième (Haïti) | seiz. |
| Tarea (Dominican Republic) | Tarea (République dominicaine) | ta |

Traditional land-unit abbreviations are customary rather than globally standardized and may differ among deeds, surveyors, and jurisdictions.

## Conversion definitions

- 1 carreau = 12,900 m²
- 1 centième = 129 m²
- 1 seizième = 806.25 m²
- 1 tarea = 628.8 m²

## Cost-per-unit calculator

The cost calculator uses the parcel area and total purchase price to calculate the equivalent price per every supported area unit.

1. Enter the parcel area.
2. Select the parcel's area unit.
3. Enter the total land cost.
4. Select the purchase currency.
5. Select the desired results currency.
6. Review the calculated cost per hectare, acre, square meter, carreau, tarea, and all other supported units.

### Example

```text
Parcel area: 2.5 acres
Total cost: USD 125,000
Results currency: USD

Cost per acre: USD 50,000
Cost per hectare: approximately USD 123,553
Cost per square meter: approximately USD 12.36
```

Displayed values depend on the app's selected precision.

## Supported currencies

| Currency | Code or symbol | Treatment |
|---|---:|---|
| U.S. dollar | USD | Converted using the current USD-to-HTG rate |
| Haitian gourde | HTG | Base Haitian currency |
| Haitian dollar | H$ | Fixed accounting convention of H$1 = HTG 5 |

The Haitian dollar is not a separate circulating currency. The app treats it as a customary unit equal to five gourdes.

## Live exchange-rate behavior

- Currency pair: USD to HTG
- A rate request is made when the app opens
- The rate can be refreshed manually
- The most recent successful rate is cached in the browser
- The cached rate remains available when the device is offline
- A manual rate can be entered when needed
- The interface displays the rate status and update information
- Area conversion continues to work even when the exchange-rate service is unavailable

Live rates are informational and may differ from bank, remittance, card-network, cash-market, or negotiated transaction rates.

## Offline behavior

The service worker caches the application interface and conversion logic after the first successful visit. Area conversion and previously cached exchange-rate data can then be used without an internet connection. A new live exchange rate requires internet access.

## Publish with GitHub Pages

1. Create a new GitHub repository or open an existing repository.
2. Upload all files and folders from this project. Keep the `assets` and `docs` folders intact.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder.
7. Click **Save**.

The published URL normally follows this pattern:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

## Install on an iPhone

1. Open the GitHub Pages URL in Safari.
2. Tap the Share button.
3. Select **Add to Home Screen**.
4. Confirm the app name and tap **Add**.

The app will open in a standalone window similar to a native iOS application.

## Local testing

The service worker requires HTTP or HTTPS. Do not test the application by double-clicking `index.html`.

With Python installed, run this command from inside the project folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Repository structure

```text
TerraCaraibe/
├── index.html
├── manifest.webmanifest
├── sw.js
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   └── icons/
│       ├── apple-touch-icon.png
│       ├── icon-192.png
│       ├── icon-512.png
│       └── icon-maskable-512.png
├── docs/
│   ├── design-notes.md
│   ├── release-process.md
│   └── testing-checklist.md
├── CHANGELOG.md
├── ROADMAP.md
├── CONTRIBUTING.md
├── LICENSE
├── .gitignore
└── README.md
```

The deployable entry files remain at the repository root so GitHub Pages can publish directly from `main` and `/ (root)` without a build process.

## Recommended development workflow

1. Fetch and pull the latest `main` branch in GitHub Desktop.
2. Create a descriptive feature or fix branch for substantive work.
3. Make one coherent set of changes.
4. Test locally through an HTTP server.
5. Review the English and French interfaces, calculations, mobile layout, and offline behavior.
6. Update documentation and `CHANGELOG.md` when applicable.
7. Commit with a clear action-oriented message.
8. Push the branch and review the changes.
9. Merge into `main` after testing.
10. Verify the live GitHub Pages deployment.

See `CONTRIBUTING.md` and `docs/release-process.md` for the complete workflow.

## Version history

### v1.5

- Reorganized styles, scripts, and icons into the `assets` directory
- Added dedicated design, release, and testing documentation
- Added `CHANGELOG.md`, `ROADMAP.md`, `CONTRIBUTING.md`, `LICENSE`, and `.gitignore`
- Updated asset paths and the service-worker cache
- Preserved direct root deployment through GitHub Pages

### v1.4

- Added collapsible sections for conversion, land cost, all conversions, and definitions
- Added smooth 260 ms open-and-close animations
- Added rotating chevrons that indicate section state
- Added local storage persistence for open sections
- Added automatic smooth scrolling to newly expanded sections
- Added reduced-motion support for accessibility

### v1.3

- Renamed the application to TerraCaraïbe
- Updated the browser title, iOS home-screen name, manifest, and README branding
- Updated the service-worker cache name for the rebranded release

### v1.2

- Added live USD-to-HTG exchange-rate retrieval
- Added manual exchange-rate refresh
- Added cached exchange-rate support
- Added manual exchange-rate override
- Added independent purchase and output currencies

### v1.1

- Added total land-cost input
- Added cost-per-unit calculations
- Added USD, HTG, and Haitian-dollar options

### v1.0

- Added bilingual English/French area conversion
- Added Haitian and Dominican land units
- Added mobile-first PWA support

## Roadmap

Potential future additions include:

- Saved parcel valuations
- Recent conversions and favorites
- CSV and spreadsheet export
- Printable or PDF valuation reports
- Additional currencies such as DOP, EUR, and CAD
- Historical exchange-rate lookup
- GPS or polygon-based area measurement
- Land-subdivision calculations
- Parcel mapping and GeoJSON or KML export
- Agricultural planting-density and cost-per-tree calculators
- Dedicated theme and settings controls
- Expanded iPad and landscape layouts

## Disclaimer

This application is a planning and reference tool. Verify survey measurements, deed terminology, local-unit definitions, exchange rates, and transaction values with qualified local professionals before relying on the results for legal, financial, or cadastral decisions.


## Interface update in v1.9.0

The header now contains only the TerraCaraïbe name. The language selector is available under the Units tab, and the four principal tools remain accessible through the fixed bottom navigation.
