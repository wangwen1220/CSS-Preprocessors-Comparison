var gulp = require('gulp');
var sass = require('gulp-sass');
var stylus = require('gulp-stylus');
var less = require('gulp-less');

gulp.task('sass', function () {
    gulp.src('*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});
gulp.task('less', function () {
    gulp.src('*.less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
});
gulp.task('stylus', function () {
    gulp.src('*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass', 'less', 'stylus']);
