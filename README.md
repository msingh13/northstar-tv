# Northstar Player

A free browser-based, bring-your-own-playlist player. Live demo: https://msingh13.github.io/northstar-tv/

## Use

Open the site, leave `demo://northstar` and select Connect & explore, or paste your authorized HTTPS M3U URL / import an M3U file. No registration is required. Your provider may block browser playback, require DRM, impose geographic restrictions or use incompatible codecs. This player cannot bypass those restrictions. It is not an Xtream, MAG/Stalker or Jellyfin client.

## Included

- Live, movie and series playlist categories; search and group filters.
- Local favorites keyed to stream identity, with a clear-favorites control.
- Up to 5,000 imported entries; progressive rendering in batches of 60.
- HLS adaptive playback and manual picture quality where variants are supplied; native MP4 playback; retry and error messages.
- Arrow-key spatial navigation, Enter selection, Escape/Back dialog dismissal. Video and input controls retain native keyboard behavior.
- 12 official service destinations across Greek, Indian, Canadian, French, news and sports collections. These links open external services. Their subscriptions are not included.
- 20 public-directory live sample entries, one continuous TV-show sample and three open-film samples (including a trailer). These are not a licensed commercial channel package.

## Content rights

No live-channel redistribution licenses have been acquired. Public reachability is not a grant of resale rights. Do not sell the sample catalog as a channel subscription. See CONTENT-RIGHTS.md for provenance and distinctions.

Blender samples carry CC BY 3.0 attribution in the player. Their third-party test delivery servers are for demonstrations, not a contracted production CDN. The official directory links do not grant any content rights or imply partnership.

## Privacy

Playlist URLs and catalog entries stay in memory and are sent directly to their source hosts. Reloading or disconnecting clears the imported collection. Only favorite IDs are kept in localStorage; no provider credentials or playlist contents are stored there. Stream hosts see playback requests. No analytics or payment collection. Google Fonts loads externally. Source URLs and private playlists must never be committed to the public repository.

## Run and test

Serve this folder with `python3 -m http.server 8080`, then open http://localhost:8080. Run `node --test playlist.test.js` for parser, identity, security and guide checks. All assets use relative paths for GitHub Pages repository hosting.

## Deployment and device limits

Publish the contents of this folder to main and enable GitHub Pages from /(root). This deployment is a free demonstration/player, not a paid SaaS. Move to suitable commercial hosting before selling software access. There is no billing, subscriber authentication, backend proxy or native Fire TV app. Desktop browser checks do not certify Firestick or every smart TV; test on the actual target device before offering support.

hls.js 1.6.15 is Apache 2.0; see HLS-LICENSE.txt. Northstar is a working name, not a cleared trademark.
