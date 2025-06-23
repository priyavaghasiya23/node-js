const http=require("http")
const server=http.createServer((req,res)=>{
    // res.write("hello");
    // res.end("hy")

    var path =req.url;
    var method=req.method;
console.log(Date(), path, method)

    if (path.includes("/abc")&& method=="GET")
    {
        res.end("hello abc")
    }
    else{
        res.end("intro")
    }
})

server.listen(8978,()=>{
    console.log("server")

})