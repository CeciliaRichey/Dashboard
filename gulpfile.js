var gulp = require('gulp'),
	gutil = require('gulp-util'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	coffee = require('gulp-coffee'),
	haml = require('gulp-haml');
	concat = require('gulp-concat'),
	browserSync = require("browser-sync").create();

var coffeeSources = [
  'components/coffee/*.coffee'
];

// Removed     'components/lib/jquery/jquery.js',
;

var jsSources = [
    'components/scripts/*.js', 
  ];

var sassSources = [
  'components/sass/main.sass'
];


var hamlSources = [
  'components/haml/index.haml'
]

var htmlSources = [
    'components/markup/*.html', 
  ];



gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(uglify()).on('error', gutil.log)
		.pipe(concat('script.js'))
		.pipe(gulp.dest('js'))
		.pipe(browserSync.stream());
});


gulp.task('coffee', function() {
  gulp.src(coffeeSources)
    .pipe(coffee({bare:true}).on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'))
});


gulp.task('sass', function() {
    return sass(sassSources, { style: 'expanded', lineNumbers: true})
        .pipe(concat('style.css'))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
        ;
});

//optionally, insert {compiler: 'visionmedia'} in haml().
gulp.task('haml', function () {
  gulp.src(hamlSources)
    .pipe(haml().on('error', gutil.log))
    .pipe(gulp.dest('components/markup'));
});

gulp.task('html', function() {
	gulp.src(htmlSources)
		.pipe(concat('index.html'))
		.pipe(gulp.dest('html'))
		.pipe(browserSync.stream());
});



// Static server
gulp.task('browser-sync', function() {
    browserSync.init(["./css/*.css", "./js/*.js","./html/*.html"], {
        server: {
            baseDir: './',
            index: './html/index.html'
        }
    });
});
//removed 	gulp.watch(['js/script.js', 'html/*.html']).on('change', browserSync.reload);

gulp.task('watch', function(){
	gulp.watch(jsSources, ['js']);
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(sassSources, ['sass']);
	gulp.watch(htmlSources, ['html']);
	gulp.watch(hamlSources, ['haml']);
	});

gulp.task('default', ['haml', 'sass', 'js', 'coffee', 'browser-sync', 'watch']);
