module.exports = function(grunt) {

  var version = grunt.file.readJSON('package.json').version;

  grunt.config.set('browserify', {
    js: {
      src : './api/components/app.js',
      dest: './assets/js/lib/bundle.js'
    },
    options: {
      transform: [require('grunt-react').browserify]
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};

