"use strict";

class JukeBox {
    constructor () {
        this.queue = [];
        this.tracks = [];
    }

    addTrack (track) {
        this.tracks.push(track);
    }

    addToQueue (trackno) {
        queue.push(this.tracks[trackno]);
    }

    skip () {
        if (this.tracks.length >= 1) {
            return this.queue.shift() + ' has been skipped';
        } else {
            return 'There are no tracks to skip'
        }
    }

    play () {
        if (this.tracks.length >= 1) {
            return 'Now playing ' + this.queue.shift();    
        } else {
            return 'Please add more tracks to the queue';
        }
        
    }

    list () {
        for (var i = 0; i < tracks.length; i++) {
            console.log('Track #' + i + tracks[i]);
        }
    }
}

class Track {
    constructor (artist, title) {
        this.artist = artist;
        this.title = title;
    }
}

let track = new Track ('TDF', 'Bellevue');

console.log(track);
console.log(track instanceof Track);