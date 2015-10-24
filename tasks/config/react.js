module.exports = function(grunt) {
  grunt.config.set('react', {
    dev: {
      files: [{
        expand: true,
        cwd: './api/components/',
        src: ['**/*.js'],
        dest: './assets/js/lib/',
        ext: '.js'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-react');
}
