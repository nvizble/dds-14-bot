const { Client, IntentsBitField } = require("discord.js");
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
  ],
});

const controllers = require("./controllers/controllers");

client.on("messageCreate", controllers.help)

client.on("messageCreate", controllers.pingPong);

client.on("messageCreate", controllers.helloWorld);

client.on("guildMemberAdd", controllers.welcomeMessage);

client.on("messageCreate", controllers.findDepende);

client.on("messageCreate", controllers.dependeCounter);

client.login(
  "MTE3NzIwMDkxNDk5ODc3NTgzOA.Gi9EXo.fnLOIjtR0wyDZKS3sOjuesHEEMJVESifhjftYI"
);
