module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
	concat: {   
    dist: {
        src: [
            'src/scripts/*.js' // All JS in the libs folder
            //'js/global.js'  // This specific file
        ],
        dest: 'dist/scripts/production.js',
    }
	},
	uglify: {
    build: {
        src: 'dist/scripts/production.js',
        dest: 'dist/scripts/production.min.js'
      }
    },
	imagemin: {
    dynamic: {
        files: [{
            expand: true,
            //cwd: 'images/',
			//src: ['src/images/*.{png,jpg,gif}'],
            src: ['src/images/*.jpg'],
            dest: 'dist/images/'
        }]
    }
}
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['jshint','concat','uglify','imagemin']);

};