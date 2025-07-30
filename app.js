// console.log("hello from nodejs")

// const http=require("http")

// const server=http.createServer((req,res)=>{
//     res.end("the server in running")
// })

// server.listen(3000,()=>{
//     console.log("server started")
// })


// const fs = require("fs");

// fs.writeFile("myfile.txt", "Hello from writeFile!", (err) => {
//     if (err) {
//         console.log("Error writing to file:", err);
//     } else {
//         console.log("File written successfully!");
//     }
// });



// const fs=require("fs")
// fs.readFile("myfile.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })

const express=require("express")

app=express()

app.get("/",(req,res)=>{
    res.send("hello world mklkdlldldlld")
})

app.get("/about/:age",(req,res)=>{
    res.send("age"+ req.params.age)
})

app.listen(3001,()=>{
    console.log("setver startejfjkfd")
})