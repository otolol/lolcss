var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    gulp.src('src/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/'))
})

gulp.task('watch', function(){
    gulp.watch('src/**/*.scss', ['sass']);
})

gulp.task('default', ['watch'])