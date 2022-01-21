const expess = require('express');
const app= expess();
app.use(expess.json( ));
const data = [
    {id:1,name:"dheeru"},
    {id:2,name:'dheeru'},
    {id:3,name:'dheeru'},
    {id:4,name:'dheeru'}
];
app.get('/', (req,res)=>{
    res.send('hello world ....');
});
app.get('/login',(req,res)=>{
 res.send("logged in successfully.....");
});
app.post('/data',(req,res)=>{
    const entry={
        id:data.length+1,
        name:req.body.name
    };
    data.push(entry);
    res.send(entry);
});
const port= process.env.port || 3000;
app.listen(port , ()=>{console.log(`${port} is listening.......`)});
