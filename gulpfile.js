var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var htmlmin = require('gulp-htmlmin');

var src = "src/";
var dest = "dist/";

gulp.task('scripts', function() {
  return gulp.src(src + 'js/*.js')
    .pipe(concat('main.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest(dest + 'assets/js'));
});

gulp.task('sass', function() {
  return sass(src + 'scss/style.scss', {style: 'compressed'})
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(dest + 'assets/css'));
});

gulp.task('images', function() {
  return gulp.src(src + 'images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(dest + 'assets/img'));
})

gulp.task('minify', function() {
  return gulp.src(src + '*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(dest));
})

gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/images/**/*', ['images']);
})

gulp.task('default', ['scripts', 'sass', 'images', 'watch']);
