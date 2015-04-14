module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['src/**/*.ts', 'tests/**/*.ts'],
                options: {
                    target: 'es5'
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true,
                autoWatch: false
            }
        },
        watch: {
            // Call globhtml when change occurs
            typescript: {
                files: ['**/*.ts'],
                tasks: ['typescript']
            },
            karma: {
                files: ['src/**/*.js', 'tests/**/*.js'],
                tasks: ['karma']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-karma');
};