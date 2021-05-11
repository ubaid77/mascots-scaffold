const zipdir = require("zip-dir");
const fs = require("fs");
const colors = require("colors/safe");

module.exports = (args, options, logger) => {
  const sourceDir = args.directory;
  const homeDir = require("os").homedir();

  const nameOfFile = args.name ? `${args.name}.zip` : "mascots.zip";
  const saveDir = `${homeDir}\\Desktop\\${nameOfFile}`;

  if (fs.existsSync(sourceDir)) {
    logger.info(colors.yellow("Creating Zip..."));
    zipdir(sourceDir, { saveTo: saveDir }, function (err, buffer) {
      if (buffer) {
        logger.info(
          colors.green(
            `✔ Zip created Successfully at ~${saveDir}! Ready to be sent to AWS!`
          )
        );
      } else {
        logger.error(colors.red(`The requested directory couldn't be zipped.`));
      }
    });
  } else {
    logger.error(
      colors.red(`The requested directory ${sourceDir} wasn't found.`)
    );
    process.exit(1);
  }
};
