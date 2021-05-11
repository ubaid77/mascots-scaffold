#!/usr/bin/env node

const prog = require("caporal");
const createFunc = require("./lib/create");
const zipFunc = require("./lib/zip");

prog
  .version("1.0.0")
  .command("create", "Generate a new application")
  .argument("<directory>", "Name of directory")
  .action(createFunc)

  .command("publish", "Generate a zip folder")
  .argument("<directory>", "Name of directory")
  .argument("<name>", "Name of zip file")
  .action(zipFunc);

prog.parse(process.argv);
