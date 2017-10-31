var lyrics = {
    1: "Without love in the dream it will never come true",
    2: "If you get confused just listen to the music play",
    3: "Every silver lining’s got a touch of grey",
    4: "Watch each card you play and play it slow",
    5: "If you plant ice you’re gonna harvest wind",
    6: "There is a road, no simple highway, between the dawn and the dark of night",
    7: "Love will see you through",
    8: "You just gotta poke around",
    9: "Nothing left to do but smile, smile, smile",
    10: "Sometimes we live no particular way but our own",
    11: "Once in a while you get shown the light, in the strangest of places if you look at it right",
    12: "Inspiration, move me brightly",
    13: "Just keep truckin’ on",
    14: "The grass ain’t greener, the wine ain’t sweeter, either side of the hill",
    15: "Hang it up and see what tomorrow brings"
};
$(document).ready(function() {

    function getRandomLyric() {
        var random = Math.floor(Math.random() * 14 + 1);
        writeLyric(lyrics[random]);
    }

    function writeLyric(randomLyric) {
        $("#lyricText").text('"' + randomLyric + '"');
    }

    $("#lyricButton").click(function() {
        getRandomLyric();
    });


    getRandomLyric();
});
