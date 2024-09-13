const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to the home page')
        return
    }
    if(req.url === '/about'){
        res.end('Here is ou short history')
        return
    }
    res.end(`
        <h1>OOps!</h1>
        <p>We are unable to find the page you are searching</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000)