import {mkdir} from 'node:fs/promises';
import {spawn} from 'node:child_process';

const compositionIds = [
  'notification-popup',
  'chat-message',
  'social-proof',
  'alert-banner',
  'product-update',
  'reminder-card',
  'call-to-action',
];

await mkdir('dist', {recursive: true});

for (const id of compositionIds) {
  const output = `dist/${id}.mp4`;
  console.log(`Rendering ${id} -> ${output}`);
  await new Promise((resolve, reject) => {
    const child = spawn('npx', ['remotion', 'render', 'src/index.tsx', id, output], {stdio: 'inherit'});
    child.on('exit', (code) => code === 0 ? resolve() : reject(new Error(`Render failed for ${id} with exit code ${code}`)));
    child.on('error', reject);
  });
}
