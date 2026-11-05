'use strict';
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const required = ['Kelly Head', 'Restoration Specialist', 'id="about"', 'id="focus"', 'id="gallery"', 'id="contact"', 'mailto:khead043@gmail.com'];
const missing = required.filter(text => !html.includes(text));
const assets = [...html.matchAll(/(?:src|data-full)="(assets\/[^"#]+)"/g)].map(match => match[1]);
const missingAssets = [...new Set(assets)].filter(file => !fs.existsSync(path.join(root, file)));
if (missing.length || missingAssets.length) {
  console.error('Missing content:', missing, '\nMissing assets:', missingAssets);
  process.exit(1);
}
console.log(`Passed: content, navigation, contact, and ${new Set(assets).size} local assets.`);
