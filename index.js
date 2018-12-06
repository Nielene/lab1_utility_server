const express = require("express");

const myModules = require('./mathFunctions.js')


const app = express();



app.get('/math/add', (req, res) => {
  let obj = {};
  obj['input'] = req.query;
  let arrOfTheValues = Object.values(req.query)
  obj['sumString'] = arrOfTheValues.join(" + ")

  obj['sum'] = myModules.add(arrOfTheValues)

  res.json(obj)
  // console.log(req.query);
  // console.log(Object.values(req.query));

})


app.get('/math/subtract', (req, res) => {
  let obj = {};
  obj['input'] = req.query; //set key/value pair

  let arrOfTheValues = Object.values(req.query);
  obj['subtractString'] = arrOfTheValues.join(" - ")
  obj['difference'] = myModules.subtract(arrOfTheValues);

  res.json(obj);
})

app.get('/math/divide', (req, res) => {
  let obj = {};
  let arrOfTheValues = Object.values(req.query);
  obj['input'] = req.query;
  obj['divideString'] = arrOfTheValues.join(" / ")
  obj['quotient'] = myModules.divide(arrOfTheValues);
  res.json(obj);
})

app.get('/math/multiply', (req, res)=> {
  let obj = {};
  let arrOfTheValues = Object.values(req.query);
  obj.input = req.query;
  obj.multiplyString = arrOfTheValues.join(" * ");
  obj.product = myModules.multiply(arrOfTheValues);
  res.json(obj);
})

app.get('/*', (req, res) => {
  res.json(`Try one of these Math Routes instead: localhost:3000/math/add?a=2&b=3
  localhost:3000/math/subtract?a=2&b=3
  localhost:3000/math/divide?a=2&b=3
  localhost:3000/math/multiply?a=2&b=3`)
})

app.listen(4000, ()=> {
  console.log("You are listening to the sweet vibes of port 4000");
})
