module.exports = function(grunt){   
    
    grunt.initConfig({
        sass: {
            build: {
                files:[{
                    src:"assets/sass/style.scss",
                    dest:"assets/css/style.css"
                }]
            },
        },
        
      concat: {
//        js: {
//          src: ['js/1.js', 'js/2.js'],
//          dest: 'build/script.js',
//        },
//        css: {
//          src: ['assets/css/main.css', 'assets/css/style.css'],
//          dest: 'build/styles.css',
//        },
      },
      watch: {
//          js: {
//            files: ['assets/js/**/*.js'],
//            tasks: ['concat'],         
//          },
          css: {
            files: ['assets/css/**/*.css'],
            tasks: ['concat'],         
          },          
          sass :{
              files: ['assets/sass/**/*.scss'],
              tasks:['sass']
          },
      }, 

    });
    
    
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');         
        
    grunt.registerTask('default',['concat','watch' ,'sass']);
    
        
};