const Discord = require('discord.js');
cosnst client = new Discord.Client();
const prefix = "!"
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity('', { type: 'PLAYING' })
});
 
 
 
 
 
 
 
 
 
client.login('NTQ5Njc3MjU2Njg0MDc3MDU2.D3lcwA.zoL7eVAiMU7N4zqgA4zfY8dNncc');
