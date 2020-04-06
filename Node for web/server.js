const server = require('http').createServer();

server.on('request', (req, res) => {
    switch(req.url) {
    case 'home':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello world\n');
        break;
    case '/':
    }
    console.log(req.url);
    
});

server.listen(4001);

const server = require('http').createServer();

server.on('request', (req, res) => {
    switch(req.url) {
    case 'home':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello world\n');
        break;
    case '/':
    }
    console.log(req.url);
    
});

server.listen(4001);