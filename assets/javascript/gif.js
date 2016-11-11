// initialize the .js document with this function
$(document).ready(function() {
    // search variable is equal to an object that holds all of the topics that giphy
    // will search for
    var search = {
        subjects: [{
            topic: 'planet Mercury',
        }, {
            topic: 'planet Venus',
        }, {
            topic: 'planet Earth',
        }, {
            topic: 'planet Mars',
        }, {
            topic: 'planet Jupiter',
        }, {
            topic: 'planet Saturn',
        }, {
            topic: 'planet Uranus',
        }, {
            topic: 'planet Neptune',
        }, {
            topic: 'planet Pluto',
        }, {
            topic: 'sun',
        }, ]
    };
    // call the function
    buildTopics();

    // this function buildTopics will populate the button text on the page
    function buildTopics() {
        // create a variable equal to an empty string which will hold
        // the name of the search topic
        var topicsHTML = '';
        // a for loop will continue for the length of the subjects object 
        for (var i = 0; i < search.subjects.length; i++) {
            // create a variable button that is equal to a button element in order to create dynamic
            // buttons in the page
            var button = $('<button>');
            // to that button, add text that will be taken from the object subjects at each index
            button.text(search.subjects[i].topic);
            // add the attribute data-topic to each button so that each button's topic can be queried 
            // using ajax by linking them together
            button.attr('data-topic', search.subjects[i].topic);
            // append the button that is created to the div with id = searchTopic so that it appears on the page
            $('#searchTopic').append(button);
        }
        // append the DOM to display topic name as button
        // $('#searchTopic').html(topicsHTML);
    }
    // create an onclick event 
    $('button').on('click', function() {
        var topic = $(this).data('topic');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                console.log(response);
                var results = response.data;
                for (var i = 0; i < results.length; i++) {
                    console.log(results[i].rating, results[i].source_post_url);
                }

            });
    });

    // var topicsDiv = $('<div>');

    // var p = $('<p>');

    // var topicsImage = $('<img>');
    // topicsImage.attr('src', results[i].images.fixed_height.url);
    // var rating = results[i].rating;


    // p = p.html(rating);

    // topicsDiv.append(p);
    // topicsDiv.append(topicsImage);

    // $('#gifsHere').prepend(topicsDiv);

});


// var url = results[i].fixed_height.url;


//             //--------------------------------
//         }

//     });
// });
