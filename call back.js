// script.js

function countdown(count, callback) {
    if (count >= 1) {
        console.log(count);
        setTimeout(function () {
            countdown(count - 1, callback);
        }, 1000);
    } else {
        callback();
    }
}

countdown(10, function () {
    console.log("Happy Independence Day");
});


<!DOCTYPE html>
<html>
<head>
    <title>Countdown</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
