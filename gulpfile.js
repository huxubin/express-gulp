/**
 * 文件说明: gulpfile文件
 * 详细描述:
 * 创建者  : huxb
 * 创建时间: 2016/8/26
 * 变更记录:
 */
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    less = require('gulp-less'),
    cleanup = require('gulp-cleanup-dest');

// 监视 文件改动时执行
gulp.watch('./public/index/css/*.less',['less'],function(event){

});

gulp.task('clean',function(){
    gulp.src('./public/css/*.less')
        .pipe(plumber())
        .pipe(cleanup({
            dest: './public/css'
        }));
});

gulp.task('less',function(){
    gulp.src('./public/*/css/*.less')
        .pipe(plumber()) //Prevent pipe breaking caused by errors from gulp plugins
        .pipe(less())
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload());
});

gulp.task('develop', function (){
    livereload.listen();
    nodemon({
        script: 'app.js',
        ext: 'js ejs'
    }).on('restart',function(){
        setTimeout(function(){
            livereload.changed(__dirname);
        },500);
    });
});

gulp.task('default',[
    'develop','less'
]);
