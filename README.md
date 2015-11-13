# Simple Gulp Builder
Include plugins :
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

#Как начать:
HTML в корне проекта собирается через dev/templates + dev/chunks.
Конструкция "@@include('../chunks/head.html')" -> ищет данный темплейт в chunks.

Для запуска - открываем консоль в нашем проекте, пишем - gulp .
