const fs = require("fs");
const pkg = require("../package.json");

const base = `https://${pkg.author}.github.io/PhysNotes/wiki/`;
const wikis = fs.readdirSync("./wiki/", {withFileTypes: true})
				.filter(dirent => dirent.isDirectory())
				.map(dirent => dirent.name);

const header = `Welcome to the PhysNotes wiki! ✨✨
We are working hard to create and maintain the content of this wiki. Thank you for reading! ❤️
Here is a list of all the wikis that we have for you to explore:
`;
const list = wikis.map(wiki => `* [${wiki}](${base}${wiki})`).join("\n");
const content = header + list;

fs.writeFileSync("./wiki/README.md", content);