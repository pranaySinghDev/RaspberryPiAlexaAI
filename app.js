var http = require('http');
var url = require('url');
var gpio = require('rpi-gpio');

function onRequest(request,response) {
    console.log('request pi state '+request.url);
    var queryString = request.url;
    // breaking query string to get the state requested by user
    var state=queryString.substring(1).toString().toUpperCase();
    if(state=="ON" || state=="OFF")
    {
        //code to write to pin connected to a relay
        console.log(state);
        if(state=="ON"){
            gpio.setup(7, gpio.DIR_OUT, write);

            function write() {
                gpio.write(7, true, function(err) {
                    if (err) throw err;
                    console.log('Pin 7 ON');
                });
            }
        }else if(state=="OFF")
        {
            gpio.setup(7, gpio.DIR_OUT, write);

            function write() {
                gpio.write(7, false, function(err) {
                    if (err) throw err;
                    console.log('Pin 7 OFF');
                });
            }
        }
    }
    else{
        console.log('Invalid request')
    }




    response.writeHead(200,{"context-type":"text/html"});
    response.write("Home Page");
    response.end();
}
http.createServer(onRequest).listen(2022);
console.log('Server is up and running');
