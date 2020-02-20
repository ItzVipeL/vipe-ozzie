module.exports = {
    name: "clear",
    aliases: ["clean"],
    category: "moderation",
    description: "Clearing a chat message",
    run: async (client, message, args) => {

        if (message.deletable) {
            message.delete();
        }

        //member no permission
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("You do not have permission to use this command!").then(m => m.delete(5000));
        }

        //Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("You need more than 0 to clean something. Please try again!").then(m => m.delete(5000));
        }

        //Bot can't delete the message?
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("I can't delete these messages. Please contact an staff member.").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`)).then(m => m.delete(5000))
            .catch(err => message.reply(`We found an error. Here is it ${err}`));
    }
}