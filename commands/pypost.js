const Discord = require("discord.js")
const ms = require("parse-ms")
const client = new Discord.Client()

module.exports = {
  name: "pypost",
  description: "post ur guild to everyone",
  async execute(message, args, bot) {

    let filter = m => m.author.id === message.author.id;

    let channel = message.guild.channels.cache.find((x) => (x.name === "『🎟』normal-codes"))
    let gaymessage;
    let creation = new Discord.MessageEmbed()
      .setAuthor(`Code Poster [1/3]`)
      .setDescription(`**Code:**`)
      .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(creation).then(msg => {
      message.channel.awaitMessages(filter, {

          max: 1,

          time: 90000,

          errors: ['time']

        })
        .then(collectedf => {
          collectedf.first().delete()


          let hello;
          let creation2 = new Discord.MessageEmbed()
            .setTitle(`Code Poster [2/3]`)
            .setDescription(`**Code Launguage**`)
            .setFooter(message.guild.name, message.guild.iconURL())

          msg.edit(creation2).then(msg => {
            message.channel.awaitMessages(filter, {

                max: 1,

                time: 90000,

                errors: ['time']

              })
              .then(gayword => {

                gayword.first().delete()


                let boi;
                let creation2 = new Discord.MessageEmbed()
                  .setTitle(`Code Poster [3/3]`)
                  .setDescription(`**Code Author**`)
                  .setFooter(message.guild.name, message.guild.iconURL())

                  
                msg.edit(creation2).then(msg => {
                  message.channel.awaitMessages(filter, {

                      max: 1,

                      time: 90000,

                      errors: ['time']

                    })
                    .then(collected => {
                      collected.first().delete()
                      hello = gayword.first().content;
                      gay = collected.first().content;
                      ok = collectedf.first().content;
                      let omg = ok.replace('```', "  ").replace('```', "  ").replace("  ");

                      let done = new Discord.MessageEmbed()
                        .setAuthor(message.author.username, message.author.displayAvatarURL())
                        .setDescription(`\`\`\` \n${omg} \`\`\`\n**Language:** ${hello}\n**By:** ${gay}`)
                        .setColor("#8E3232")
                      msg.edit(done)
                      channel.send(done).then(m => {
                        m.react("✅")
                        m.react("❌")
                      })

                    })
                })

              })
          })
        })
    })
  }
}