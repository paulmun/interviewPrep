"use strict";

// initial algorithm. not necessarily brute force. O(n) time dependant on the length of the string. Sacrifice is O(n) space from creating dictionary for O(1) lookup times. 

var isUnique = function(string){
    var track = {};

    for ( var i = 0 ; i < string.length; i++) {
        if (track[string.charAt(i)]) {
            return false;
        } else {
            track[string.charAt(i)] = 1;
        }
    }

    return true;
}

// Basically a brute force approach to the algorithm, but does not require additional space as nothing is cached. O(n^2) runtime, O(1) space.

var isUnique2 = function(string){
    for (var i = 0; i < string.length; i++) {
        for (var x = 1; x+i < string.length; x++) {
            if (string.charAt(i) === string.charAt(x+i)) {
                return false;
            }
        }
    }

    return true;
}

console.log(isUnique('asdfghjkl'));
console.log(isUnique2('asdfghjkla'));