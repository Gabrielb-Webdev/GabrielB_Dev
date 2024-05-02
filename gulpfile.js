const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Tarea para compilar el archivo skeleton.scss
gulp.task('compile-sass', function () {
    return gulp.src('sass/themes/dark.scss') // Ruta al archivo skeleton.scss
        .pipe(sass().on('error', sass.logError)) // Compilar Sass
        .pipe(gulp.dest('css')); // Directorio de destino para el CSS compilado
});

// Tarea de observación para compilar Sass automáticamente cuando haya cambios
gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', gulp.series('compile-sass'));
});

// Tarea predeterminada para ejecutar todas las tareas de una vez
gulp.task('default', gulp.series('compile-sass', 'watch'));
