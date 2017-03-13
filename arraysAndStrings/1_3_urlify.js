"use strict";

// Using JavaScripts built in methods for string and array manipulation this becomes extremely simple.

var urlify = function(string){
    var arr = string.split(' ');
    return arr.join('%20');
}

console.log(urlify('My name is John Doe'));

// One line implementation

var urlify2 = function(string){
    return string.replace(/\s/g, '%20');
}

console.log(urlify2('My name is John Doe'));