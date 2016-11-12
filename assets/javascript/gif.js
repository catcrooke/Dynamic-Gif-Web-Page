// initialize the .js document with this function
$(document).ready(function() {
    // topic variable is an object called subjects which has properties named item, each containing a string of text 
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
    // call the function buildTopics to populate the buttons generated in the function below
    buildTopics();

    // this function buildTopics will populate the button text on the page
    function buildTopics() {

        // Removes any text within the searchTopic div so that the text from the next item in the 
        // array can be rendered
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

    // create an on-click event to add buttons to the page that are typed into the search input field
    $('.add-button-form').on("click", function() {
        // store in the variable inputButton the contents of the div with ID new-topic, which in this
        // case is the value it contains once the side spaces have been trimmed 
        var inputButton = $('#new-topic').val().trim();
        // if inputButton contains an empty string
        if (inputButton === "") {
            // then don't make a button by returning false
            return false;
            // otherwise
        } else {
            // take the value of the string stored in the div with ID new-topic 
            $('#new-topic').val("");
            // and push it to the subjects object (stored by the subjects variable) as a new item with the value of that string
            topics.subjects.push({ item: inputButton });
            // call the buildTopics function to generate that new button on the page
            buildTopics();
            // 
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
                // when a new button is clicked, empty all of the images out of the div with 
                // images-row class so that the new images associated with that new button can be displayed
                $('.images-row').empty();
                // the for loop that will iterate through the topics object for each item [i]
                for (var i = 0; i < results.length; i++) {

                    // set the variable topicsDiv equal to a div element with two classes: one sets
                    // the bootstrap column width for that Div and the other class is used in CSS to 
                    // set the height of the images
                    var topicsDiv = $('<div>').addClass('col-md-4 gif-container');
                    // create a variable p to store a p element
                    var p = $('<p>');
                    // create a variable topicsImage that adds the gif class to image tags
                    var topicsImage = $('<img>').addClass('gif');
                    // set the source attribute of topicsImage to be the still gif image that should
                    // be the image to first populate the page
                    topicsImage.attr('src', results[i].images.fixed_height_still.url);
                    // set the data-animate attribute of topicsImage to be equal to the url it needs to point to
                    // within the results object in GIPHY for the animated image
                    topicsImage.attr('data-animate', results[i].images.fixed_height.url);
                    // set the topicsImage attribute to be equal to the url in the results object for the still image
                    topicsImage.attr('data-still', results[i].images.fixed_height_still.url);
                    // correlate the data-state with still state from the onclick function that follows
                    topicsImage.attr('data-state', 'still');
                    // create a variable "rating" that holds all of the ratings for each item in the subjects object
                    var rating = results[i].rating;
                    // add the ratings to the html of the p element along with a text string
                    p = p.html("rating: " + rating);
                    // append topicsDiv to topicsImage 
                    topicsDiv.append(topicsImage);
                    // append topicsDiv to the p element
                    topicsDiv.append(p);
                    // topicsDiv is appended to the div with ID gifsHere because this is where it will be displayed on the page
                    $('#gifsHere').append(topicsDiv);
                }
            });

    });
    // create an on-click event to toggle between still and animated gifs
    $(document).on('click', '.gif', function() {
        // create a variable named state to store the attribute data-state
        var state = $(this).attr('data-state');
        // if the data-state of "this" gif is still, the on click, change it to be animated by using the animated source
        if (state == 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
            // otherwise if "this" gif is animated, then on click, change the source of the gif to the still
            // gif
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }

    });


});
