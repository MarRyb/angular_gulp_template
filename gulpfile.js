var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('javascript:vendor', function() {
  return gulp.src([
      './node_modules/angular/angular.js'
    ])
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
});

gulp.task('js', function(){
   return gulp.src('src/js/**/*.coffee')
     .pipe(coffee())
     .pipe(concat('app.min.js'))
     .pipe(uglify())
     .pipe(gulp.dest('public/js'))
});

gulp.task('css', function(){
  return gulp.src('src/css/*.sass')
    .pipe(sass())
    .pipe(concat('app.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'))
});

gulp.task('html', function(){
  return gulp.src('src/js/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('public/js'))
});

gulp.task('layout', function(){
  return gulp.src('src/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('public'))
});

gulp.task('default', [ 'css', 'js', 'html', 'javascript:vendor', 'layout' ]);
