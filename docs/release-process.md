# Release Process

## 1. Start from current main

In GitHub Desktop, fetch and pull the latest changes before beginning work.

## 2. Create a branch

Use a branch name that describes the work:

```text
feature/saved-valuations
fix/mobile-scroll
release/v1.6.0
```

## 3. Implement and test

Test the app locally with an HTTP server. Review conversion calculations, cost calculations, language switching, responsive layout, PWA installation, and offline behavior.

## 4. Prepare the release

- Update `CHANGELOG.md`.
- Update relevant README sections.
- Increment the cache name in `sw.js` when deployable files change.
- Confirm all paths in `index.html`, `manifest.webmanifest`, and `sw.js` are valid.

## 5. Commit and push

Use a release-oriented commit message, for example:

```text
Release TerraCaraïbe v1.6.0
```

Push the branch, review the diff, and merge it into `main`.

## 6. Verify deployment

Open the GitHub Pages URL in a private browser window and verify the new version. Service workers may retain an old version temporarily, so reload after the new worker activates.

## 7. Create a GitHub release

Tag major milestones using a version such as `v1.6.0` and summarize additions, improvements, and fixes.
