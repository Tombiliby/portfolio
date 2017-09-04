module.exports = function(grunt) {

	"use strict";

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		pathOrx: {
			tsSalesprocess: "src",
			csSalesprocess: "out"
		},
		// Less
		less: {
			compile: {
				options: {
					compress: true
					//, sourceMap: true
				},
				files: {
					"<%= pathOrx.csSalesprocess %>/css/style.css": [
					"<%= pathOrx.tsSalesprocess %>/less/bootstrap/bootstrap.less",
					"<%= pathOrx.tsSalesprocess %>/less/icon/font-awesome.less",
					"<%= pathOrx.tsSalesprocess %>/less/app/app.less"
					]
				}
			}
		},
		// Concat
		concat: {
			options: {
				stripBanners: true,
				banner: "/*! Generated : " + grunt.template.today("yyyy-mm-dd") + " */\n"
			},
			lib: {
				src: [
					"<%= pathOrx.tsSalesprocess %>/js/lib/jquery.js",
					"<%= pathOrx.tsSalesprocess %>/js/lib/bootstrap.js",
					"<%= pathOrx.tsSalesprocess %>/js/lib/ScrollMagic.js"
				],
				dest: "<%= pathOrx.csSalesprocess %>/js/lib.js"
			},
			app: {
				src: [
					"<%= pathOrx.tsSalesprocess %>/js/app/*.js"
				],
				dest: "<%= pathOrx.csSalesprocess %>/js/app.js"
			}
		},
    watch: {
      static: {
        files: [
        	"<%= pathOrx.tsSalesprocess %>/js/**/*",
        	"<%= pathOrx.tsSalesprocess %>/less/**/*"
        	],
        tasks: ["default"]
      }
    },
	  copy: {
	  	main: {
	  		files: [
	  			{
	  				expand: true, 
	  				src: ["fonts/*/*"],
	  				dest: '<%= pathOrx.csSalesprocess %>',
	  				cwd: '<%= pathOrx.tsSalesprocess %>/',
	  				filter: "isFile"
	  			}
	  		]
	  	}
	  }
	});

	// Load grunt tasks from NPM packages
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task.
	grunt.registerTask("default", ["less", "concat", "copy"]);
	

};
