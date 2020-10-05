const Discord = require('discord.js');
const client = new Discord.Client();

const keyword = 'GOODNIGHT';
const terribleFriend = '299349110845210625';

client.once('ready', () => {
    console.log('Bed is made!');
});

client.on('message', message => {
    
    if (message.author.bot) {
        return;
    }

    var userMessage = message.content;
    var capitalized = userMessage.toUpperCase();
    console.log('comparing ' + userMessage + ' to keyword');

    if (capitalized.includes(keyword)) {

        if  (message.author.id === terribleFriend) {

            console.log('sending response to a terrible friend');
            message.channel.send('I hope you sleep awfully');
    
        } else if (message.member.roles.cache.some(role => role.name === 'Female')) {
            
            console.log('tucking in a princess');
            message.channel.send('Goodnight, m\'lady');

        } else { 

            console.log('tucking in a prince');
            message.channel.send('Goodnight, sweet prince');
        }
    }
});



client.login('must omit this for security');

