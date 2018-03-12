const gulp = require('gulp');
const webserver = require('gulp-webserver');

//gulp commands to copy the files
// needs plugins to add minify and uglify to compress the production build
gulp.task('copyHtml', function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dest/src'));
})


gulp.task('copyJs', function(){
    gulp.src('src/js/*.js')
    .pipe(gulp.dest('dest/src/js'));
})

gulp.task('copyCss', function(){
    gulp.src('src/*.css')
    .pipe(gulp.dest('dest/src'));
})

gulp.task('copyImages', function(){
    gulp.src('src/images/*')
    .pipe(gulp.dest('dest/src/images'));
})


gulp.task('webserver', function() {
    gulp.src('dest/src')
      .pipe(webserver({
        livereload: true,
        open: true
      }));
  });

//A function to run all the commands with a single command
gulp.task('default', [ 'copyJs', 'copyImages', 'copyHtml', 'copyCss', 'webserver', 'watch']);

//automates the process so you can constantly see the changes to your files with the gulp watch command
gulp.task('watch', function(){
    gulp.watch('src/images/*',['copyImages']);
    gulp.watch('src/*.html',['copyHtml']);
    gulp.watch('src/*.css',['copyHtml']);
    gulp.watch('src/js/*.js',['copyJs']);
})


