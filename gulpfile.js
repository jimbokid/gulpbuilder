var gulp = require ('gulp');
var less = require('gulp-less');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var fileinclude = require('gulp-file-include');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var minifyCSS = require('gulp-minify-css');


gulp.task('default',['concat','less','fileinclude','connect','watch']);

gulp.task('less', function () {
  var autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });
  return gulp.src('./dev/less/style.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      plugins: [autoprefix],
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'));
});


gulp.task('connect',function(){
  connect.server({
    // root: [__dirname],
    port: 1337,
    livereload: true
  });
})

gulp.task('fileinclude', function() {
  gulp.src(['./dev/templates/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('html', function () {
    gulp.src('*.html')
    .pipe(connect.reload());
});
gulp.task('css', function () {
    gulp.src('css/*.css')
    .pipe(connect.reload());
});

gulp.task('concat', function() {
  return gulp.src(['./dev/js/jquery-1.11.1.min.js','./dev/js/lib/*.js'])

    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'));
});

gulp.task('watch',function(){
  gulp.watch('dev/less/*.less',['less']);
  gulp.watch('dev/chunks/*.html',['fileinclude']);
  gulp.watch('dev/templates/*.html',['fileinclude']);
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['css/*.css'], ['css']);
});
