// Src : ES6 in sails.js https://github.com/artificialio/sails-hook-babel/issues/4

module.exports = function(grunt) {

    grunt.config.set('babel', {
      dev: {
        files: [{
          expand: true,
          cwd: 'assets/js/',
          src: ['**/*.js', '!dependencies/**/*.js'],
          dest: '.tmp/public/js/',
          ext: '.js',
        }],
        options: {
            compact : true
        }
      }
    });

    grunt.loadNpmTasks('grunt-babel');
};
