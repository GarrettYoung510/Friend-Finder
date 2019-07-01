// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const http = require("http");
const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();
// put process.env.PORT || port number or it will not work in heroku
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Friend (DATA)
// =============================================================
const friends = [{
        name: "Mark",
        photo: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fs3.crackedcdn.com%2Fphpimages%2Farticle%2F2%2F4%2F6%2F450246_v1.jpg&f=1",
        scores: ["4", "3", "4", "3", "5", "1", "5", "4", "3", "4", "5"]
    },
    {
        routeName: "Chris",
        name: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fknownpeople.net%2Fwp-content%2Fuploads%2Fc%2Fchris-pratt-wallpaper.jpg&f=1",
        scores: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
    },
    {
        routeName: "Rihanna",
        name: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FdNcba3He2nY%2Fmaxresdefault.jpg&f=1",
        scores: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
    },
    {
        routeName: "Donald",
        name: "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1687,w_3000,x_0,y_256/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1554532592/GettyImages-599724318_tztq2y",
        scores: ["1", "2", "3", "4", "5", "4", "3", "2", "1", "2", "3"]
    },
    {
        routeName: "Drake",
        name: "https://amp.businessinsider.com/images/56e34aad52bcd022008b5fa5-750-563.jpg",
        scores: ["5", "4", "3", "2", "1", "2", "3", "4", "5", "4", "3"]
    },
    {
        routeName: "Justin",
        name: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1ejVX08VKqZz9M5VyNKSIenPupcOukN8vnFDrMn9aXsS--mj",
        scores: ["4", "3", "2", "1", "2", "3", "4", "3", "2", "1", "2"]
    },
    {
        routeName: "Kim",
        name: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/celebs-with-chronic-illnesses-1558558535.png?crop=0.487xw:0.974xh;0.513xw,0.0256xh&resize=640:*",
        scores: ["3", "2", "1", "2", "3", "4", "5", "4", "3", "2", "1"]
    },
    {
        routeName: "Selena",
        name: "https://ca.hellomagazine.com/images/stories/0/2018/01/09/000/535/567/featured_5_3.jpg",
        scores: ["2", "1", "2", "3", "4", "5", "4", "3", "2", "1", "1"]
    },

];


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    // / is the home
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});



// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});