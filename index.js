const discord = require('discord.js')
const fetch = require('node-fetch');
const client = new discord.Client();
const prefix = '!';
const commandNamesList = ['chess'];


client.once('ready', () =>{
    console.log('Console is online');
});

client.on('message', async message => {

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(' ');


    //if (args in commandNamesList)  {

       // args(args());

    //}

    let url = "https://api.chess.com/pub/player/" + args[1] + "/stats";
        fetch(url).then(res => res.json()).then(json => {
            const stuff = (json);


            console.log(stuff.chess_daily.last.rating);
            console.log(stuff.chess_rapid.last.rating);
            console.log(stuff.chess_bullet.last.rating);
            console.log(stuff.chess_blitz.last.rating);
            console.log(stuff.tactics.highest.rating);
            console.log(stuff.lessons.highest.rating);
        })


})





 client.login('ODA2OTYwODU3MTY1NzI1Nzk3.YBxC3A.47s-EVbJcv2UE1LlHv3IvlFZ0lM')