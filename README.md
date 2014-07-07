gulp-pipeconsole
===========

[Gulp](https://github.com/wearefractal/gulp) extension to log any text to the console.

	var pipeconsole = require('gulp-pipeconsole');

Example
-------
	
	gulp.src('./css/*.css')
	//all your gulp tasks
	.pipe(pipeconsole('Any text')) // 'Any text'
	

License
-------

MIT