var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('copy', function () {
    gulp.src(['./bower_components/jquery/dist/jquery.min.js','./bower_components/bootstrap/dist/js/bootstrap.min.js'])
        .pipe(gulp.dest("./wwwroot/scripts"));
});

gulp.task('concat-css', function () {
    return gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.min.css'
        ,'./bower_components/bootstrap-material-design/dist/css/*.min.css']).pipe(concat('bootstrap-material-design.css')).pipe(gulp.dest('./wwwroot/content/'));

});

gulp.task('copy-bmd', function () {
    return gulp.src('./bower_components/bootstrap-material-design/dist/js/*.js').pipe(uglify())
.pipe(gulp.dest("./wwwroot/scripts/bootstrap-material-design.js"));
})


gulp.task('default', ['copy', 'copy-bmd','concat-css']);