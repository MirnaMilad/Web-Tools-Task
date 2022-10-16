const {src , dest ,parallel , watch , series} = require("gulp")
const globs ={
    html : "slider/*.html",
    css : "slider/*.css",
    js : "slider/*.js",
    images : "slider/pics/*"
}


// html task
const htmlmin = require('gulp-htmlmin');
function htmlTask(){
    //read file
    return src(globs.html)
    //minify
    .pipe(htmlmin({collapseWhitespace:true , removeComments:true}))
    // dist folder & dest
    .pipe(dest("dist"))
}

exports.html=htmlTask

// task css
var concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
function cssTask(){
     //read file
     return src(globs.css)
     //minify
     .pipe(concat("slider-task.min.css"))
     .pipe(cleanCSS())
     // dist folder & dest
     .pipe(dest("dist"))
}

exports.css = cssTask


// task js
const terser = require('gulp-terser');
function jsTask(){
     //read file
     return src(globs.js)
     //minify
     .pipe(concat("slider-task.min.js"))
     .pipe(terser())
     // dist folder & dest
     .pipe(dest("dist"))
}

exports.js = jsTask


// task images
const imagemin = require('gulp-imagemin');
function imagesTask(){
     //read file
     return src(globs.images)
     //minify
     .pipe(imagemin())
     // dist folder & dest
     .pipe(dest("dist/images"))
}


const gulp = require('gulp'),
    processhtml = require('gulp-processhtml')
    opts = { /* plugin options */ };
 
gulp.task('default', function () {
    return gulp.src('./*.html')
               .pipe(processhtml(opts))
               .pipe(gulp.dest('dist'));
});


function watchTask(){
    watch(globs.html , htmlTask)
    watch(globs.css , cssTask)
    watch(globs.js , jsTask)
    watch(globs.images , imagesTask)
}
exports.images = imagesTask


exports.default = parallel(htmlTask , cssTask , jsTask , imagesTask)