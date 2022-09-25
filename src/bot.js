const { Client, GatewayIntentBits , ActivityType } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//set your token here
const Yourtoken = '';


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  //change 'your stats' here 
  client.user.setPresence({ activities: [{ name: 'your stats', type: ActivityType.Watching }], status: 'online'});
});


client.login(Yourtoken);
