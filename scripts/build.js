const fs = require("fs");
const shell = require("shelljs");

const path = "./wiki/";

const directories = fs.readdirSync(path, {withFileTypes: true})
				  .filter(f => f.isDirectory());

for(const dir of directories) {
	shell.cd(`${path}${dir.name}`);
	shell.exec("tiddlywiki --build index");
	fs.renameSync("output/index.html", "index.html");
}