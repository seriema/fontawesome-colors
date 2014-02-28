module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
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
		}
	});

	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-contrib-less');

	// Default task(s).
	grunt.registerTask('default', ['less']);

};