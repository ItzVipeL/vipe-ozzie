const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy")

module.exports = {
    name:"meme",
    category: "fun",
    description: "Make fun memes!",
    run: async (client, message, args) => {
        
        const subReddits = ["dunkmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From the /r/ ${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        const channel = message.guild.channels.find(c => c.name === "memes")
        
        if (!channel)
        return message.channel.send("Couldn't find a `#memes` channel").then(m => m.delete(5000));

        return channel.send(embed);
    }
}