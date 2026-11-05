'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const build = path.join(root, 'build');

fs.rmSync(build, { recursive: true, force: true });
fs.mkdirSync(build, { recursive: true });
fs.cpSync(path.join(root, 'index.html'), path.join(build, 'index.html'));

const assetsDirectory = path.join(root, 'assets');
if (fs.existsSync(assetsDirectory)) fs.cpSync(assetsDirectory, path.join(build, 'assets'), { recursive: true });

const publicDirectory = path.join(root, 'public');
if (fs.existsSync(publicDirectory)) fs.cpSync(publicDirectory, build, { recursive: true });
fs.writeFileSync(path.join(build, '.nojekyll'), '');

console.log('Built landing page in build/.');
