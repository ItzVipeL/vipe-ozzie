const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
require("dotenv/config");
const http = require("http");
const port = process.env.PORT || 3000;
http.createServer().listen(port);
//this is a simple server

const client = new Client({
    disableEveryone: true
});

client.on ("guildMemberAdd", member =>{

    const channel = member.guild.channels.find(channel => channel.name === "general");
    if(!channel) return;
    
    channel.send(`Welcome to our server, ${member}, be sure to read the rules on this server.`)

});

client.on('error', err => {
    console.log(err);
});

//client.on ("message", message =>{
  //  let args = message.content.substring(PREFIX.length).split(" ")

//});

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

client.on("message", message => {
    return message.reply("This is a test monkey")
});

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "Vipe&Ozzie",
            type: "STREAMING"
        }
    }); 
});

client.on("message", async message => {
    const prefix = "_";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);


});

client.login(process.env.TOKEN);