"use strict";

// This implementation caches letters in an object and keeps track of occurences before checking for odd number letters. If there are more than one odd number occurences, the function returns false. O(n) time and O(1) space.

var permPal = function(string){
    var string = string.toLowerCase().replace(/\s/g, ''),
        charSet = {},
        unique = 0;

    for (var i = 0; i < string.length; i++) {
        var letter = string.charAt(i);

        if (charSet[letter]) {
            charSet[letter]++;
        } else {
            charSet[letter] = 1;
        }
    }

    for (var char in charSet) {
        if (charSet[char]%2 === 1) {
            unique++;
        }

        if (unique > 1) {
            return false;
        }
    }

    return true;
}

console.log(permPal('doggodeo'));
console.log(permPal('doggo'));

// Time cannot necessarily improved with implementation of this algorithm. That being said, we can tweak certain aspects to be cleaner.
// 1. We could implement a boolean structure instead of counts, which would cut out computational time at the end, simply verifying boolean values in the object. Utilizing a hash table would essentially be the same thing in this use case.