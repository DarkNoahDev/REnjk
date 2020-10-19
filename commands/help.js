const Discord = require('discord.js')

module.exports = {
    name: 'help',
    aliases: ['e', 'eeee'],
    description: 'Help Command',

    async execute(message, args, bot) {
        const Embed = new Discord.MessageEmbed()
        .setTitle(`Lock | Help Cmd`)
        .setDescription("**Javascript:**\n *Use this command to post in Javascript Catagory!*\n Usage: `/jspost (Then answer the questions in chat)`\n **Python:**\n *Use this command to post in Python Catagory!*\n Usage: `/pypost (Then answer the questions in chat)`\n **Html:**\n *Use this command to post in Html Catagory!*\n Usage: `/htpost (Then answer the questions in chat)`\n **BDFD:**\n *Use this command to post in Bdfd Catagory!*\n Usage: `/bdpost (Then answer the questions in chat)`")
        message.channel.send(Embed)

    
  }
}