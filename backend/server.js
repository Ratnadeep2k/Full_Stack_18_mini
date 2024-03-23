import express from "express"; //moduleJs


const app=express()
app.get('/',(req,res)=>{
    res.send('server is  ready');
});

// get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes =[
        {
            id:1,
            name:"Ratnadeep",
            content:'This is Joke'

        },
        {
            id:2,
            name:"Ratnadeep Baruah",
            content:'This is 2 Joke'

        },
        {
            id:3,
            name:"Ratnadeep OK",
            content:'This is 3 Joke'

        },


    ]     
    res.send(jokes);
});

 




const port =process.env.PORT || 3002;
app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
}
);