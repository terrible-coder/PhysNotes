The layout of the project repository is as follows:

```markdown
.
├── README
├── CONTRIBUTING
├── .circleci
│   └── config.yml (build config, edit only if you know what you're doing)
├── scripts
│   └── (*.js scripts to automate tasks)
├── wiki
│   ├── ClassMech
│   │   ├── tiddlers
│   │   │   └── *.tid (not recommended to edit files directly)
│   │   └── tiddlywiki.info
│   ├── StatMech
│   │   ├── tiddlers
│   │   │   └── *.tid (not recommended to edit files directly)
│   │   └── tiddlywiki.info
│   └── ... (folders for different wikis)
├── package.json
└── package-lock.json
```