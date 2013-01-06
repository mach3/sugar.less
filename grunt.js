module.exports = function(grunt){

	grunt.initConfig({

		lessc : {
			test : {
				"test/gradient/style.css" : "test/gradient/style.less",
				"test/grid/style.css" : "test/grid/style.less",
				"test/fonts/style.css" : "test/fonts/style.less",
				"test/css3/style.css" : "test/css3/style.less",
				"test/utils/style.css" : "test/utils/style.less",
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

	grunt.registerMultiTask(
		"lessc",
		"Compile less css",
		function(){
			var exec, data, cmd, dist, done;

			exec = require("child_process").exec;
			data = this.data;

			for(dist in data){
				cmd = ([ "lessc", data[dist], dist ]).join(" ");
				done = this.async();
				exec(cmd, function(e, stdout, stderr){
					if(null != e){
						grunt.log.error(stderr);
					}
					done();
				});
			}
		}
	);

};