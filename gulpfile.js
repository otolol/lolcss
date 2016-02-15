var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var perfectionist = require('perfectionist');
var postcss = require('gulp-postcss');

gulp.task('sass', function(){
    gulp.src('src/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
                perfectionist({
                    format: 'expanded',
                }),
                autoprefixer()
            ]
        ))
        .pipe(gulp.dest('build/'))
})

gulp.task('watch', function(){
    gulp.watch('src/**/*.scss', ['sass']);
})

gulp.task('default', ['watch'])