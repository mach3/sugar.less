

module.exports = function(grunt){
	
	var cp = require("child_process");

	grunt.loadNpmTasks("grunt-contrib-less");

	grunt.initConfig({
		less : {
			test : {
				files : {
					"test/all/style.css" : ["./less/sugar.less"],
					"test/gradient/style.css" : ["test/gradient/style.less"],
					"test/grid/style.css" : ["test/grid/style.less"],
					"test/fonts/style.css" : ["test/fonts/style.less"],
					"test/css3/style.css" : ["test/css3/style.less"],
					"test/utils/style.css" : ["test/utils/style.less"]
				}
			}
		},
		watch : {
			test : {
				files : [
					"less/**",
					"test/*/style.less",
				],
				tasks : "lessc:test"
			}
		}
	});

	grunt.registerTask("install", function(){
		var done = this.async();
		cp.exec("sh ./install.sh", function(e, out, error){
			if(error){
				grunt.log.error(error);
			} else {
				grunt.log.write(out);
			}
			done();
		});
	});

};