"use strict";

// This implementation essentially utilizes a stack to store both strings in lowerCase form, removing spaces. It starts from the last character of each and proceeds to check each character, if the length of one string is longer than the other, it pops it from that stack only. When the characters are not the same, it tracks it as a change. When the character is the same, it simply pops a character off each stack when the letters are the same. O(n) time and space. This could also be tweaked to be done in place without usage of a stack.

var oneAway = function(string1,string2){
    var s1 = string1.toLowerCase().replace(/\s/g, '').split(''),
        s2 = string2.toLowerCase().replace(/\s/g, '').split(''),
        changes = 0;

    while (s1.length > 0 && s2.length > 0) {
        if (s1[s1.length-1] !== s2[s2.length-1]) {
            if (s1.length === s2.length) {
                s1.pop();
                s2.pop();
            } else {
                s1.length > s2.length ? s1.pop() : s2.pop();
            }
            changes ++;
        } else {
            s1.pop();
            s2.pop();
        }

        if (changes > 1) {
            return false;
        }
    }

    return true;
}

console.log(oneAway('carstoon', 'cartoon'));