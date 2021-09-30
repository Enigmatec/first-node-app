const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/' ) {
        res.end(`<p>This is home page</p>`)
    }
    else if(req.url === '/about') {
        res.end(`<p>This is about page</p>`)
    }
    else {
        res.end(`<h1>Oops, This page is not found</h1>
        <a href="/">Go back Home</a>
        `)
    }
})

server.listen(5000);