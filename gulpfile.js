var gulp = require('gulp');
var sass = require('gulp-sass');
var stylus = require('gulp-stylus');
var less = require('gulp-less');
var myth = require('gulp-myth');

gulp.task('sass', function () {
    gulp.src('./origin/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'));
});
gulp.task('less', function () {
    gulp.src('./origin/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist'));
});
gulp.task('stylus', function () {
    gulp.src('./origin/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist'));
});
gulp.task('myth', function () {
    gulp.src('./origin/*.css')
    .pipe(myth())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['sass', 'less', 'stylus', 'myth']);
