// initialize the .js document with this function
$(document).ready(function() {
    // search variable is equal to an object that holds all of the topics that giphy
    // will search for
    var search = {
        subjects: [{
            topic: 'building',
        }, {
            topic: 'nature',
        }, {
            topic: 'art',
        }, {
            topic: 'architecture',
        }, {
            topic: 'design',
        }, {
            topic: 'scifi',
        }, {
            topic: 'design',
        }, {
            topic: 'futurism',
        }, {
            topic: 'universe',
        }, {
            topic: 'hologram',
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
            // create a variable that will access the search variable's subject objects at each topic index
            var buttonsHTML = search.subjects[i];
            // this variable accesses each topic of the search object
            var buttonString = buttonsHTML.topic;
            // create a string to display the contents of each button by accessing the index
            // of the topic in the search object
            topicsHTML = topicsHTML + '<button>' + buttonString + '</button>';
        }
        // append the DOM to display topic name as button
        $('#searchTopic').html(topicsHTML);
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
});




//              step 3:
//                 * uncomment the for loop above and the closing curly bracket below
//                 * make a div and reference it in a variable named animalDiv
//                 * make a paragraph tag and put it in a variable named p
//                     * set the text of the paragraph to the rating of the image in results[i]
//                 * make an image and reference it in a variable named animalImage
//                 * set the image's src to results[i]'s fixed_height.url

//                 * append the p variable to the animalDiv variable
//                 * append the animalImage variable to the animalDiv variable

//                 * prepend the animalDiv variable to the element with an id of gifsAppearHere



//             //------------put step 3 in between these dashes--------------------
//             var topicsDiv = $('<div>');

//             var p = $('<p>');

//             var topicsImage = $('<img>');
//             topicsImage.attr('src', results[i].images.fixed_height.url);

//             // var url = results[i].fixed_height.url;

//             var rating = results[i].rating;


//             p = p.html(rating);

//             topicsDiv.append(p);
//             topicsDiv.append(topicsImage);

//             $('#gifsHere').prepend(topicsDiv);
//             //--------------------------------
//         }

//     });
// });
