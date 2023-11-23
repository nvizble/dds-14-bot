const { Client, IntentsBitField } = require("discord.js");
const fs = require("fs/promises");
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
  ],
});

const controllers = require("./controllers/controllers");

client.on("messageCreate", controllers.pingPong);

client.on("messageCreate", controllers.helloWorld);

client.on("guildMemberAdd", controllers.welcomeMessage);

client.on("messageCreate", controllers.findDepende);

client.on("messageCreate", controllers.dependeCounter);

client.login(
  //token de acesso do bot
);
