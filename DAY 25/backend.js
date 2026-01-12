const alex = require('http');
const server = alex.createServer((req, res)=>{
    if (req.method=== 'GET' && req.url === '/home'){
        res.write('<h1>Hello World</h1>');
        res.end();
    }
});
server.listen(5070,()=>console.log("Server is running on port 5000"))