# Contributing to TerraCaraïbe

## Recommended workflow

1. Pull the latest `main` branch in GitHub Desktop.
2. Create a descriptive branch, such as `feature/kreyol-interface` or `fix/exchange-rate-status`.
3. Make one coherent set of changes.
4. Test locally through an HTTP server, not by opening `index.html` directly.
5. Verify English and French interfaces, mobile layout, calculations, and offline behavior.
6. Update documentation and `CHANGELOG.md` when appropriate.
7. Commit with a concise action-oriented message.
8. Push the branch and review the changed files.
9. Merge into `main` only after testing.
10. Verify the deployed GitHub Pages site.

## Commit-message examples

- `Add Haitian Creole language selector`
- `Fix cost results after currency change`
- `Improve accordion keyboard accessibility`
- `Update deployment documentation`

Avoid vague messages such as `update`, `changes`, or `fix stuff`.

## Local testing

From the repository root:

```bash
python -m http.server 8000
```

Open `http://localhost:8000` in a browser.

## Release checklist

- Update the version in `CHANGELOG.md`.
- Update the service-worker cache name in `sw.js`.
- Confirm all cached file paths exist.
- Test installation and offline reopening.
- Test conversions with representative values.
- Test both interface languages.
- Commit and push the final release changes.
- Create a GitHub release for major milestones.
