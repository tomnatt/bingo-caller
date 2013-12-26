var numbers = 0;
var num_data = "";
var timer = 500;

$(function() {

    $.getJSON("calls.json", function(data) {

        // pull together the info
        numbers = data["numbers"].length;
        num_data = data;

        // make the calls
        setInterval(function() { makeCall() }, timer);

    });

    function makeCall() {

        // random number (0-limit)
        var c = Math.floor(Math.random() * numbers);
        var call = num_data["numbers"][c];

        // random call
        var number = call["number"];
        var w = Math.floor(Math.random() * call["names"].length);
        var words = call["names"][w];

        console.log(c + ": " + number + ", " + words);

    }

})

