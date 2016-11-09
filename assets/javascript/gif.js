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

// $('button').on('click', function() {
//     var person = $(this).data('person');
//     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=10";

//     // ajax call is asynchronous. so when the call comes back, do the done function. 
//     $.ajax({
//             url: queryURL,
//             method: 'GET'
//         })
//         .done(function(response) {
//             // data is a key property on the response
//             var results = response.data;

//             for (var i = 0; i < results.length; i++) {
//                 var gifDiv = $('<div class="item">')

//                 var rating = results[i].rating;

//                 var p = $('<p>').text("Rating: " + rating);

//                 var personImage = $('<img>');
//                 personImage.attr('src', results[i].images.fixed_height.url);

//                 gifDiv.append(p)
//                 gifDiv.append(personImage)

//                 $('#gifsAppearHere').prepend(gifDiv);
//             }
//         });






























            });
