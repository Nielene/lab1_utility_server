# Lab 1: Utility Server

## Task
- You will create an Express server that takes in different routes to do random but COOL things!
- Each of the routes are unique and takes in query parameters through GET requests
- Each of the individual functionalities should be seperated into modules that you will build
- Your routes should test for invalid inputs

## Features

```
// Math Routes
localhost:3000/math/add?a=2&b=3
localhost:3000/math/subtract?a=2&b=3
localhost:3000/math/divide?a=2&b=3
localhost:3000/math/multiply?a=2&b=3

// Search Gif Route
localhost:3000/gif/?search=spongebob
```

## Math Routes Example

If we entered the following:

```
localhost:3000/math/add?a=2&b=3
```

We should get back the following response:

```
{
  input: {
    a: 2,
    b: 3
  },
  sumString: '2 + 3',
  sum: 5
}
```

This example applies for every one of the math routes.

A more complex example:

```
localhost:3000/math/multiply?cat=50&b=3&zoo=10
```

We should get back the following response:

```
{
  input: {
    cat: 50,
    b: 3,
    zoo: 10
  },
  productString: '50 * 3 * 10',
  product: 1500
}
```

The user can enter as many query parameters as they want to do the math function on. AND be able to call them whatever they want.

## Gif Search Example

If they user searches the following:

```
localhost:3000/gif/?search=spongebob
```

Your response should be like the following:

```
[
  "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
  "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif"
]
```

- You will use the [Giphy API](https://developers.giphy.com/docs/#operation--gifs-search-get) to do your GIF search.
- Parse through their results.
- Respond back with an array of ONLY the direct GIF image URL. Where the image URL ends with `.gif`

//========
my api key:
https://developers.giphy.com/dashboard/
OGaVltGGRCT5katku82B1s4VgQ1jno1H

http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=OGaVltGGRCT5katku82B1s4VgQ1jno1H&limit=5

//-------------
Lesson:
https://github.com/joinpursuit/Pursuit-Core-Web/blob/master/node/modules/readme.md
Exercise:
https://github.com/joinpursuit/Pursuit-Core-Web/blob/master/node/modules/exercise.md
