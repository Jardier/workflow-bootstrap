
//inclusão de plugins
const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCss = require('gulp-minify-css');
const minifyHtml = require('gulp-minify-html');
const browserSync = require('browser-sync'); 

//Compila os arquivos .scss e em seguida minifica 
gulp.task('styles', function() {
	gulp.src('./source/scss/*.scss')
	    .pipe(sass().on('error', sass.logError))
	    .pipe(gulp.dest('./dist/css'))
	    .pipe(minifyCss())
	    .pipe(gulp.dest('./dist/css/'))
	    .pipe(browserSync.reload({
	    	stream: true,
	    }));

});

//Minifica o Html
gulp.task('html', function() {
	gulp.src('./source/*.html')
	    .pipe(minifyHtml())
	    .pipe(gulp.dest('./dist/'))

});

//Escuta as alterações
gulp.task('default', function(){
	gulp.watch('./source/scss/base.scss', ['styles']);
	gulp.watch('./source/scss/layout.scss', ['styles']);
	gulp.watch('./source/scss/style.scss', ['styles']);
	gulp.watch('./source/index.html', ['html']);
});
