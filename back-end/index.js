
const http = require('http');
const fs = require('fs');
const path = require('path');
const DB_PATH = path.join(__dirname,'data.json');

const server = http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    if(req.url === '/add'){
        if(req.method === 'GET'){
            fs.readFile(DB_PATH,(err,data)=>{
                if(err){
                    console.error(err);
                    res.writeHead(500);
                    res.end();
                }
                else{
                    res.writeHead(200,{
                        'Content-type': 'text/plain; charset=UTF-8'
                    });
                    res.end(data);
                }
            })
        }
        if(req.method==="POST"){
            let text = '';
            req.on("data",(chunk)=>{
                text += chunk;
            });
            req.on("end",()=>{
                let db = fs.readFileSync(DB_PATH,(err)=>{console.log(err)});
                let news = JSON.parse(text);
                db = JSON.parse(db);
                db.push(news);
                fs.writeFile(DB_PATH,JSON.stringify(db));
                res.writeHead(201);
                res.end();
            })            
        }
    }
});
server.listen(5500);