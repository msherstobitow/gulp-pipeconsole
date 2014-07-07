'use strict';

var map = require('map-stream');
var gutil = require('gulp-util');

module.exports = function(log){
	return map(function(file,callback) {
		gutil.log("Size", gutil.colors.inverse(log));
		callback(null,file)
	});
};
