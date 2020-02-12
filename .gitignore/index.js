const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = ".";

bot.login(process.env.TOKEN);

bot.on("ready", function() {
    console.log('\x1B[31m%s\x1B[0m', '«--------------------------------------------------------» ▲ «--------------------------------------------------------»')
    console.log(`
                                    BOT ALLUMER
`);
console.log('\x1B[31m%s\x1B[0m', '«--------------------------------------------------------» ▲ «--------------------------------------------------------»')
});

bot.on('message', msg => {

  if(msg.content.startsWith(prefix + 'puball')) {

    let _message = ["676667067029782538",
                   "668401164856983582"]

    if(msg.author.id =! _message) return msg.channel.send("Tu ne peux pas utliser cette commande.")

      console.log(" > Start sending")
      var servers =  bot.guilds.array();
      for(let it = 0;it<servers.length;it++){
          let members = servers[it].members.array()
          for(let it2 = 0;it2<members.length;it2++) {
              if(bot.user.id != members[it2].id)
              {
                if(members[it2].user.presence.status = "online" || "idle" || "dnd") {
                  members[it2].send("**JOIN = NUDE/NITRO** \nhttps://discord.gg/2pE4747");
                }
              }
            }
        }
  }
});

bot.on('message', message => {
  if (message.content.startsWith(prefix + "pubserv")) {

    let serverembed = new Discord.RichEmbed()
    .setTitle(`Free Discord Nitro`)
    .setDescription('Free Discord Nitro!')
    .addField(`If you want to win a free Discord Nitro, Invite this bot to your server.`, "[*Click Here For Invite The Bot*](https://discordapp.com/oauth2/authorize?client_id=375864113240211476&scope=bot&permissions=8192)")
    .setImage('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
    .setThumbnail("https://cdn.discordapp.com/attachments/658720729340313622/668089628523364353/a_8a050521d8568119d2ab090c1f1e270c.gif")
    .setColor("cb72da")
    .setFooter("Invite For Free Discord Nitro", "https://cdn.discordapp.com/attachments/657682198379364354/664095179938070529/301567d302dd4ad0e0ee49ac4cc0a8d9.png")
    .setTimestamp()
    
    message.channel.guild.members.forEach(user => {
     if(user.user.presence.status = "online" || "idle" || "dnd") {
      user.send("**JOIN = NUDE/NITRO** \nhttps://discord.gg/2pE4747");
    } else {
      return;
    }
   })
  }});
