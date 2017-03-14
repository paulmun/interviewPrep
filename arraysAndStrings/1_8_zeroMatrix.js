"use strict";

var array = [
[0, 1, 2, 3, 4, 5, 6, 7],
[1, 1, 2, 3, 4, 5, 0, 7],
[1, 1, 2, 3, 4, 5, 6, 7],
[1, 1, 2, 3, 0, 5, 6, 7],
[1, 1, 2, 3, 4, 5, 6, 7],
[1, 1, 0, 3, 4, 5, 6, 7],
[1, 1, 2, 3, 4, 5, 6, 0],
[0, 1, 2, 3, 4, 5, 6, 7]
];

var zeroMat = function(matrix){
    var row = [];
    var col = [];

    for (var i = 0; i < matrix.length; i++) {
        for (var x = 0; x < matrix[i].length; x++) {
            if (matrix[i][x] === 0) {
                row.push(i);
                col.push(x);
            }
        } 
    }

    for (var i = 0; i < row.length; i++) {
        for (var x = 0; x < matrix[row[i]].length; x++) {
            matrix[row[i]][x] = 0;
        }
    }

    for (var x = 0; x < col.length; x++) {
        for (var i = 0; i < matrix.length; i++) {
            matrix[i][col[x]] = 0;
        }
    }

    return matrix;
}

console.log (zeroMat(array));