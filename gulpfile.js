var gulp = require('gulp');
var sass = require('gulp-sass');
var stylus = require('gulp-stylus');
var less = require('gulp-less');
var myth = require('gulp-myth');
var watch = require('gulp-watch');
var compass = require('gulp-compass');
var nib = require('nib');
var path = require('path');

gulp.task('sass', function () {
    gulp.src('./origin/*.scss')
    .pipe(watch('./origin/*.scss', function(files) {
        return files.pipe(compass({
                    project: path.join(__dirname),
                    css: 'dist',
                    sass: 'origin'
                }))
                .pipe(gulp.dest('./dist'));
    }));
});
gulp.task('less', function () {
    gulp.src('./origin/*.less')
    .pipe(watch('./origin/*.less', function(files) {
        return files.pipe(less())
                .pipe(gulp.dest('./dist'));
    }));
});
gulp.task('stylus', function () {
    gulp.src('./origin/*.styl')
    .pipe(watch('./origin/*.styl', function(files) {
        return files.pipe(stylus({use: [nib()]}))
                .pipe(gulp.dest('./dist'));
    }));
});
gulp.task('myth', function () {
    gulp.src('./origin/*.css')
    .pipe(watch('./origin/*.css', function(files) {
        return files.pipe(myth())
                .pipe(gulp.dest('./dist'));
    }));
});

gulp.task('default', ['sass', 'less', 'stylus', 'myth']);
