const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('Welcome to homepage');
        res.end();
    }
    if(req.url == '/about'){
        res.end('Welcome to about page');
    }
    res.end(`<h1>Oops! That doesn't exist!<h1><p>It appears that page doesn't exist.<p><br><a href="/"back home</a>`);
});

server.listen(5000);