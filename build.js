#!/usr/bin/env node
'use strict';

const spawn = require('child_process').spawn;
const fs = require('fs');

const [, , name, path] = process.argv;
const command = `vue-cli-service build --target wc --name ${name} ${path}`;

if (!name || !path) {
  // eslint-disable-next-line no-console
  console.log('Please provide "name" and "path" as first two arguments');
  // eslint-disable-next-line no-console
  console.log('like: npm run build component-name ./some-component.vue');
  process.exit();
}

const [ bin, ...args ] = command.split(' ');
const child = spawn(bin, args, { stdio: 'inherit' })
child.on('exit', function() {
  const files = [
    `${name}.js`,
    `${name}.js.map`,
    `${name}.min.js`,
    `${name}.min.js.map`,
  ];

  // move to the "bundle"
  for (let file of files) {
    fs.copyFileSync(`./dist/${file}`, `./bundle/${file}`);
  }

  // remove from "dist"
  for (let file of files) {
    fs.unlinkSync(`./dist/${file}`);
  }
  fs.unlinkSync(`./dist/demo.html`);
});



