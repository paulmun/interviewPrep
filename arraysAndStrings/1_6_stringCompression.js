"use strict";

// Implementation is straightforward. Current letter and count are kept track of and pushed into an array that is joined to string at the end. O(n) time and space.

var stringComp = function(string){
    var arr = [string.charAt(0)],
        count = 1;

    for (var i = 1; i < string.length; i++) {
        if (string.charAt(i) !== arr[arr.length-1]) {
            arr.push(count);
            arr.push(string.charAt(i));
            count = 1;
        } else {
            count++;
        }
    }

    arr.push(count);

    return arr.join('');
}

console.log(stringComp('aaaaabbbcdddcccee'));