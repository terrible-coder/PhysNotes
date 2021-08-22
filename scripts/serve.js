const yargs = require("yargs");
const shell = require("shelljs");
const fs = require("fs");

const argv = yargs.argv;
const wiki = argv.wiki;

const exists = fs.readdirSync("./wiki/");
if(exists.indexOf(wiki) == -1) {
	console.error(`${wiki} wiki does not exist yet. Create it.

npm run create ${wiki}`);
	process.exit();
}

shell.exec(`tiddlywiki wiki/${wiki} --listen`);
