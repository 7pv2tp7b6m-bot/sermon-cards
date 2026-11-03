# Sermon Cards

A private-by-default speaking-card app for iPhone landscape, Windows, and iPad.

- One card at a time, with large previous/next edge buttons.
- Always-visible count-up timer; Start, Pause, and Reset.
- Long passages scroll; each card remembers its reading position.
- Bold, italics, Scripture references, and adjustable font size.
- Local card editor and Microsoft Word (.docx) import.
- Local browser storage and JSON backups for transferring between devices.
- Offline app caching after the first successful HTTPS load.

## Privacy

The public repository contains the app and sample prompts. Created or imported sermons are stored locally in your browser. There are no sermon uploads, accounts, analytics, or external runtime dependencies. Keep backups because clearing browser data removes locally stored cards.

## Use

Open the published GitHub Pages address in Safari. Add it to the iPhone Home Screen, launch it online, and wait for **Offline ready**. Turn off Portrait Orientation Lock, rotate to landscape, and verify a full cold launch in Airplane Mode before relying on it during delivery.

On Windows or iPad, prepare cards directly or import a .docx. Heading 1/Heading 2 starts a new card; a line containing `---` or page breaks also separates cards. Save a JSON backup and open it in the installed iPhone app to transfer your deck. Devices do not automatically sync.

## Prototype limits

Word import retains basic text, bold, italics, and paragraphs, not complex page layouts or images. The timer uses device wall-clock time to recover after suspension. Physical iPhone/Safari and installed-app Airplane Mode checks are still required.

## Hosting

Serve this repository's main branch root through GitHub Pages. No build step is needed; `.nojekyll` is included. JSZip is bundled locally and its license is in `vendor/JSZip-LICENSE.md`.

Build: sermon-cards-v1.0.0.
