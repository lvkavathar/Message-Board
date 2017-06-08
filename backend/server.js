var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var messages = [{text:'some text',owner:'john'},{text:'some',owner:'jack'}];
app.use(bodyParser.json());
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type,Accept");
    next();
} );

var api = express.Router();
api.get("/messages",(req,res) => {
    res.json(messages);
});
api.get("/messages/:user",(req,res) => {
    var user = req.params.user;
    var result= messages.filter(message => message.owner == user);
    res.json(result);
});
api.post("/message",(req,res) => {
    messages.push(req.body);
    res.json(req.body);
});
app.use('/api',api);
app.listen(4505);