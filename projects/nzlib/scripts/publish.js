const fs = require('fs-extra');
const path = require('path');
const npm = require('npm');

const targetPath = path.resolve(__dirname, '../../../dist/nzlib');
npm.pack(targetPath);
