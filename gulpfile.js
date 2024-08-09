// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }

// exports.default = defaultTask

let project_folder = "dist";
let source_folder = "src";
let { src, dest } = require('gulp'),
		gulp = require('gulp'),
		browsersync = require('browser-sync').create(),
		fileinclude = require('gulp-file-include'),
		del = require('del'),
		autoprefixer = require('gulp-autoprefixer'),
		group_media = require('gulp-group-css-media-queries'),
		clean_css = require('gulp-clean-css'),
		rename = require('gulp-rename'),
		// scss = require('gulp-sass'),
		scss = require('gulp-sass')(require('sass')),
		babel = require('gulp-babel'),
		ttf2woff = require('gulp-ttf2woff'),
		ttf2woff2 = require('gulp-ttf2woff2'),
		fonter = require('gulp-fonter'),
		postcss = require("gulp-postcss"),
		tailwind = require('tailwindcss'),
		uglify = require('gulp-uglify-es').default;
		
		
let path = {
	build: {
		html: project_folder + "/",
		css: project_folder + "/theme/css/",
		js: project_folder + "/theme/js/",
		img: project_folder + "/theme/img/",
		fonts: project_folder + "/theme/fonts/"
	},
	src: {
		html: [source_folder + "/*.html", "!" + source_folder + "/_*.{html,htm}"],
		css: source_folder + "/scss/**/*.{scss,css}",
		// css: source_folder + "/scss/style.scss",
		js: source_folder + "/js/*.js",
		img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
		// fonts: source_folder + "/fonts/*.ttf"
		fonts: source_folder + "/fonts/*.*"
	},
	watch: {
		html: source_folder + "/**/*.{html,htm}",
		css: source_folder + "/scss/**/*.{scss,css}",
		js: source_folder + "/js/**/*.js",
		img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}"
	},
	clean: "./" + project_folder + "/"
};

function browserSync(params) {
	browsersync.init({
		server: {
			baseDir: "./" + project_folder + "/"
		},
		port: 3000,
		notify: false
	})
}

function html() {
	return src(path.src.html)
	.pipe(fileinclude())
	.pipe(dest(path.build.html))
	.pipe(browsersync.stream())
}

function css(){
	return src(path.src.css)
	
	.pipe(
		scss({
			outputStyle: "expanded"
		})
	)
	// .pipe(
	// 	group_media()
	// )
	.pipe(
		autoprefixer({
			overrideBrowserslist: ["last 5 versions"],
			cascade: true
		})
	)
	.pipe(dest(path.build.css)) // delete this
	.pipe(
		postcss([tailwind, autoprefixer])
	)
	.pipe(clean_css())
	.pipe(
		rename({
			extname: ".min.css"
		})
	)
	.pipe(dest(path.build.css))
	.pipe(browsersync.stream())
}

// babel я добавил, проверить правильность
function js() {
	return src(path.src.js)
	.pipe(fileinclude())
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(dest(path.build.js))
	.pipe(
		uglify()
	)
	.pipe(
		rename({
			extname: ".min.js"
		})
	)
	.pipe(dest(path.build.js))
	.pipe(browsersync.stream())
}

function watchFiles(params) {
	gulp.watch([path.watch.html], gulp.parallel(css, html));
	gulp.watch([path.watch.css], css);
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.img], images);
}

function clean(params) {
	return del(path.clean);
}

//  Оргинальная обработка из видоса
// function fonts() {
// 	src(path.src.fonts)
// 		.pipe(ttf2woff())
// 		.pipe(dest(path.build.fonts));
// 	return src(path.src.fonts)
// 		.pipe(ttf2woff2())
// 		.pipe(dest(path.build.fonts));
// }
function fonts() {
	return src(path.src.fonts)
		.pipe(dest(path.build.fonts));
}
//  Моё - просто добавляет картинки to build
function images() {
	return src(path.src.img)
		.pipe(dest(path.build.img));
}

gulp.task('otf2ttf', function () {
	return src([source_folder + '/fonts/*.otf'])
		.pipe(fonter({
			formats: ['ttf']
		}))
		.pipe(dest(source_folder +'/fonts/'));
})

gulp.task('ttf2woff', function () {
	src(source_folder + '/fonts/src/*.ttf')
		.pipe(ttf2woff())
		.pipe(dest(source_folder + '/fonts/'));
	return src(source_folder + '/fonts/src/*.ttf')
		.pipe(ttf2woff2())
		.pipe(dest(source_folder + '/fonts/'));
})

let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.images = images;
exports.fonts = fonts;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;