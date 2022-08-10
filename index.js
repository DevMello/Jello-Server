const yas = require('youtube-audio-server')
yas.setKey('AIzaSyBNpjmwdyPybDRJS0YceMc2tcuxgXoF_Bc')
const port = 7331

yas.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}.`)
})

const express = require("express");
const app = express();

app.get("/express/express", (request, response) => {
    response.send("Hi there");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Listen on the port 3000...");
});
