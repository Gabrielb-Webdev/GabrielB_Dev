const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const path = require('path');
const fs = require('fs');

// Función para recorrer todas las carpetas dentro de una carpeta
function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(file => fs.statSync(path.join(dir, file)).isDirectory());
}

// Tarea para compilar todos los archivos .scss dentro de las carpetas de la carpeta sass
gulp.task('compile-sass', function (done) {
    const folders = getFolders('sass'); // Obtener todas las carpetas dentro de la carpeta sass
    const tasks = folders.map(folder => {
        return function() {
            return gulp.src(path.join('sass', folder, '*.scss')) // Seleccionar todos los archivos .scss dentro de cada carpeta
                .pipe(sass().on('error', sass.logError)) // Compilar Sass
                .pipe(gulp.dest('css/scss')); // Directorio de destino para el CSS compilado
        };
    });
    gulp.parallel(...tasks)(done); // Ejecutar todas las tareas en paralelo
});

// Tarea de observación para compilar Sass automáticamente cuando haya cambios
gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', gulp.series('compile-sass'));
});

// Tarea predeterminada para ejecutar todas las tareas de una vez
gulp.task('default', gulp.series('compile-sass', 'watch'));

