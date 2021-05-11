const prompt = require("prompt");
const shell = require("shelljs");
const fs = require("fs");
const colors = require("colors/safe");

module.exports = (args, options, logger) => {
  const templatePath = `${__dirname}/../template/`;
  const localPath = args.directory;

  try {
    if (!fs.existsSync(localPath)) {
      fs.mkdirSync(localPath);
    }
    logger.info(colors.yellow("Creating template..."));
    shell.cp("-R", `${templatePath}/*`, localPath);
    logger.info(
      colors.green(`✔ Template created at ${localPath}\\mascots_template!`)
    );
  } catch (error) {
    logger.error(
      colors.red(`The requested directory ${localPath} wasn't found.`)
    );
    process.exit(1);
  }
};
