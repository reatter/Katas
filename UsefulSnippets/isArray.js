/*
from Java Script - the good parts
*/

var is_array = function (value) {
	return Object.prototype.toString.apply(value) === '[object Array]';
	//apply(value) binds `value` to `this` & returns true if `this` is an array
}
