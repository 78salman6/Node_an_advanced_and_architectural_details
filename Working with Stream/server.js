const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    
    // in this we are buffering in memory
    // fs.readFile('./big.file', (err, data) => {
    //     if(err) throw err;

    //     res.end(data);
    // });

    const src = fs.createReadStream('./big.file');
    src.pipe(res);
});

server.listen(4002);