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
    let params = {
        screen_name: "bot_zee"
    };
    client.get("statuses/user_timeline", params, function(
    error,
    tweets,
    response
    ){
        // console.log(tweets)
        if(!error){
           for(let i = 0; i < tweets.length; i++){
                console.log(" ")
                console.log(tweets[i].created_at);
                console.log(tweets[i].text)
            }
        }
        else{
            
        }

        

    })


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

// =============================
// Do what it says function!

let doWhatItSays = function(callData, specialData, finalData){
    if(callData === "read"){
        console.log("read")
        fs.readFile('random.txt','utf8', function(error, data){
            console.log(data);
            let dataArr = data.split(',');
            if(error){
                console.log(error)
            }
            else if (dataArr.length === 2){
                userInput(dataArr[0], dataArr[1])
            }
            else if (dataArr.length === 1){
                userInput(dataArr[0])
            }
        })
    }
    else if (callData === "write" && (specialData === "my-tweets" || specialData === "spotify-this-song" || specialData === "movie-this") ){
        console.log(`write ${finalData}`)
        fs.writeFile("random.txt",`${specialData},${finalData}`, function(error,data){
            if(error){
                return console.log(error);
            }

            console.log(`Your wrote ${specialData},${finalData} to random.txt`)
            userInput("do-what-it-says", "read");
        })

    }
    else if(callData === "write"){
        
        console.log(`After "write" you must use one of the fallowing, my-tweets, spotify-this-song, movie-this `)

    }
    else{
        console.log(`${callData} is not a recognized call. It must be read or write`)
    }

    
}

// ============================
// user input function
// tell the program what you want it to do.

let userInput = function(caseData, callData, specialData, finalData){

    switch(caseData){
        case "my-tweets":
            callTwitterAPI();
        break;

        case "spotify-this-song":
            callSpotifyAPI(callData);
        break;

        case "movie-this":
            callOmbdAPI(callData)
        break;

        case "do-what-it-says":
            doWhatItSays(callData, specialData, finalData);
        break;
        

    
    }

}

// Finaly a function that pull my process.argv data

let arguments = function(argOne, argTwo, argThree, argFour){
    userInput(argOne, argTwo, argThree, argFour)
}

arguments(process.argv[2], process.argv[3],process.argv[4],process.argv[5] )



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
