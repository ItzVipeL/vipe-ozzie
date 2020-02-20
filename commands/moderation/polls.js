const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "polls",
    category: "moderation",
    description: "Start a poll with smart theck.",
    run: async (client, message, args) => {
        
        if (message.deletable) message.delete();
        
        
        const embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle("Poll starter!")
        .setDescription("_polls to start a poll!");

        if(!args[1]){
            message.channel.send(embed);
       
        }

        let msgArgs = args.slice(1).join(" ");

        message.channel.send("🤔 " + "**" + msgArgs + "**" + " 🤔").then(messageReaction => {
            messageReaction.react("✔");
            messageReaction.react("❌");
            message.delete(3000).catch(console.error);
        });

    }}