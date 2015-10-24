module.exports = function(grunt) {
  grunt.registerTask('compileAssets', [
    'clean:dev',
    'jst:dev',
    //'less:dev',
    'sass:dev',
    //'babel:dev',
    'react:dev',
    'browserify',
    'copy:dev',
    'coffee:dev'
  ]);
};
