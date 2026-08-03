// get date of first test (idk the exact time)
var countDownDate = new Date("Sep 20, 2026 09:30:00").getTime();

// Repeat liek every second
var x = setInterval(function() {

        // get todays date
        var now = new Date().getTime();

        // find difference
        var distance = countDownDate - now;

        // calculate and use floor for min value
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // show resultes
        document.getElementById("days").innerHTML = days + " D";
        document.getElementById("hms").innerHTML = hours + " H " + " | " + minutes + " m " + " | " + seconds + " s ";

        // If the count down is finished, write some text
        if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "EXPIRED";
        }
}, 1000);
