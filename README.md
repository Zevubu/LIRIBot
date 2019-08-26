# LIRIBot
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

You will need to supply your own .env file with your own keys for this to work.

liri.js  commands:
    my-tweets
    spotify-this-song
    movie-this
    do-what-it-says

What Each Command Should Do:

    node liri.js my-tweets
        This will show your last 20 tweets and when they were created at in your terminal/bash window.

    node liri.js spotify-this-song `<song name here>`
        This will show the following information about the song in your terminal/bash window
            Artist(s)
            The song's name
            A preview link of the song from Spotify
            The album that the song is from
            If no song is provided then your program will default to "The Sign" by Ace of Base.

    node liri.js movie-this "movie name"

    node liri.js do-what-it-says read
    or
    node liri.js do-what-it-says write movie-this "movie name"



            
You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

Still to do
lastly must connect to ombd
You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.
Add To Your Portfolio
After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.
