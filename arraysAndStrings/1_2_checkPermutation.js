"use strict";

// This implementation caches the letters that make up the first string and attempts to subtract the records while iterating through the second string. If the record hits a negative number or the letter doesn't exist, false is returned. Things to consider would be asking for case sensitivity and whitespace. 

var perm = function(string1,string2){

    if (string1.length !== string2.length) {
        return false;
    } else {
        var charSet = {};
        var length = string1.length;

        for (var i = 0; i < length; i++) {
            var letter = string1.charAt(i);

            if (charSet[letter]) {
                charSet[letter]++;
            } else {
                charSet[letter] = 1;
            }
        }

        for (var x = 0; x < length; x++) {
            var letter2 = string2.charAt(x);

            if (!charSet[letter2] || --charSet[letter2] < 0) {
                return false;
            }

            console.log(charSet)
        }

        return true;
    }
}

console.log(perm('doggo','goddo'));

// Additional implementation would be by sorting both strings to do a direct comparison. This may be the preferred implmentation for cleaner code, but may not be as optimal by time or space.