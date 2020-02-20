const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const ms = require("ms")

module.exports = {
    name: "unmute",
    category: "moderation",
    description: "Unmutes a player",
    run: async (client, message, args) => {

        if (message.deletable) message.delete();

        let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
        if(!person) return message.reply("No member found.").then(m => m.delete(5000));
        
        let muterole = message.guild.roles.find(role => role.name === "Muted");
        let mainrole = message.guild.roles.find(role => role.name === "Member");

        
        person.addRole(mainrole);
        person.removeRole(muterole.id);
        //person.addRole(muterole);
        message.channel.send(`@${person.user.tag} has now been unmuted`).then(m => m.delete(5000));
        
    }}