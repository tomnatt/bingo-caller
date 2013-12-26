var num_data = "";
var timer = 5000;

$(function() {

    $.getJSON("calls.json", function(data) {

        // pull together the info
        num_data = data;

        // make the calls
        setInterval(function() { makeCall() }, timer);

    });

    function makeCall() {

        // console.log(num_data["numbers"].length);

        var l = num_data["numbers"].length;

        if (l > 0) {

            // random number (0-limit)
            var c = Math.floor(Math.random() * l);
            var call = num_data["numbers"][c];

            // random call
            var number = call["number"];
            var w = Math.floor(Math.random() * call["names"].length);
            var words = call["names"][w];

            // put it on screen

            var html = "<p class=\"number\">"+number+"</p>"+
                        "<p class=\"call\">"+words+"</p>";
            $("#call").fadeOut(function() {
                $(this).empty().append(html).fadeIn();

            });

            // console.log(c + ": " + number + ", " + words);

            // remove the entry
            num_data["numbers"].splice(c, 1);

        } else {
            // done
        }

    }

})

