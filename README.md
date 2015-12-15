# Mojular MoJ Elements

Collection of design patterns and components used within MoJ for use with Mojular.

## Installation

Install via NPM:

```
npm install mojular/moj-elements --save
```

Installation and usage are similar to [GOV.UK elements module](https://github.com/mojular/govuk-elements).

### Sass

**Gulp**

```js
// gulpfile.js

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var loadPaths = require('mojular/sass-paths')([
  require('mojular-govuk-elements/package.json'),
  require('mojular-moj-elements/package.json')
]);

gulp.task('sass', function() {
  var result = gulp.src('path/to/your/local/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ includePaths: loadPaths }).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dest + 'css/'));
```

**Rails**

In `config/initializers/sass.rb`

```ruby
JSON.parse(IO.read("node_modules/mojular-govuk-elements/package.json"))['sassPaths'].each do |p|
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
var Mojular = require('mojular');

Mojular
  .use([
    require('mojular-govuk-elements'),
    require('mojular-moj-elements/modules/label-focus')
  ])
  .init();
```

Modules should be exported to be used with Mojular base correctly.

```js
exports.YourModuleName = {
  el: '#DOMElement'  // signifies the root DOM element component works with
  init: function() {
    // code run when Mojular initialises individual components
  }
}
```

Define local dependencies in CommonJs style.

```js
// local depencenies
var $ = require('jquery');
var find = require('lodash/collection/find');
```

Webpack allows to require specific components of external libraries (e.g. Lodash). Rather than import the whole Lodash library each module specifies which component it needs. Webpack will build a custom version of Lodash in the end including only those components which are required in the whole of project files, making the output code smaller.


For more ideas see [Mojular core structure](https://github.com/mojular/mojular/blob/master/index.js).
