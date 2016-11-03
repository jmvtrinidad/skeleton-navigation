var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var bundles = require('../bundles.js');
var runSequence = require('run-sequence');

var config = {
  force: true,
  baseURL: '.',
  configPath: './config.js',
  bundles: bundles.bundles
};

gulp.task('bundle', ['build'], function() {
  return bundler.bundle(config);
});

gulp.task('bundle-sw', function(callback) {
  return runSequence(
    'bundle',
    'generate-service-worker',
    callback
  );
});

gulp.task('unbundle', function() {
  return bundler.unbundle(config);
});