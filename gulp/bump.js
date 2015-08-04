var gulp = require('gulp'),
    git = require('gulp-git'),
    bump = require('gulp-bump'),
    filter = require('gulp-filter'),
    tag_version = require('gulp-tag-version');

module.exports = function (importance, skipTagging) {
  if (skipTagging === false) {
    return gulp.src(['./../package.json'])
      .pipe(bump({type: importance}))
      .pipe(gulp.dest('./../'))
      .pipe(git.commit('bumps package version'))
      .pipe(filter('package.json'))
      .pipe(tag_version());
  }
  return gulp.src(['./../package.json'])
    .pipe(bump({type: importance}))
    .pipe(gulp.dest('./../'))
    .pipe(git.commit('bumps package version'))
    .pipe(filter('package.json'));
};
