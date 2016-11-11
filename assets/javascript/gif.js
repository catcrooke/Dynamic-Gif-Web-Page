// initialize the .js document with this function
$(document).ready(function() {
    // topic variable is equal to an object that holds all of the topics that giphy
    // will search for
    var topics = {
        subjects: [{
            item: 'planet Mercury',
        }, {
            item: 'planet Venus',
        }, {
            item: 'planet Earth',
        }, {
            item: 'planet Mars',
        }, {
            item: 'planet Jupiter',
        }, {
            item: 'planet Saturn',
        }, {
            item: 'planet Uranus',
        }, {
            item: 'planet Neptune',
        }, {
            item: 'planet Pluto',
        }, {
            item: 'sun',
        }, ]
    };
    // call the function
    buildTopics();

    // this function buildTopics will populate the button text on the page
    function buildTopics() {
        // create a variable equal to an empty string which will hold
        // the name of the topic subject
        var topicsHTML = '';
        // a for loop will continue for the length of the subjects object 
        for (var i = 0; i < topics.subjects.length; i++) {
            // create a variable button that is equal to a button element in order to create dynamic
            // buttons in the page
            var button = $('<button>');
            // to that button, add text that will be taken from the object subjects at each index
            button.text(topics.subjects[i].item);
            // add the attribute data-topic to each button so that each button's topic can be queried 
            // using ajax by linking them together
            button.attr('data-topic', topics.subjects[i].item);
            // append the button that is created to the div with id = searchTopic so that it appears on the page
            $('#searchTopic').append(button);
        }
    }
    // create an onclick event to load gifs to the page for each button that is clicked
    $('button').on('click', function() {
        // for each item in the object, add the data 
        var item = $(this).data('item');
        // use queryURL to search giphy for each item in the object 
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + item + "&api_key=dc6zaTOxFJmzC&limit=10";
        // specify to ajax to use the queryURL variable and the GET method to obtain the giphy images
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            // .done function will iterate through the object's items at each index to display the information
            // rating, fixed, and still images
            .done(function(response) {
                console.log(response);
                // the variable response holds the data to be collected and displayed from GIPHY API
                var results = response.data;
                // the for loop that will iterate through the topics object for each item [i]
                for (var i = 0; i < results.length; i++) {
                    // take a look in the console for the values to be placed on the page to see if they are being accessed from GIPHY API
                    console.log(results[i].rating, results[i].images.fixed_width_still, results[i].images.fixed_height);
                    // use    
                    var topicsDiv = $('<div>');

                    var p = $('<p>');
                    var topicsImage = $('<img>');
                    topicsImage.attr('src', results[i].images.fixed_width_still, results[i].images.fixed_height);

                    var rating = results[i].rating;
                    p = p.html(rating);

                    topicsDiv.append(p);
                    topicsDiv.append(topicsImage);

                    $('#gifsHere').prepend(topicsDiv);
                }
            });

    });



});
