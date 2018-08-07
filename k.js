const embed = require('discord.js');

const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = 'k!'

client.on("ready", () => {client.user.setGame(' ee!yardım | COME BACK! | Sunucu Sayısı: ' + client.guilds.size , 'https://twitch.tv/TheGodFather')

});

client.login(process.env.BOT_TOKEN);
