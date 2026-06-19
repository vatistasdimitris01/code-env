# Hyperframes Template Videos

A lightweight Remotion project for making short template-style videos and exporting each one as MP4.

## Included templates

- Notification popup
- Chat message
- Social proof
- Alert banner
- Product update
- Reminder card
- Call-to-action

## Usage

Install dependencies:

```bash
npm install
```

Preview and customize templates in Remotion Studio:

```bash
npm start
```

Export every template to `dist/*.mp4`:

```bash
npm run render
```

Render a single template:

```bash
npm run render:notification
npm run render:chat
npm run render:social
npm run render:alert
npm run render:product
npm run render:reminder
npm run render:cta
```

Template copy, colors, icons, and composition IDs live in `src/templates.tsx`.
