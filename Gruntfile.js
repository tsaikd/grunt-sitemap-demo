module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		sitemap: {
			dist: {}
		}
	});

	require("load-grunt-tasks")(grunt);
	grunt.registerTask("default", ["sitemap"]);

};
