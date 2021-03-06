/**
 * http handler
 * 
 * opens the http web handler
 */

exports.start = function(){
    // get requirements
    global.c4.load([
        'core/http'
    ]);
    var settings = global.c4.settings.adapters.http;
    global.c4.core.http.createServer(function(req, res) {
        // here we might put our url handling
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Castle 4 - ' + req.url);
        //console.log('user hit: http://' + settings.host + ':' + settings.port + req.url);
    }).listen(settings.port, settings.host);
    console.log('Http server active: http://' + settings.host + ':' + settings.port);
};