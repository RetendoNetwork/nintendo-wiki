---
sidebar_position: 1
---

# Overview
- NEX is networking library for game servers of Wii U, 3DS, and Switch games.
- Nintendo didn't create NEX from scratch, they based it on Quazal Rendez-Vous.
- In 2021, Nintendo created NPLN, a new replacement for NEX.

| Platform  | Description                                                                             |
|-----------|-----------------------------------------------------------------------------------------|
| 3DS       | The game server location is requested from the NASC server (login)                      |
| Wii U     | The game server location is requested from the account server (/provider/nex_token/@me) |
| Switch    | The game server is found by DNS lookup -> g[game server id]-lp1.s.n.srv.nintendo.net    |