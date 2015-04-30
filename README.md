# semify
A [browserify](http://browserify.org) [transform](https://github.com/substack/node-browserify#btransformtr-opts) for adding semicolons.

## Installation

```
$ npm install --save @artcommacode/semify
```

Note: You'll need to add the `-g` flag if you're not using `@artcommacode/semify` from within an [NPM script](https://docs.npmjs.com/misc/scripts).

## Use

From the command-line:

```
$ browserify -t @artcommacode/semify main.js
```

or with the API:


``` js
var b = require('browserify)
var semify = require('@artcommacode/semify')

b.transform('semify')
```

For further information, see the [browserify handbook](https://github.com/substack/browserify-handbook) section on [transforms](https://github.com/substack/browserify-handbook#transforms).
