require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require('moment');
var keys = require("./key.js");
var spotify = new Spotify(keys.spotify);

//run this in console to test
//node liri.js concert-this
var command = process.argv[2];
var details = process.argv[3];

liri();

function liri() {
    switch (command) {
        case "concert-this":
            //logic for concert-this command
            var url = "https://rest.bandsintown.com/artists/" + details + "/events?app_id=codingbootcamp";

            axios.get(url)
                .then(function (response) {
                    response.data.forEach(event => {
                        var venueName = event.venue.name;
                        var city = event.venue.city;
                        var state = event.venue.region;
                        var date = moment(event.datetime).format("MM/DD/YYYY")
                        console.log("Venue Name: " + venueName);
                        console.log("Location: " + city + ", " + state);
                        console.log("Date: " + date);
                    });

                })
                .catch(function (error) {
                    console.log(error);
                });
            break;
        case "spotify-this-song":
        //check if user has input; else sample value goes here
            spotify.search({ type: 'track', query: details, limit: 1 }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }
                var artist = data.tracks.items[0].album.artists[0].name;
                var album = data.tracks.items[0].album.name;
                var previewUrl = data.tracks.items[0].preview_url;
                console.log("Artist: "+ artist);
                console.log("Song: " + details);
                console.log("Album: " + album);
                console.log("Preview: " + previewUrl);
            });
            break;
        case "movie-this":
            var url = "http://www.omdbapi.com/?t="+ details +"&apikey=trilogy";
            axios.get(url)
            .then(function(response) {
                var title = response.data.Title;
                console.log("Title: " + title);
                var year = response.data.Year;
                console.log("Year: " + year );
                // var IMDB = response.data.IMDB;
                console.log("IMDB: " + IMDB);
                var rotten = response.data.Rotten;
                console.log("rotten:" + Rotten);
                var country = response.data.country;
                console.log("country: " + Country);
                var language = response.data.Language;
                console.log("language: " + language);
                var plot = response.data.Plot;
                console.log("plot: " + plot);
                var actors = response.data.Actors;
                console.log("actors: "+ Actors);
                
                
                // * Language of the movie.
                // * Plot of the movie.
                //* Actors in the movie.
                
                //console.log(response.data);
                //console.log("The movie's rating is: " + response.data.imdbRating);
            });
            break;
        case "do-what-it-says":
            break;
        default:
            console.log("That is not a valid command")
    }
}