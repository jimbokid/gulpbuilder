var gulp = require ('gulp');
var less = require('gulp-less-sourcemap');
var path = require('path');
var fileinclude = require('gulp-file-include');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
// var mqpacker = require('css-mqpacker');
// var csswring = require('csswring');

gulp.task('default',['concat','less','fileinclude','watch']);

gulp.task('less', function () {
  gulp.src('./dev/less/style.less')
     .pipe(less({
         sourceMap: {
             sourceMapRootpath: 'dev/less/style.less'
         }
     }))
     .pipe(gulp.dest('./css/'));
});

gulp.task('fileinclude', function() {
  gulp.src(['./dev/templates/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('concat', function() {
  return gulp.src(['./dev/js/jquery-1.11.1.min.js','./dev/js/lib/*.js'])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('watch',function(){
  gulp.watch('dev/less/*.less',['less']);
  gulp.watch('dev/chunks/*.html',['fileinclude']);
  gulp.watch('dev/templates/*.html',['fileinclude']);
  gulp.watch('css/style.css',['css']);
});

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']}),
        // mqpacker,
        // csswring
    ];
    return gulp.src('./css/style.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./css'));
});
