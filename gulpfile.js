import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import cheerio from 'gulp-cheerio';
import concat from 'gulp-concat';
import csso from 'gulp-csso';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import sourcemap from 'gulp-sourcemaps';
import svgmin from 'gulp-svgmin';
import sass from 'gulp-sass';
import svgstore from 'gulp-svgstore';
import terser from 'gulp-terser';
import webp from 'gulp-webp';
import del from 'del';
import browserSync from 'browser-sync';

// Основные директории
const dirs = {
  src: 'src',
  dest: 'build'
};

// Пути к файлам
const path = {
  styles: {
    root: `${dirs.src}/sass/`,
    compile: `${dirs.src}/sass/style.scss`,
    save: `${dirs.dest}/css/`
  },
  html: {
    root: `${dirs.src}/*.html`,
    save: `${dirs.dest}`
  },
  scripts: {
    root: `${dirs.src}/js/**/*.js`,
    save: `${dirs.dest}/js/`
  },
  img: {
    root: `${dirs.src}/img/`,
    save: `${dirs.dest}/img/`
  }
};

// HTML
export const html = () => gulp.src(path.html.root)
  .pipe(htmlmin({
    removeComments: true,
    collapseWhitespace: true,
  }))
  .pipe(gulp.dest(path.html.save))

// Styles
export const styles = () => gulp.src(path.styles.compile)
  .pipe(plumber())
  .pipe(sourcemap.init())
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(csso())
  .pipe(rename({ suffix: '.min' }))
  .pipe(sourcemap.write('.'))
  .pipe(gulp.dest(path.styles.save))

// Scripts
export const scripts = () => gulp.src(path.scripts.root)
  .pipe(terser())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest(path.scripts.save))

// Sprite
const sprite = () => gulp.src(`${path.img.root}/**/*.svg`)
  .pipe(svgmin({
    plugins: [{
      removeDoctype: true
    }, {
      removeXMLNS: true
    }, {
      removeXMLProcInst: true
    }, {
      removeComments: true
    }, {
      removeMetadata: true
    }, {
      removeEditorNSData: true
    }, {
      removeViewBox: false
    }]
  }))
  .pipe(cheerio({
    run: function ($) {
      $('[fill]').attr('fill', 'currentColor');
      $('[stroke]').removeAttr('stroke');
      $('[style]').removeAttr('style');
    },
    parserOptions: { xmlMode: true }
  }))
  .pipe(svgstore({ inlineSvg: true }))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest(path.img.save));

// Copy
export const copy = () => gulp.src([
    `${dirs.src}/fonts/**/*`,
    `${path.img.root}/**/*`,
  ], {
    base: dirs.src
  })
    .pipe(gulp.dest(dirs.dest))

// Swiper JS
export const swiperJs = () => gulp.src('node_modules/swiper/swiper-bundle.min.js')
  .pipe(gulp.dest(path.scripts.save))

// Swiper CSS
export const swiperCss = () => gulp.src('node_modules/swiper/swiper-bundle.min.css')
  .pipe(gulp.dest(path.styles.save))

// Clean
export const clean = () => del(dirs.dest);

// Server
const devWatch = () => {
  browserSync.init({
    server: dirs.dest,
    notify: false,
    open: false,
  });
  gulp.watch(`${path.html.root}`, gulp.series(html)).on('change', browserSync.reload);
  gulp.watch(`${path.styles.root}`, gulp.series(styles)).on('change', browserSync.reload);
  gulp.watch(`${path.scripts.root}`, gulp.series(scripts)).on('change', browserSync.reload);
  // gulp.watch([ `${dirs.src}/fonts/**/*`, `${path.img.root}/**/*` ], gulp.series(copy)).on('change', browserSync.reload);
};

// Develop
export const dev = gulp.series(clean, gulp.parallel(copy, swiperJs, swiperCss), gulp.parallel(html, styles, scripts, sprite), devWatch);

// Build
export const build = gulp.series(clean, gulp.parallel(html, styles, scripts));
