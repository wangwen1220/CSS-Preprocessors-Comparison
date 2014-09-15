var gulp = require('gulp');
var sass = require('gulp-sass');
var stylus = require('gulp-stylus');
var less = require('gulp-less');
var myth = require('gulp-myth');
var watch = require('gulp-watch');

gulp.task('sass', function () {
    watch('./origin/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'));
});
gulp.task('less', function () {
    watch('./origin/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist'));
});
gulp.task('stylus', function () {
    watch('./origin/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist'));
});
gulp.task('myth', function () {
    watch('./origin/*.css')
    .pipe(myth())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['sass', 'less', 'stylus', 'myth']);
