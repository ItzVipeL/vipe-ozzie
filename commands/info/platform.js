const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "platform",
    category: "info",
    description: "Shows all the platforms",
    usage: "<platform>",
    aliases: ["website"],
    run: async (client, message, args) => {

            if (message.deletable) message.delete();

        const embed = new RichEmbed()
            .setTitle('All websites for Vipe&Ozzie channel!')
            .setColor("RANDOM")
            .setFooter(message.guild.name, message.guild.iconURL)
            .setTimestamp()
            .addField('**Youtube**', `https://www.youtube.com/channel/UC-T0FXlv0UlWl5EDVFQKPew`, true)
            .addField('**Discord**', `https://discordapp.com/invite/2NGsNRm`, true)
            .addField('**Version**', '1.0.1', true)
            .addField('**Server Name**', message.guild.name, true)
            .addField('**Server Owners**', `Owner - ItzVipe - Owner - OzzieSA`, true)
            .addField('**Player**', message.author.username, true)
            
            message.channel.send(embed);
            
            const member = getMember(message, args.join(" "));
            const joined = formatDate(member.joinedAt);
            const roles = member.roles
            const created = formatDate(member.user.createdAt);

        const clientembed = new RichEmbed()
            .setTitle('History')
            .setColor("RANDOM")
            .setFooter(message.guild.name, message.guild.iconURL)
            .setTimestamp()
            .setThumbnail(member.user.displayAvatarURL)
            .addField('User information:', stripIndents`**> ID:** ${member.user.id}
            **> Username**: ${member.user.username}
            **> Tag**: ${member.user.tag}
            **> Created at**: ${created}`, true)

            message.author.send(clientembed);


    }}