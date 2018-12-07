const express = require('express');
const axios = require('axios')
// const bodyParser = require('body-parser')

const app = express();


app.get('/gif', (req, res)=> {
  // console.log("hello");
  axios.get(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=OGaVltGGRCT5katku82B1s4VgQ1jno1H&limit=5`)
  .then (response => {
    // console.log(response);
    // res.gif = response.data
    // console.log(response.data);
    let data = response.data.data
    let emptyArr = []
    let imageUrl = "fixed_height_still";
    data.forEach(object => {
      emptyArr.push(object.images)
      // res.json([Object.values(object.id)])
      // res.json([Object.values(object.images)])
      // res.json(emptyArr.push(object.images.imageUrl.url))
    })
    res.json(emptyArr)
    // res.json(response.data.data)
    // res.json(Object.values())
  })
})

app.get('/*', (req, res) => {
  res.json({message: "Error"})
})


app.listen(3000, () => {
  console.log("Port 3000");
})

// app.get('/gif', (req, res)=> {
//   axios.get()
// })
