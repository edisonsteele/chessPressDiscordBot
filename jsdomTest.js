const fetch = require('node-fetch');

fetch('https://api.chess.com/pub/player/edisonst/stats')
    .then(res => res.json())
    .then(json => {const stuff = (json);
    console.log(stuff.chess_daily.last.rating)

    });



    //console.log(chess_daily[0].last["rating"]);