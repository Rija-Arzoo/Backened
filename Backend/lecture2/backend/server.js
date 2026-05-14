import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express()
const port = process.env.PORT ||3000


const jokes = [
    {
        "id": 1,
        "title": "Why did the scarecrow win an award?",
        "content": "Because he was outstanding in his field!"
    },
    {
        "id": 2,
        "title": "Why don’t skeletons fight each other?",
        "content": "They don’t have the guts."
    },
    {
        "id": 3,
        "title": "What do you call fake spaghetti?",
        "content": "An impasta!"
    },
    {
        "id": 4,
        "title": "Why did the math book look sad?",
        "content": "Because it had too many problems."
    },
    {
        "id": 5,
        "title": "Why can’t your nose be 12 inches long?",
        "content": "Because then it would be a foot!"
    }
]

app.get('/', (req, res) => {
    res.send('server is ready')
})
app.get('/api/jokes',(req,res)=>{
    res.send(jokes)
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})


