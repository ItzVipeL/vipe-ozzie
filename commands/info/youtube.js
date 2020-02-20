const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "youtube",
    category: "info",
    description: "Sends a youtube link",
    usage: "<youtube>",
    run: async (client, message, args) => {

    if (message.deletable) message.delete();
        
        const embed = new RichEmbed()
        .setTitle('Website', message)
        .setFooter(message.guild.name, message.guild.iconURL)
        .setColor(000000)
        .setTimestamp()
        .setDescription('https://www.youtube.com/channel/UC-T0FXlv0UlWl5EDVFQKPew');

        message.channel.send(embed).then(m => m.delete(50000))
    }
}