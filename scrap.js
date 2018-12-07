Michelle - Objects:


let movies = [
  {
    id: 1,
    name: "underworld"
  },
  {
    id: 2,
    name: "titanic"
  }
]

movies.forEach(movie => {
  console.log(movie.name)
})

console.log("keys: ", Object.keys(movies[0]))
// array of all the keys
console.log("values: ", Object.values(movies[0]))



//-----------------------
```js

${req.query.search}
const getGif = (req, res) => {
  // console.log("hello");
  axios.get(`http://api.giphy.com/v1/gifs/search?${req.query.search}q=ryan+gosling&api_key=YOUR_API_KEY&limit=5`)
  .then (response => {
    res.gif =response.data
    // res.json(response.data)

  })
}
```

http://api.giphy.com/v1/gifs/search?q=${req.query.search.toLowerCase()}&api_key=(yourAPIkeygoeshere)
