'use strict';

var gulp = require('gulp');
// var sass = require('gulp-sass');
// var minifyCss = require('gulp-minify-css');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
// var rigger = require('gulp-rigger');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
var path = require('path');
// var autoprefixer = require('gulp-autoprefixer');

// Build SVG sprite
gulp.task('svg-to-sprite', function() {
  return gulp
    .src('./www/images/svg_icons/*.svg')
    .pipe(svgmin(function (file) {
      var prefix = path.basename(file.relative, path.extname(file.relative));
      return {
        plugins: [{
          cleanupIDs: {
            prefix: prefix + '-',
            minify: true
          }
        }]
      };
    }))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(gulp.dest('./www/images/'));
});
