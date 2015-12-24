# Simple responsive template
Template use:
<ul>
  <li>Gulp</li>
  <li>Bootstrap 3 grid</li>
  <li>Temaplate and chunks system look to the folder - 'templates' in div directory </li>
  <li>Put yours all js libs to the dev/js/lib, it will be concat and uqlify to the js/libs.js in the root folder</li>
</ul>

# Usage
Install dependencies through npm:

```bash
npm install
```

Run gulp builder:

```bash
gulp
```

Local server available on:

```bash
localhost:1337
```


Used dependencies:

```json
"dependencies": {
  "gulp": "^3.9.0",
  "gulp-concat": "^2.6.0",
  "gulp-connect": "^2.2.0",
  "gulp-file-include": "^0.13.7",
  "gulp-less": "^3.0.3",
  "gulp-minify-css": "^1.2.1",
  "gulp-postcss": "^6.0.1",
  "gulp-sourcemaps": "^1.6.0",
  "gulp-uglify": "^1.4.2",
  "gulp-watch": "^4.3.5",
  "less-plugin-autoprefix": "^1.5.1"
  }
```
