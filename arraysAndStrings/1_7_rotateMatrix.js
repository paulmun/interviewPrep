"use strict";

var array = [
[0,1,2,3],
[0,1,2,3],
[0,1,2,3],
[0,1,2,3]
]

// Brute force method. Fairly straightforward but takes O(n) space. O(n) time.

var rotMat = function(arr){
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push([]);
    }

    for (var i = 0; i < arr.length; i++) {
        for (var x = 0; x < arr[i].length; x++) {
            newArr[i][x] = arr[x][i];
        }
    }

    return newArr;
}

console.log(rotMat(array));
