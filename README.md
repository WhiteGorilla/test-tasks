# test-tasks

# part-1

Task 1

Write a function that find the most frequent character in a string (case insensitive)

Task 2

Create simple HTML form with text field and buttons “Set” and “Clear”. On submit form set item to local storage with key “num23” and value from the text field. On click “Clear” button clean up text field and delete item “num23” from local storage. On page load get item “num23” from local storage, create paragraph element, set according value into paragraph, and insert it before form. Paint paragraph in red if item value is odd and in green if item value is even.

Text field should accept only numbers.
Form should not be submitted if the field value is empty.
Disable “Set” button if the field value is empty.

Task 3

Write script that will parse query params from url and transform it into object with according key and value.

URL example:

http://localhost:63342/test/index.html?em=world&ew=book

Object example:

{
	“em” : ”world”,
“ew” : ”book”
}

Task 4

Write script that displays a list of products from server response data.

Request URL: http://54.39.188.42/
Request method: GET
Server returns encoded JSON string in base64


# part-2

Create web application for cinema (Vue.js OR React.js OR Javascript).
Application should provides next functionality for user: get list of all movies, see all sessions at the cinema, get movie info, find movie by name or/and genres, book ticket on certain movie's session.

API

Get all movies :

Send GET 
https://cinema-api-test.herokuapp.com/movies

Get movie by id :

Send GET 
https://cinema-api-test.herokuapp.com/movies?movie_id={id}

Get all movies sessions :

Send GET 
https://cinema-api-test.herokuapp.com/movieShows

Get sessions by movie id :

Send GET 
https://cinema-api-test.herokuapp.com/movieShows?movie_id={id}


Find movie by name or/and genres:

Send GET 
https://cinema-api-test.herokuapp.com/movies/find?name={name}&genres={genres}

Movie genres :
ACTION: 0
ADVENTURES: 1
COMEDY: 2
DRAMA: 3
HORROR: 4
WESTERNS: 5





Book ticket:

Send POST
https://cinema-api-test.herokuapp.com/bookingPlace

params : {
movieShow_id : string,
row_id : number,
place_position : number,
isFree : boolean
}

return value : {reservation code}
