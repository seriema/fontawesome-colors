module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					port: 9001,
					base: 'webpage',
					livereload: true,
					open: true
				}
			}
		},

		'gh-pages': {
			options: {
				base: 'webpage',
				dotfiles: true
			},
			src: ['**']
		},

		less: {
			development: {
				files: {
					"webpage/css/font-awesome-colors.css": "webpage/less/font-awesome-colors.less"
				}
			}
		},

		watch: {
			less: {
				files: ['webpage/less/*.less'],
				tasks: ['less']
			},
			statics: {
				files: ['webpage/*.html', 'webpage/js/*.js', 'webpage/fonts/*', 'webpage/img']
			},
			livereload: {
				options: { livereload: true },
				files: ['webpage/**/*.*']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['less']);

	grunt.registerTask('serve', ['connect', 'watch']);
};