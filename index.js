const discord = require('discord.js');
const client = new discord.Client();
const fs = require("fs");
const {token} = require('token.json');
const add ='+';
const subtract = '-';
const equal = '=';
const help = '?';
// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log("ready");
    client.user.setActivity("?help");
});

client.on('message', message =>{
    if(message.channel.id === '927037576907468850'){
        console.log(message.content);
        //gets message without + or -

        const pureMsg = message.content.substring(1);
        console.log(pureMsg);
        if(message.content === add+pureMsg && !(isNaN(pureMsg))){


            //read the file
            fs.readFile('./amount.json',function (err,data){
                if (err) throw err;

                // Converting to JSON
                const amount = JSON.parse(data);
                console.log(amount.amount);

                //adding amount
                amount.amount += parseInt(pureMsg);
                console.log(amount.amount);
                //write data back to file
                fs.writeFile('./amount.json', JSON.stringify(amount), err => {

                    // Checking for errors
                    if (err) throw err;
                    message.channel.send('The total is now ' + amount.amount);
                });
            })

        }else if(message.content === subtract+pureMsg && !(isNaN(pureMsg))) {

            //read the file
            fs.readFile('./amount.json', function (err, data) {
                if (err) throw err;

                // Converting to JSON
                const amount = JSON.parse(data);
                console.log(amount.amount);

                //subtracting amount
                amount.amount -= parseInt(pureMsg);
                console.log(amount.amount);
                //write data back to file
                fs.writeFile('./amount.json', JSON.stringify(amount), err => {

                    // Checking for errors
                    if (err) throw err;
                    message.channel.send('The total is now ' + amount.amount);
                });
            })
        }else if(message.content === equal+pureMsg && !(isNaN(pureMsg))) {

            //read the file
            fs.readFile('./amount.json', function (err, data) {
                if (err) throw err;

                // Converting to JSON
                const amount = JSON.parse(data);
                console.log(amount.amount);

                //subtracting amount
                amount.amount = parseInt(pureMsg);
                console.log(amount.amount);
                //write data back to file
                fs.writeFile('./amount.json', JSON.stringify(amount), err => {

                    // Checking for errors
                    if (err) throw err;
                    message.channel.send('The total is now ' + amount.amount);
                });
            })
        }else if(message.content === help+'help' && isNaN(pureMsg)) {

            message.channel.send('Use + to add a number like ```+5``` and - to subtract like ```-5```');
            message.channel.send('You can also set the number of maginite by useing = so ```=10```');
        }
    }
})





client.login(token);