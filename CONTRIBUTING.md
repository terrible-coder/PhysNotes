This project is a public wiki. Therefore anyone can contribute to this project.

## Prerequisites
- Latest version of [nodejs](https://nodejs.org/en/download)
- Latest version of [git](https://git-scm.com/downloads)
- Github account

## Step 1: Fork the repository
Create a fork of this repository on Github to your own Github account. Once the
repository has been forked, create a local copy by running the command
```bash
git clone https://github.com/your_username/PhysNotes.git
```

If the process is successful, you should see a folder called `PhysNotes`.

## Step 2: Launch wiki locally

### Edit existing wiki
From within the `PhysNotes` directory, run
```bash
npm run serve wiki_name
```
If the wiki exists, TiddlyWiki will serve the wiki at https://localhost:8080
which you can view directly from your browser.
You can edit existing "tiddlers" by clicking on the pen symbol at the top of each
tiddler. You can create new ones by clicking on the ➕ button in the side bar.
Before creating new ones, it is a good idea to check if related tiddlers already
exist. If not then go ahead and add your ideas to the wiki. The wiki will
automatically save them to the local machine.

### Create new wiki
If you want to add ideas about a topic which does not have a wiki yet then you
are most welcome to create a new wiki. From within the `PhysNotes` directory run
```bash
npm run create wiki_name
```
You should see a folder named `wiki_name` inside `wiki` and a `tiddlywiki.info`
file inside the `wiki_name` folder suggesting that the wiki has been created
successfully. Go ahead and serve and edit the new wiki as described above.

## Step 3: Create pull request
Once you are satisfied with the changes you have made, commit all the changes and
push them up to Github with
```bash
git push
```
Now, Github will automatically show you the button to create a pull request (PR)
against the repository you forked from. Go ahead and create the PR. Hooray! You
just contributed to this project. All you've got to do now is wait a little for
your proposed changes to make it on the `main` branch.
