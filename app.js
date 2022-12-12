const express = require("express");
const app = express();
const port = 3001;

app.use(express.static("public"));

//home route
app.get('/home', (request, response) => {
    response.sendFile(`${__dirname}/views/home.html`);
})

//about route
app.get('/about', (request, response) => {
    response.sendFile(`${__dirname}/views/about.html`);
})

// works route
app.get('/works', (request, response) => {
    response.sendFile(`${__dirname}/views/works.html`);
})

//photo-gallery route
app.get('/photo-gallery', (request, response) => {
    response.sendFile(`${__dirname}/views/photo-gallery.html`);
})


//server started
app.listen(port, () => console.log("server is connected"));

// console.log("__dirname", __dirname);