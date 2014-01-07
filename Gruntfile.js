module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.registerTask('foo', 'A sample task that logs stuff.', function() {
    grunt.log.writeln(this.name);
  });

  grunt.registerTask('bar', 'A sample task that logs stuff.', function() {
    grunt.log.writeln(this.name);
  });

  // Default task(s).
  grunt.registerTask('default', ['foo', 'bar', 'foo']);

};
