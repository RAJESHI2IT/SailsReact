module.exports = function(grunt) {
  grunt.registerTask('syncAssets', [
    'jst:dev',
    //'less:dev',
    'sass:dev',
    //'babel:dev',
    'react:dev',
    'browserify',
    'sync:dev',
    'coffee:dev'
  ]);
};
