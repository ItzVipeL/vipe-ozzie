const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "discordfile",
    category: "info",
    description: "Sends a discord link",
    usage: "<discord>",
    run: async (client, message, args) => {

    if (message.deletable) message.delete();
        
        const embed = new RichEmbed()
        .setTitle('Website', message)
        .setFooter(message.guild.name, message.guild.iconURL)
        .setColor(000000)
        .setTimestamp()
        .setDescription('https://discordapp.com/invite/2NGsNRm');

        message.channel.send(embed).then(m => m.delete(50000))
    }
}