var gulp = require('gulp');
var exec = require('child_process').exec;
var uglify = require('gulp-uglify');

gulp.task('bundle', function(callback){
    exec('aurelia bundle', callback)
})

gulp.task('uglify', ['bundle'], function(){
    return gulp.src('public/appbundle.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/'));
})

gulp.task('default', ["uglify"])