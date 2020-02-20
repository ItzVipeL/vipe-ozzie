const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const usedCommandRecently = new Set();

module.exports = {
    name: "cooldown",
    category: "moderation",
    description: "Makes a cooldown",
    run: async (client, message) => {
    if(usedCommandRecently.has(message.author.id)){
        message.reply("You got a cooldown. Wait another 30 seconds!");
    } else {
        message.reply('youre not on cooldown! This is a custom command!');

        usedCommandRecently.add(message.author.id);
        setTimeout(() => {
            usedCommandRecently.delete(message.author.id)
        }, 30000)
    }
}}
