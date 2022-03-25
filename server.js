const exp=require('express');
const { sendFile } = require('express/lib/response');
const app=exp();

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})

app.listen(3000,function(){
    console.log('server is running on port 3000');
})