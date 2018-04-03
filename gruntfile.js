module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            development: {
                files: {
                    "app/css/style.css": "app/less/main.less"
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
                    'app/css/style.min.css': ['app/css/style.css']
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
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: 'app/js/common.js',
                dest: 'app/js/common.min.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'app/js/common.min.js': ['app/js/common.min.js']
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
                src: 'app/img/imgForSprite/*',
                dest: 'app/img/sprite/spritesheet.png',
                destCss: 'app/img/sprite/sprites.css'
            }
        },
        watch: {
            less: {
                files: 'app/less/*.less',
                tasks: ['less', 'cssmin']
            },
            html: {
                files: 'app/html/**/*.html',
                tasks: ['rig']
            },
            commonjs: {
                files: 'app/js/common.js',
                tasks: ['concat', 'uglify']
            }
        },
        copy: {
            html: {
                expand: true,
                cwd: 'app/',
                src: 'index.html',
                dest: 'dist/'
            },
            css: {
                expand: true,
                cwd: 'app/css',
                src: 'style.min.css',
                dest: 'dist/css'
            },
            img: {
                expand: true,
                cwd: 'app/img',
                src: '**',
                dest: 'dist/img'
            },
            fonts: {
                expand: true,
                cwd: 'app/fonts',
                src: '**',
                dest: 'dist/fonts'
            }
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
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['copy']);
};
