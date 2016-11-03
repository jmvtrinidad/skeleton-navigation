var gulp = require('gulp');
var paths = require('../paths');

gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = '';
  var appDir = paths.output;

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    ignoreUrlParametersMatching: [/^utm_/, /./] ,
    staticFileGlobs: [
      appDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}',
      rootDir + '/',
      rootDir + 'index.html',
      rootDir + 'service-worker-registration.js',
      rootDir + 'styles/styles.css',
      rootDir + 'config.js',
      rootDir + 'jspm_packages/npm/font-awesome@4.6.3/css/font-awesome.min.css',
      rootDir + 'jspm_packages/npm/font-awesome@4.6.3/fonts/*',
      rootDir + 'jspm_packages/system.js',
      rootDir + 'jspm_packages/npm/bluebird@3.4.1/js/browser/bluebird.min.js'
    ],
    stripPrefix: rootDir
  }, callback);
});