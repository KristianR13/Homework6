$(document).ready(function() {

    function weather() {
        var URL= 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={a99ab6252249c5a8fcf20ca902868f2e}'

        $.getJSON(URL, function(data)
        console.log(data);
        updateDOM(data);

        });

    }

    weather();

    function updateDOM(data) {

        var city = data.name;

        $('#city').html(city);
    }

});