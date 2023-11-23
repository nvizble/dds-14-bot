const fs = require("fs/promises");

const pingPong = async (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content.toLowerCase() === "ping") {
    message.reply("pong");
  }
};

const dependeCounter = async (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content.toLowerCase() === "!dependecounter") {
    try {
      const depende = await fs.readFile("./data/database.json");
      const dependeOBJ = JSON.parse(depende);
      message.reply(`O depende já foi dito ${dependeOBJ.depende} vezes`);
      return;
    } catch (error) {
      console.log(error);
    }
  }
};

const findDepende = async (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content.toLowerCase() === "!dependecounter") {
    return;
  }

  if (message.content.toLowerCase().includes("depende")) {
    message.reply("Depende do que? Calma lá Elias!!!!");
  }
  try {
    const depende = await fs.readFile("./data/database.json");
    const dependeOBJ = JSON.parse(depende);
    dependeOBJ.depende++;
    await fs.writeFile(
      "./data/database.json",
      JSON.stringify(dependeOBJ, null, 2)
    );
    return;
  } catch (error) {
    console.log(error);
  }
};

const helloWorld = async (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content.toLowerCase() === "!helloworld") {
    message.reply("Hello World!");
  }
};

const welcomeMessage = async (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "welcome"
  );
  if (!channel) {
    return;
  }
  channel.send(`Bem vindo ao servidor da DDS14, ${member}`);
};

module.exports = {
  pingPong,
  dependeCounter,
  findDepende,
  helloWorld,
  welcomeMessage,
};
