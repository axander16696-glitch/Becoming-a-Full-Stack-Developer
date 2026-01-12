const http = require('http');
const server= http.createServer((request, response)=>{
    response.write("Hello Alex");
    response.end();
});
server.listen(4783, () => {
    console.log(`Server is running on port`);
});
