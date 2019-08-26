require("dotenv").config();

// Add the code required to import the keys.js file and store it in a variable.

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// Make it so liri.js can take in one of the following commands:
//     my-tweets
//     spotify-this-song
//     movie-this
//     do-what-it-says

// What Each Command Should Do:
//     node liri.js my-tweets
//         This will show your last 20 tweets and when they were created at in your terminal/bash window.
//     node liri.js spotify-this-song '<song name here>'
//         This will show the following information about the song in your terminal/bash window
//             Artist(s)
//             The song's name
//             A preview link of the song from Spotify
//             The album that the song is from
//             If no song is provided then your program will default to "The Sign" by Ace of Base.
