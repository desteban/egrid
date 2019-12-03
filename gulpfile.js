const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const autoPrefixer = require('gulp-autoprefixer');

//tareas

function css() {
	return gulp
		.src(['src/sass/index.scss'])
		.pipe(sass().on('error', sass.logError))
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(
			autoPrefixer({
				versions: ['last 2 browsers']
			})
		)
		.pipe(gulp.dest('dist/css'));
}

function js() {
	return gulp
		.src(['node_modules/headroom.js/dist/headroom.js', 'src/js/index.js'])
		.pipe(gulp.dest('dist/js'));
}

function headroom() {
	return gulp
		.src(['node_modules/headroom.js/dist/headroom.js'])
		.pipe(gulp.dest('src/js'));
}

function font_awesome() {
	return gulp
		.src(['src/sass/font-awesome.scss'])
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(gulp.dest('dist/css'));
}

gulp.task('default', () => {
	headroom();
	css();
	js();
	font_awesome();
	//gulp.watch('src/sass/*.scss').on('change', css());
	gulp.watch('src/sass/*.scss', gulp.series(css));
	gulp.watch('src/js/*.js', gulp.series(js));

	gulp.watch('dist/index.html').on('change', browserSync.reload);
	gulp.watch('dist/css/**').on('change', browserSync.reload);
	gulp.watch('dist/js/**').on('change', browserSync.reload);

	browserSync.init({
		server: { baseDir: 'dist' }
	});
});
