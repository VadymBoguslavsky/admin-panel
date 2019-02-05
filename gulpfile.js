'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
sass.compiler = require('node-sass');
const watchSass = require("gulp-watch-sass")


gulp.task('sass', function () {
  return gulp.src('assets/styles/sass/*sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/styles/css'));
});


gulp.task('image', () =>
  gulp.src('assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/img/'))
);

gulp.task("sass:watch", () => watchSass([
  "assets/styles/sass/"
])
  .pipe(sass())
  .pipe(gulp.dest("assets/styles/css")));