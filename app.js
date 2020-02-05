let myTrack1 = new Audio("Drum Kit Starting Files/sounds/crash.mp3");
let myTrack2 = new Audio("Drum Kit Starting Files/sounds/kick-bass.mp3");
let myTrack3 = new Audio("Drum Kit Starting Files/sounds/snare.mp3");
let myTrack4 = new Audio("Drum Kit Starting Files/sounds/tom-1.mp3");
let myTrack5 = new Audio("Drum Kit Starting Files/sounds/tom-2.mp3");
let myTrack6 = new Audio("Drum Kit Starting Files/sounds/tom-3.mp3");
let myTrack7 = new Audio("Drum Kit Starting Files/sounds/tom-4.mp3");

new Vue({
    el: '#app',
    data: {
        lyric: ' ',
        name: ' Habiba',
        title: '',
        msg: 'Welcome to vue.js Drumkit app',
        drumKit: false
    },
    methods: {

        crash() {
            myTrack1.play();
            this.drumKit = true;
            this.title = ' Crash ';

        },

        kickBass() {
            myTrack2.play();
            this.drumKit = true;
            this.title = ' Kick-bass ';
        },
        snare() {
            myTrack3.play();
            this.drumKit = true;
            this.title = ' Snare ';
        },
        tom1() {
            myTrack4.play();
            this.drumKit = true;
            this.title = ' Tom1 ';
        },
        tom2() {
            myTrack5.play();
            this.drumKit = true;
            this.title = ' Tom2 ';
        },
        tom3() {
            myTrack6.play();
            this.drumKit = true;
            this.title = ' Tom3 ';

        },
        tom4() {
            myTrack7.play();
            this.drumKit = true;
            this.title = ' Tom4 ';
        },
        drum: function() {
            this.crash();

        }
    }
})