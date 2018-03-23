module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            development: {
                files: {
                    "app/css/style.css": "app/less/*.less"
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/style.min.css': ['app/css/style.css']
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9']
            },
            target: {
                src: 'app/css/style.css',
                dest: 'app/css/style.css'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'dist/js/common.min.js': ['app/js/*.js']
                }
            }
        },
        rig: {
            compile: {
                files: {
                    'app/index.html': ['app/html/*.html']
                }
            }
        },
        sprite:{
            all: {
                src: 'app/img/imgForSprite/*.png',
                dest: 'app/img/sprite/spritesheet.png',
                destCss: 'app/img/sprite/sprites.css'
            }
        },
        watch: {
            less: {
                files: 'app/less/*.less',
                tasks: ['less']
            },
            html: {
                files: 'app/html/*.html',
                tasks: ['rig']
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'app/',
                src: 'index.html',
                dest: 'dist/'
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-rigger');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['copy', 'uglify', 'cssmin']);
};