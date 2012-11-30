module.exports = function(grunt){

	grunt.loadNpmTasks("grunt-contrib");

	grunt.initConfig({

		less : {
			test : {
				files : {
					"test/gradient/style.css" : ["test/gradient/style.less"],
					"test/grid/style.css" : ["test/grid/style.less"],
					"test/fonts/style.css" : ["test/fonts/style.less"],
					"test/css3/style.css" : ["test/css3/style.less"],
					"test/utils/style.css" : ["test/utils/style.less"],
				}
			}
		},

		watch : {
			test : {
				files : [
					"less/**",
					"test/*/style.less",
				],
				tasks : "less:test"
			}
		}

	});

};