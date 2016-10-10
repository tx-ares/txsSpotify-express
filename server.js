var express = require('express');
var app = express();

app.use(express.static(__dirname + "/app"));
app.listen(process.env.PORT || 3000);
console.log("Server is up and running on port 3000, commander.")