# LIRI-Bot


LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
What Each Command Should Do
spotify-this-song- is created for customer or manager to know how this app works. Spotify play like and the  identified song, you can click a button and it will open it in Spotify, or it will add it to a playlist in Spotify so you can listen to it later.

This will show the following information about the song in your terminal/bash window:
Artist(s)
The song's name
A preview link of the song from Spotify
Songs
Albums
Artists
Playlists
Podcast shows and episodes 
Videos

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

Name of the venue

Venue location

Date of the Event (use moment to format this as "MM/DD/YYYY")

node liri.js spotify-this-song '<song name here>'


If no song is provided then your program will default to "The Sign" by Ace of Base.

You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:

This will output the following information to your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'