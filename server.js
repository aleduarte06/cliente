/**
 * Created by aleduarte06 on 5/9/15.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendfile('index.html');
});
app.use(express.static('./'));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});