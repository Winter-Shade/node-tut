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

const temp_overview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const temp_product = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const temp_card = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const productData = JSON.parse(data);

const server = http.createServer((req, res)=>{
    
    const pathName = req.url;

    // Overview Page
    if(pathName == '/' || pathName === '/overview')
    {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });

        const product_cards = productData.map(el => {
            return replaceTemplate(temp_card, el);
        });


        res.end(temp_overview);
    }

    // Products Page
    else if(pathName == '/products')
    {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.end("<h1>Product Page</h1>");
    }

    // API
    else if(pathName === '/api')
    {
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        res.end(data);
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




