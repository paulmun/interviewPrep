"use strict";

var stringRot = function(s1,s2){

    if (s1.length !== s2.length) {
        return false;
    } else {
        for (var i = 0; i < s2.length; i++) {
            if (s2.charAt(i) === s1.charAt(0)) {
                for (var x = 1; x < s1.length; x++) {
                    if (s1.charAt(x) !== s2.charAt((x+i)%s2.length)) {
                        break;
                    }

                    if (x === s1.length-1) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
}

console.log(stringRot('aaaaaaab','aaabaaaa'));