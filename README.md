# Mojular MoJ Elements

Collection of design patterns and components used within MoJ for use with Mojular.

## Installation

Install via NPM:

```
npm install https://github.com/mojular/moj-elements/tarball/master --save
```

Installation and usage are similar to [GOV.UK elements module](https://github.com/mojular/govuk-elements).

### Sass

**Gulp**

```js
// gulpfile.js

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var importPaths = [];
importPaths.push(require('mojular-govuk-elements').getPaths('sass'));
importPaths.push(require('mojular-moj-elements').getPaths('sass'));

gulp.task('sass', function() {
  var result = gulp.src('path/to/your/local/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ includePaths: [].concat.apply([], importPaths) }).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dest + 'css/'));
```

**Rails**

In `config/initializers/sass.rb`

```ruby
JSON.parse(IO.read("node_modules/mojular-govuk-elements/package.json"))['paths']['sass'].each do |p|
  Sass.load_paths << File.expand_path("node_modules/mojular-govuk-elements/#{p}")
end
```

Module’s import paths are defined in its `package.json` file. Import the into project’s `load_paths`.

## Usage

In your project’s main Sass file:

```scss
$images-dir: '/static/images/'; // projects images location

// Import certain GOV.UK elements
@import 'govuk/fonts';
@import 'govuk/base';
@import 'govuk/typography';
@import 'govuk/layout';
@import 'govuk/elements';
@import 'govuk/elements/global-header';

// Import all CLA elements
@import 'cla/elements';

// Import local styles
@import 'tabs';
@import 'search';
```

### Scripts

Scripts are intended to be [processed by Webpack](https://github.com/mojular/mojular#usage).

Import modules in your project’s JS using CommonJS or AMD style. Webpack will take care of making it work in the browser.

```js
require('mojular');

require('mojular-moj-elements/assets/scripts/modules/skip-to-content'); // Skip to content link behaviour
require('mojular-moj-elements/assets/scripts/modules/devs'); // Message from MoJ in developer console
require('mojular-moj-elements/assets/scripts/modules/cookie-message'); // First-time GOV.UK cookie message

require('./local-module');

Mojular.init();
```

Mojules should be namespaced for them be processed by Mojular initialisation.

```js
// local depencenies
var $ = require('jquery');
var find = require('lodash/collection/find');
```

Webpack allows to require specific components of external libraries (e.g. Lodash). Rather than import the whole Lodash library each module specifies which compont it needs. Webpack will build a custom version of Lodash in the end including only those components which are required in the whole of project files, making the output code smaller.

```js
Mojular.Modules.YourModuleName = {
  el: '#DOMElement'  // signifies the root DOM element component works with
  init: function() {
    // code run when Mojular initialises individual components
  }
}
```

For more ideas see [Mojular core structure](https://github.com/mojular/mojular/blob/master/assets/scripts/mojular.js).
