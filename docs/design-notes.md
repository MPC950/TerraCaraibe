# TerraCaraïbe Design System

## Principles

- Content-first mobile layouts
- Consistent semantic tokens rather than one-off values
- Clear hierarchy with restrained decoration
- Accessible focus states and minimum touch targets
- Offline-safe assets suitable for a Progressive Web App

## Foundations

The interface uses shared tokens for brand and neutral colors, type scale, spacing, radii, shadows, and control heights. Components consume semantic tokens so that light, dark, and system modes remain aligned.

## Components

Standardized components include the application header, screen headings, launch cards, form cards, inputs, selects, primary and secondary buttons, filter controls, result cards, settings rows, toast messages, and floating bottom navigation.

## Icons

A single outline SVG symbol set is embedded in `index.html`. This keeps icon weight, dimensions, stroke treatment, and offline behavior consistent without an external dependency.

## Expansion

Future Parcel Planner and Plantation Planner modules should reuse existing tokens and components before introducing new patterns. New tokens should be semantic and broadly reusable.
