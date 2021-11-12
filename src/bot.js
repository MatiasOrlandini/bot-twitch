const tmi = require("tmi.js");
require("dotenv").config();

const options = {
  options: {
    debug: true,
  },
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: process.env.TWITCH_BOT_USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN,
  },
  channels: [process.env.TWITCH_CHANNEL],
};
const client = new tmi.client(options);
client.connect();

client.on("connected", (address, port) => {
  client.action(process.env.TWITCH_CHANNEL, `Hola!!! Byte Bot a sus órdenes`);
});

client.on("chat", (target, ctx, message, self) => {
  if (self) return;

  const commandName = message.trim();

  if (commandName.indexOf("hola") > -1) {
    client.say(target, `Bienvenido! ${ctx.username}`);
  }

  if (commandName.indexOf("buenas") > -1) {
    client.say(target, `Bienvenido! ${ctx.username}`);
  }

  if (commandName.indexOf("Hola") > -1) {
    client.say(target, `Bienvenido! ${ctx.username}`);
  }

  if (commandName.indexOf("Buenas") > -1) {
    client.say(target, `Bienvenido! ${ctx.username}`);
  }

  if (commandName === "gg") {
    client.say(target, `GG`);
  }
  if (commandName === "f") {
    client.say(target, `F`);
  }
  if (commandName.indexOf("bytedeGg") > -1) {
    client.say(target, `GG`);
  }
  if (commandName === "grelo") {
    client.say(target, `!pepperoni`);
  }
  if (commandName === "!mide") {
    const num = rollDice();
    client.say(target, `A ${ctx.username} le mide ${num}cm PogChamp`); // 	streamElemets: /me A $(user) le mide ${random.1-40}cm PogChamp
  }
  if (commandName === "!calor") {
    client.say(target, `POR QUE HACE TANTO CALORRRRR SwiftRage SwiftRage`);
  }
});

function rollDice() {
  const sides = 30;
  return Math.floor(Math.random() * sides) + 1;
}
