module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-reload');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './'
                }
            }
        },
        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'js/project.js',
                options: {
                    module: 'amd',
                    target: 'es5'
                }
            }
        },
        reload: {
        port: 8080,
        proxy: {
            host: 'http://localhost'
        }},
        watch: {
            files: '**/*.ts',
            tasks: ['typescript']
        },
        open: {
            dev: {
                path: 'http://localhost:8080'
            }
    }
    });
 
    grunt.registerTask('default', ['connect', 'open', 'watch']);
 
}