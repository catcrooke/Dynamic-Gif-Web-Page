# GifTastic

This assignment required understanding how to use API's to return data, specifically using giphy.com as the basis for this assignment. 

For this assignment, we learned about these GIPHY parameters:
	q
	limit
	rating
* Like many APIs, GIPHY requires developers to use a key to access their API data. Their public API Key is [provided here](https://github.com/Giphy/GiphyAPI#overview). 

It was suggested for this assignment that students have a high-level understanding of how this assignment works before attempting to code it.

Instructions

-Create an object that holds interesting topics. Save it to a variable called topics.
-Make a theme to of the student's own liking, remembering that sameness in topic choice is boring.
-Take the topics in this array and create buttons in the HTML.
-Use a for loop that appends a button for each string in the array.
-When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
-When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
-Under every gif, display its rating (PG, G, so on).
-This data is provided by the GIPHY API.
-Only once the student can get images displaying with button presses should they move on to the next step.
-Add a form to the page takes the value from a user input box and adds it into the topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

