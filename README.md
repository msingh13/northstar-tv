# Northstar TV

A responsive, static IPTV portal prototype for GitHub Pages. No subscription, billing, paid authentication, or streaming backend is included.

## Open the demo

Visit the published Pages URL. Leave the connection as `demo://northstar` and select **Connect & explore**. The demo contains 18 public-directory live-stream entries and three open-film samples (including a Sintel trailer). Public source availability, geographic restrictions and browser CORS policies vary; no live-stream availability or distribution rights are guaranteed.

## Features

- Connection screen with optional profile name, HTTPS M3U import and local M3U file import.
- Live TV, Movies, TV Shows & Series, regional filters, search and local favorites.
- HLS playback using bundled hls.js, native video playback, retry and source links.
- Responsive layouts and keyboard-accessible navigation/dialogs.
- Imported `Movies` / `Films` / `VOD` groups appear as movies; `Series` / `TV Shows` groups appear as series. Other groups appear as live channels.

This is a front-end model, not a secure customer login system. It does not connect to Jellyfin, Xtream APIs, MAG/Stalker portals or payment processors. Do not sell accounts to this prototype.

## Privacy and security

Imported playlist URLs and entries are held only in memory and sent directly to the source. They are not saved on GitHub or sent to an application backend. Favorites are stored locally as IDs. Disconnecting clears the in-memory catalog; reloading requires reconnecting. There are no analytics. Google Fonts is an external request. Stream hosts receive playback requests. Only HTTPS stream URLs are accepted. Do not place private provider credentials in this public repository.

## Content and attribution

Live metadata and links: https://iptv-org.github.io/api/channels.json and https://iptv-org.github.io/api/streams.json . This is directory data, not an assertion of licensing or verified commercial redistribution rights. IPTV-Free (https://www.iptv-free.com/) is linked as requested; its directory showed no channel entries during implementation.

Open-film samples (unmodified):
- Big Buck Bunny — © 2008 Blender Foundation, CC BY 3.0. https://peach.blender.org/about/
- Sintel — © Blender Foundation, CC BY 3.0. https://durian.blender.org/about/
- Tears of Steel — © Blender Foundation, CC BY 3.0. https://mango.blender.org/sharing/
- License: https://creativecommons.org/licenses/by/3.0/

Sample video delivery uses Mux test streams, W3C media samples and Unified Streaming demo streams. Sintel plays a trailer. No movies are stored in this repository. There is no licensed premium sports or series catalog. The series section is an honest empty state until a user imports series entries.

hls.js 1.6.15 is bundled under its Apache 2.0 license; see HLS-LICENSE.txt. Northstar is a working prototype name, not a cleared trademark.

## Develop

Serve the root folder with `python3 -m http.server 8080` and open http://localhost:8080 . Browser modules require HTTP hosting rather than opening index.html directly. `node --test tests/*.test.js` runs the playlist parser and catalog checks when the tests folder is present.

## Deploy

GitHub Settings → Pages → Deploy from a branch → main → /(root). All paths are relative, supporting repository subpaths. GitHub Pages hosts the interface only; media plays from its original source. It is not intended to host a paid commercial streaming business; move production authentication, subscriptions, entitlements and streaming delivery to suitable infrastructure after confirming hosting terms and content rights.
