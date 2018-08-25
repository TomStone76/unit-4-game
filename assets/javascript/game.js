$(document).ready(function () {

    var targetNumber = Math.floor(Math.random() * (121 - 19)) + 19;
    $("#number-to-guess").text(targetNumber);
    var counter = 0;
    var firstCrystalValue = Math.floor(Math.random() * (13 - 1)) + 1;
    var secondCrystalValue = Math.floor(Math.random() * (13 - 1)) + 1;
    var thirdCrystalValue = Math.floor(Math.random() * (13 - 1)) + 1;
    var fourthCrystalValue = Math.floor(Math.random() * (13 - 1)) + 1;
    var numbers = [firstCrystalValue, secondCrystalValue, thirdCrystalValue, fourthCrystalValue];
    var wins = 0;
    var losses = 0;
    var gameOver = false;

    for (var i = 0; i < numbers.length; i++) {
        var crystalPhoto = $("<img>");
        crystalPhoto.addClass("crystal-image");
        crystalPhoto.attr("src", "assets/images/crystal.jpg");
        crystalPhoto.attr("data-crystalvalue", numbers[i]);
        $("#crystals").append(crystalPhoto);
    }

    $(document).on("click", ".crystal-image", function () {
        var crysVal = ($(this).attr("data-crystalvalue"));
        crysVal = parseInt(crysVal);
        counter += crysVal;
        $("#ts").text(counter);

        if (counter === targetNumber) {
            wins++;
            $("#w").text("Wins: " + wins);
            counter = 0;
            $("#ts").text(counter);
            gameOver = true;
        }
        else if (counter > targetNumber) {
            losses++;
            $("#l").text("Losses: " + losses);
            counter = 0;
            $("#ts").text(counter);
            gameOver = true;
        }

        if (gameOver) {
            targetNumber = Math.floor(Math.random() * (121 - 19)) + 19;
            $("#number-to-guess").html(targetNumber);
            firstCrystalValue = Math.floor(Math.random() * (13 - 1)) + 1;
            secondCrystalValue = Math.floor(Math.random() * (13 - 1)) + 1;
            thirdCrystalValue = Math.floor(Math.random() * (13 - 1)) + 1;
            fourthCrystalValue = Math.floor(Math.random() * (13 - 1)) + 1;
            numbers = [firstCrystalValue, secondCrystalValue, thirdCrystalValue, fourthCrystalValue];
            $("#crystals").html("");
            for (var i = 0; i < numbers.length; i++) {
                var crystalPhoto = $("<img>");
                crystalPhoto.addClass("crystal-image");
                crystalPhoto.attr("src", "assets/images/crystal.jpg");
                crystalPhoto.attr("data-crystalvalue", numbers[i]);
                $("#crystals").append(crystalPhoto);
            }
            gameOver = false;
        }

    });

});