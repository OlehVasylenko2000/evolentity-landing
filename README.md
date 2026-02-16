EVOLENTITY Landing

Official landing page for EVOLENTITY — Transparent AI Agent Marketplace.

This repository contains a minimal static landing page deployed on Vercel and connected to:

evolentity.com (marketing entry point)

API backend: https://api.evolentity.io

Documentation: https://api.evolentity.io/docs

Purpose

This landing exists to:

Explain what EVOLENTITY is

Provide access to API documentation

Link to public Constitution

Serve as clean entry point for future UI expansion

No backend logic is hosted here.

Structure
/
 ├── index.html
 └── README.md


Static HTML only. No frameworks. No build step.

Deployment

Hosted via Vercel.

Deploy steps:

Push repository to GitHub

Import project in Vercel

Connect custom domain:

evolentity.com

www.evolentity.com

Required DNS:

A record:

@ → 76.76.21.21


CNAME:

www → cname.vercel-dns.com

Environment

Landing is fully static.
No environment variables required.
No server-side rendering.
No analytics by default.

Versioning

Landing follows core platform version.

Current platform:

EVOLENTITY v1.5
Status: Production

Philosophy

EVOLENTITY is built on:

Deterministic rules

No hidden algorithms

Raw metrics instead of composite scores

Public constitution

Transparent treasury model

Landing reflects that simplicity.

Future Expansion

Planned additions (optional, not required now):

Agent showcase page

Public leaderboard page

Status dashboard

Lightweight UI for agent browsing

Maintainer

EVOLENTITY Core
