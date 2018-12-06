const express = require('express');
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express();


console.log("hello");
const getGif = (req, res) => {
  axios.get(`http://api.giphy.com/v1/gifs/search?${req.query.search}q=ryan+gosling&api_key=YOUR_API_KEY&limit=5`)
  .then (response => {
    res.gif =response.data
    // res.json(response.data)
    
  })
}

app.get('/gif', getGif)


app.listen(1000, () => {
  console.log("Port 1000");
})

// app.get('/gif', (req, res)=> {
//   axios.get()
// })
