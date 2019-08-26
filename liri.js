require("dotenv").config();
// Add the code required to import the keys.js file and store it in a variable.
// Import the Twitter NPM package.
let Twitter = require("twitter");
// import the node-spotify-api NPM package.
let Spotify = require("node-spotify-api");
// Import the API Keys
let keys = require("./keys")
// import the request npm package.
let request = require("request");
// import the FS package so I can read and write.
let fs = require("fs");



// Add the code required to import the keys.js file and store it in a variable.

let spotify = new Spotify(keys.spotify);
let client = new Twitter(keys.twitter);

// ______________________________________
// FUNCTIONS
// ============================
// twitter function
//_______________________________________

let callTwitterAPI = function(){

};

// ===================================
// Spotify function

let callSpotifyAPI = function(){

}
// ================================
// OMBD function
//_________________________________

let callOmbdAPI = function(){

}
// ============================
// user input function
// tell the program what you want it to do.

let userIput = function(caseData, callData){

}

// =============================
// Do what it says function!

let doWhatItSays = function(){
    
}

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
