const embed = require('discord.js');

const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = 'ko!'

client.on("ready", () => {client.user.setGame(' k!yardım | Meeeee! | Sunucu Sayısı: ' + client.guilds.size , 'https://twitch.tv/TheGodFather')

});

client.on('message', msg => { 


if(msg.content === prefix + 'yardım') { 

let embed = new Discord.RichEmbed()  


.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))  

.addField("2 çeşit yardım menüm var", 

"Özel mesaj (Yardım menüsünü özel mesaj olarak atar.)\nNormal yardım (Sunucudaki chate atar.)\n**Özel mesaj için = ko!öyardım**\n**Normal yardım için = ko!nyardım**") 


msg.channel.send({embed: embed})  


} 

});


client.on('message', msg => { 
if (msg.content === prefix + 'öyardım') { 















let embed = new Discord.RichEmbed() 















.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 



























.addField("Komutlar", 














"ko!özellikler \nko!atatürk \nko!izmirmarşı") 


















.setFooter('Bot yapımcısı: Emir#5218') 















msg.member.send({embed: embed}) 















}















});



client.on('message', msg => { 































if (msg.content === prefix + 'nyardım') { 































let embed = new Discord.RichEmbed() 































.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 





























































.addField("Komutlar", 































"ko!özellikler \nko!atatürk \nko!izmirmarşı") 



































.setFooter('Bot yapımcısı: Emir#5218') 



















msg.channel.send({embed: embed})   































}































});
client.on('message', msg => { 















if(msg.content === prefix + 'öyardım') { 















let embed = new Discord.RichEmbed()  















.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))  















.addField("Özel mesaj olarak gönderdim", 















"Özel mesajlarını kontrol et! :postbox:") 















msg.channel.send({embed: embed})  















} 















});

 client.on('message', msg => {



if (msg.content === prefix + 'atatürk') { 



var cevaplar = ['https://cdn.discordapp.com/attachments/476524963592011783/476541365421998081/220px-Ataturk1930s.jpg','https://goo.gl/wuiQH2','https://goo.gl/7y9w42','https://goo.gl/vkeHXc','https://goo.gl/aw3ZbJ','https://goo.gl/dgv1zq','https://goo.gl/MDccen','https://goo.gl/opgQfR','https://goo.gl/V19wWk','https://goo.gl/HL3isK']; 



var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 



msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) 



} 



});


 client.on('message', msg => {



if (msg.content === prefix + 'ekip') { 



let embed = new Discord.RichEmbed() 



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 



.addField("Yaşa Mustafa Kemal Paşa Yaşa!", 



"https://www.youtube.com/watch?v=kxyifJ2ELD8&t=36s") 



msg.channel.send({embed: embed}) 



} 



});
client.login(process.env.BOT_TOKEN);
