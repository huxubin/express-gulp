/**
 * 文件说明: gulpfile
 * 详细描述:
 * 创建者  : 胡许彬
 * 创建时间: 2016/8/26
 * 变更记录:
 */
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    less = require('gulp-less');

gulp.task('less', function () {
    gulp.src('./public/css/*.less')
      .pipe(plumber())
      .pipe(less())
      .pipe(gulp.dest('./public/css'))
      .pipe(livereload());
});

gulp.task('watch', function() {
    gulp.watch('./public/css/*.less', ['less']);
});

gulp.task('develop', function () {
    livereload.listen();
    nodemon({
        script: 'app.js',
        ext: 'js ejs'
    }).on('restart', function () {
        setTimeout(function () {
            livereload.changed(__dirname);
        }, 500);
    });
});

gulp.task('default', [
    'less',
    'develop',
    'watch'
]);
