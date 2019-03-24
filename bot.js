const Discord = require('discord.js');
cosnst client = new Discord.Client();
const prefix = "!"
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity('', { type: 'PLAYING' })
});
 
 
 
 
 
 
 
 
 
client.login(process.env.BOT_TOKEN);
