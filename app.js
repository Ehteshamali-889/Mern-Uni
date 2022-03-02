var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q=url.parse('http://localhost:8080/default.htm?filename=index.html',true,true);
    var data=q.query;
    // console.log(q.query);
    console.log(data.filename);
    fs.readFile(data.filename,function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
    
}).listen(8080);