# Legacy

Worldbuilding project. What humanity left behind.

::: info Status: Growing ◔
TypeScript spatial graph engine (forked from ptera.world). Currently at [para-garden/legacy](https://github.com/para-garden/legacy).
:::

## Core Concept

A world where humanity's self-destructive tendencies — not technology itself — are the source of civilizational risk. The central reframe: "AI will be dangerous for humanity" becomes "humanity is dangerous for humanity."

The site is a spatial graph you navigate like a world. Nodes are places, factions, figures, events, concepts. Proximity is relationship. The graph layout is argument.

## Collections

- **World** — the world itself. In-universe documents, fiction, lore. Immersive, not reflective.
- **Research** — real sources behind the world. The non-fiction that grounds the fiction.

World content uses facets as tags — a document can carry multiple facets. Coexisting forces, not separate timelines.

## Architecture

Zero runtime dependencies (except `keybinds` and `yaml`). Spatial graph engine with zoom tiers, content pipeline, and cluster system. ~1,200 lines of TypeScript.
