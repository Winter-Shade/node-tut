const fs = require('fs');
const http = require('http');
const url = require('url');
// Blocking Code - Synchronous
// const textIn = fs.readFileSync('./txt/final.txt', 'utf-8');
// console.log(textIn);

// const textOut = `Wow, look I can write into this file: \n${textIn}\n Created on ${Date.now()}`;

// fs.writeFileSync('./txt/newFile.txt', textOut);
// console.log("File written");


// Non - blocking and asynchronous
// fs.readFile('./txt/start.txt', 'utf-8', function (err, data1) {
//     // console.log(data);
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//     });
// });
// console.log("ok");



////////////
//Server

const server = http.createServer((req, res)=>{
    
    const pathName = req.url;
    if(pathName == '/')
    {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.end("<h1>Overview Page</h1>");
    }
    else if(pathName == '/products')
    {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.end("<h1>Product Page</h1>");
    }
    else
    {
        res.writeHead(404, {
            'Content-type': 'text/html'
        });
        res.end("<h1>Oops! Page Not Found!</h1>")
    }
});

server.listen(8000, '127.0.0.1', ()=>{
    console.log(`Server is listening on port 8000`);
})




