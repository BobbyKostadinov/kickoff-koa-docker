var gulp = require('gulp'),
  bump = require('./gulp/bump');



require('load-common-gulp-tasks')(gulp, {
    includeUntested: true,
    jshintrc: {
      server: ".jshintrc"
    },
    paths: {
      lint: [
              './*.js',
              '!server.js',
              '!./lib/**/target/**/*.js'
            ],
            cover: [
              './lib/**/*.js',
              '!./lib/**/*-test.js'
            ],
            test: [
              './lib/**/*-test.js',
              '!./lib/components/**',
              './lib/**/test/**/*.js'
            ]
    }
});

gulp.task('prerelease', 'makes v0.2.1 → v0.2.1-1', ['lint', 'felint', 'test-cover', 'nice-package'], function() { return bump('prerelease', false); });
gulp.task('patch', 'makes v0.1.0 → v0.1.1', ['test-cover', 'lint', 'nice-package', 'felint'], function() { return bump('patch'); });
gulp.task('feature', 'makes v0.1.1 → v0.2.0', ['lint', 'felint', 'test-cover', 'nice-package'], function() { return bump('minor'); });
gulp.task('release', 'makes v0.2.1 → v1.0.0', ['lint', 'felint', 'test-cover', 'nice-package'], function() { return bump('major'); });
