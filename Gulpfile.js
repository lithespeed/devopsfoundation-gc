
'use strict';
var gulp = require('gulp'),
    jshint = require('gulp-jshint');
gulp.task('lint', function () {
  gulp
      .src(['app.js'])
      .pipe(jshint('.jhintrc'))
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'));
});
