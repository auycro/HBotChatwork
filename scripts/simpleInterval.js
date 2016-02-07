var http = require("http");
setInterval(function() {
    http.get("http://secret-beach-69643.herokuapp.com");
}, 300000); // every 5 minutes (300000)
