const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const { token } = require('./config');
const init = require('./utils/init');
const chalk = require('chalk');

const bot = new Discord.Client()
init(bot)
bot.login(token);

bot.on("ready", () => {
   function randomStatus() {
   let status = [`Posting Codes`, "DarkCodes", "/help"]
   let rstatus = Math.floor(Math.random() * status.length);
   bot.user.setActivity(status[rstatus], {type: "WATCHING",});
   }; setInterval(randomStatus, 60000)
    const chalk = require('chalk');
    console.log("");
    console.log((chalk.cyan(`DDDDDDDDDDDDD                                              kkkkkkkk           NNNNNNNN        NNNNNNNN                                   hhhhhhh             `)));
    console.log((chalk.cyan(`D::::::::::::DDD                                           k::::::k           N:::::::N       N::::::N                                   h:::::h             `)));
    console.log((chalk.cyan(`D:::::::::::::::DD                                         k::::::k           N::::::::N      N::::::N                                   h:::::h             `)));
    console.log((chalk.cyan(`DDD:::::DDDDD:::::D                                        k::::::k           N:::::::::N     N::::::N                                   h:::::h             `)));
    console.log((chalk.cyan(`  D:::::D    D:::::D   aaaaaaaaaaaaa   rrrrr   rrrrrrrrr    k:::::k    kkkkkkkN::::::::::N    N::::::N   ooooooooooo     aaaaaaaaaaaaa    h::::h hhhhh       `)));
    console.log((chalk.cyan(`  D:::::D     D:::::D  a::::::::::::a  r::::rrr:::::::::r   k:::::k   k:::::k N:::::::::::N   N::::::N oo:::::::::::oo   a::::::::::::a   h::::hh:::::hhh    `)));
    console.log((chalk.cyan(`  D:::::D     D:::::D  a::::::::::::a  r::::rrr:::::::::r   k:::::k   k:::::k N:::::::::::N   N::::::N oo:::::::::::oo   a::::::::::::a   h::::hh:::::hhh    `)));
    console.log((chalk.cyan(`  D:::::D     D:::::D  aaaaaaaaa:::::a r:::::::::::::::::r  k:::::k  k:::::k  N:::::::N::::N  N::::::No:::::::::::::::o  aaaaaaaaa:::::a  h::::::::::::::hh  `)));
    console.log((chalk.cyan(`  D:::::D     D:::::D           a::::a rr::::::rrrrr::::::r k:::::k k:::::k   N::::::N N::::N N::::::No:::::ooooo:::::o           a::::a  h:::::::hhh::::::h `)));
    console.log((chalk.cyan(`  D:::::D     D:::::D    aaaaaaa:::::a  r:::::r     r:::::r k::::::k:::::k    N::::::N  N::::N:::::::No::::o     o::::o    aaaaaaa:::::a  h::::::h   h::::::h`)));                                 
    console.log((chalk.cyan(`  D:::::D     D:::::D  aa::::::::::::a  r:::::r     rrrrrrr k:::::::::::k     N::::::N   N:::::::::::No::::o     o::::o  aa::::::::::::a  h:::::h     h:::::h`)));
    console.log((chalk.cyan(`  D:::::D     D:::::D a::::aaaa::::::a  r:::::r             k:::::::::::k     N::::::N    N::::::::::No::::o     o::::o a::::aaaa::::::a  h:::::h     h:::::h`)));
    console.log((chalk.cyan(`  D:::::D    D:::::D a::::a    a:::::a  r:::::r             k::::::k:::::k    N::::::N     N:::::::::No::::o     o::::oa::::a    a:::::a  h:::::h     h:::::h`)));
    console.log((chalk.cyan(`DDD:::::DDDDD:::::D  a::::a    a:::::a  r:::::r            k::::::k k:::::k   N::::::N      N::::::::No:::::ooooo:::::oa::::a    a:::::a  h:::::h     h:::::h`)));
    console.log((chalk.cyan(`D:::::::::::::::DD   a:::::aaaa::::::a  r:::::r            k::::::k  k:::::k  N::::::N       N:::::::No:::::::::::::::oa:::::aaaa::::::a  h:::::h     h:::::h`)));
    console.log((chalk.cyan(`D::::::::::::DDD      a::::::::::aa:::a r:::::r            k::::::k   k:::::k N::::::N        N::::::N oo:::::::::::oo  a::::::::::aa:::a h:::::h     h:::::h`)));
    console.log((chalk.cyan(`DDDDDDDDDDDDD          aaaaaaaaaa  aaaa rrrrrrr            kkkkkkkk    kkkkkkkNNNNNNNN         NNNNNNN   ooooooooooo     aaaaaaaaaa  aaaa hhhhhhh     hhhhhhh`)));
    console.log("");                                  
    console.log((chalk.yellow(`                                                                     Bot By DarkNoah`)));  
    console.log((chalk.yellow(`                                                                  © 2020 DarkDevs, Inc.`)));    
    console.log("");
    console.log((chalk.red(`                                                                         Media`)));               
    console.log((chalk.red(`                                   Youtube: https://www.youtube.com/channel/UC7kbrP4x2IR5iTFDvR_2gQQ?view_as=subscriber`))); 
    console.log((chalk.red(`                                                          DarkDevs Discord: https://discord.gg/naEehZM`)));    
    console.log((chalk.red(`                                                               My Discord: ! DarkNøah🍭#2400`)));         
    console.log("")             
})

bot.on('guildCreate', guild => {
  if(!channel) return;
  const channel = guild.channels.cache.find(channel => channel.name === 'general')
  channel.send('Hello, My prefix is `!`')
 })

bot.commands = new Discord.Collection();
const files = bot.getAllFiles('./commands')

for (const file of files) {
  if (!file.endsWith(".js")) return;
  let commands = require(`./${file}`);
  bot.commands.set(commands.name, commands);
}

bot.on("message", message => {
  if (message.content.includes(`<@!${bot.user.id}>`)) {
   let talk = ["Hello, My prefix is `/`"]
   // ["Fucking Bitch Can you let me Sleep? Ping me 1 more time & you are done for bud. Don't Ping me Again! Take the fucking prefix: `d!` :zzz: ", "Hey Kid Stop FUCKING PINGING ME, You FUCKING ASS HOLE. Take my prefix: `d!` ", "Hello Man, How are you doing today? Ow Shit I forgot, You need my prefix. My Prefix is `d!`"]
   let rstatus = Math.floor(Math.random() * talk.length);
    message.channel.send(`${talk[rstatus]}`)
   }
  if (message.channel.type != 'text') return;
  let prefix = bot.defaultPrefix
  if (message.author.bot) return
  if (!(message.content.toLowerCase().startsWith(prefix))) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandsName = args.shift().toLowerCase();

  const commands =
    bot.commands.get(commandsName) ||
    bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandsName));

  if (!commands) {
    return;
  }

  if ((commands.args && !args.length) || commands.args && !args.length) {
    message.channel.send(error(`**Wrong usage, ${message.author}!**${commands.usage ? `\nPlease use: \`${prefix}${commands.name} ${commands.usage}\`` : ""}`));
    return;
  }

  try {
    commands.execute(message, args, bot);
  } catch (error) {
    message.reply(`For debugging purposes: **${error.toString().split("\n")[0]}**`);
    console.error(error);
  }
}); 