var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    connect = require('gulp-connect'),
    cssnano = require('gulp-cssnano'),
    fileinclude = require('gulp-file-include'),
    image = require('gulp-image'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    order = require("gulp-order"),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    plugins = gulpLoadPlugins();

function onError(error){
    plugins.notify().write(error.message);
    this.emit('end'); // Keep gulp from hanging on this task
}

gulp.task('images-optimize', function() {
    return gulp.src([
        './images/**/*'
    ])
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            jpegoptim: false,
            mozjpeg: true,
            guetzli: false,
            gifsicle: true,
            svgo: true,
            concurrent: 10
        }))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('default',
    [
        'images-optimize',
    ]);

