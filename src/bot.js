const { Client, GatewayIntentBits , ActivityType } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//set your token here

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  //change 'your stats' here 
  client.user.setPresence({ activities: [{ name: 'NFTs (soon)', type: ActivityType.Watching }], status: 'online'});
});


client.login('MTAyMzEyOTUzMjU0MDEyOTMyMA.GZqOUV.fQnJrsghSrV7fTmFvnDSlRX6p7Dsijn0wHPgeY');
