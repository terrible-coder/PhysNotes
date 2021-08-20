const yargs = require("yargs");
const shell = require("shelljs");
const fs = require("fs");

const argv = yargs.argv;
const wiki = argv.wiki;

const exists = fs.readdirSync("./wiki/");
if(exists.indexOf(wiki) != -1) {
	console.error(`${wiki} wiki already exists. Serve it.

npm run serve ${wiki}`);
	process.exit();
}

shell.exec(`tiddlywiki wiki/${wiki} --init server`);
