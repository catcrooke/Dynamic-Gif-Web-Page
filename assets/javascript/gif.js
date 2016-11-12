// initialize the .js document with this function
$(document).ready(function() {
    // topic variable is equal to an object that holds all of the topics that giphy
    // will search for
    var topics = {
        subjects: [{
            item: 'Mercury',
        }, {
            item: 'Venus',
        }, {
            item: 'Earth',
        }, {
            item: 'Mars',
        }, {
            item: 'Jupiter',
        }, {
            item: 'Saturn',
        }, {
            item: 'Uranus',
        }, {
            item: 'Neptune',
        }, {
            item: 'Pluto',
        }, {
            item: 'Sun',
        }]
    };
    // call the function
    buildTopics();

    // this function buildTopics will populate the button text on the page
    function buildTopics() {
        // create a variable equal to an empty string which will hold
        $('#searchTopic').empty();

        // a for loop will continue for the length of the subjects object 
        for (var i = 0; i < topics.subjects.length; i++) {
            // create a variable button that is equal to a button element in order to create dynamic
            // buttons in the page
            var button = $('<button>').addClass('topicsButtons');
            // to that button, add text that will be taken from the object subjects at each index
            button.text(topics.subjects[i].item);
            // add the attribute data-topic to each button so that each button's topic can be queried 
            // using ajax by linking them together
            button.attr('data-topic', topics.subjects[i].item);
            // append the button that is created to the div with id = searchTopic so that it appears on the page
            $('#searchTopic').append(button);
        }
    }

    $('.add-button-form').on("click", function() {
        var inputButton = $('#new-topic').val().trim();
        if (inputButton === "") {
            return false;
        } else {
            $('#new-topic').val("");
            topics.subjects.push({ item: inputButton });
            buildTopics();
            return false;
        }

    });

    // create an onclick event to load gifs to the page for each button that is clicked
    $(document).on('click', '.topicsButtons', function() {
        // for each item in the object, add the data 
        var item = $(this).data('topic');
        // use queryURL to search giphy for each item in the object 
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + item + "&api_key=dc6zaTOxFJmzC&limit=10";
        // specify to ajax to use the queryURL variable and the GET method to obtain the giphy images
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            // .done function will iterate through the object's items at each index to display the information
            // rating, fixed, and still images
            .done(function(response) {

                // the variable response holds the data to be collected and displayed from GIPHY API
                var results = response.data;
                $('.images-row').empty();
                // the for loop that will iterate through the topics object for each item [i]
                for (var i = 0; i < results.length; i++) {


                    var topicsDiv = $('<div>').addClass('col-md-4');

                    var p = $('<p>');

                    var topicsImage = $('<img>').addClass('gif');
                    topicsImage.attr('src', results[i].images.fixed_height_still.url);
                    topicsImage.attr('data-animate', results[i].images.fixed_height.url);
                    topicsImage.attr('data-still', results[i].images.fixed_height_still.url);
                    topicsImage.attr('data-state', 'still');

                    var rating = results[i].rating;

                    p = p.html("rating: " + rating);

                    topicsDiv.append(topicsImage);
                    topicsDiv.append(p);

                    $('#gifsHere').append(topicsDiv);
                }
            });

    });

    $(document).on('click', '.gif', function() {

        var state = $(this).attr('data-state');

        if (state == 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }

    });


});
