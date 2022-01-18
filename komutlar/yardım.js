const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("TheFunt | Bot Yardım")
  .setDescription('')
  .setColor('RANDOM')
  .addField("**Küfür Koruması**", `Küfür Engelleme Açmak İçin /küfür-engelle aç "kapatmak için" /küfür-engelle kapat`)
  .addField("**Reklam Koruması**", `Link Engelleme Açmak İçin /link-engelle aç "kapatmak için" /link-engelle kapat`)
  .addField("**Everyone Koruması**", `Açmak için /everyone-engelle aç Kapatmak için /everyone-engelle kapat`)
  .addField("**Giriş Çıkış Ayarlaması**", `/giriş-çıkış-ayarla #kanal`)
  .addField("**Hazır Sunucu**", `Hazır Sunucu Oluşturmak İçin /sunucu-kur`)
  .addField("**Durum Reklam Taraması**", `Durumda Olan Reklamları Gösterir /reklam-taraması`)
  .addField("**Slowmode**", `Sohbete Yavaşlık Ekler /slowmode 1/10`)
  .addField("**Sohbet Temizleme**", `/temizle "sayı" Sohbet Temizler`)
  .addField("**Bota Yazı Yazdırma**", `Bota Yazı Yazdırırsın /yaz "yazı" `)
  .addField("**Sunucu Resmini Görme**", `/sunucuresmi Sunucunun Resmini Gösterir`)
  .addField("**Avatarınızı Görme**", `/avatar [@etiket] Kişinin Profilini Gösterir`)
  .addField("**İstatistik**", `/istatistik ,Botun İstatistiğini Gösterir`)
  .addField("**Oylama**", `/oylama "yazı" Oylama başlatır.`)
  .addField("**Profilim**", `/profilim Profil Resmini Gösterir.`)
  .addField("**Botun Pingini Görme**", `/ping Botun Pingini Gösterir.`)
  .addField("**Kanal Bilgi**", `/uygunsuz , Uygunsuz İçerik Olup Olmadığını Belirtirsiniz.`)
  .addField("**Stres Çarkı Çevir**", `/stresçarkı , Stres Çarkı Çevirir.`)
  .addField("**Slot Oyunu**", `/slots , Slot Oyunu.`)
  .addField("**Wasted Efekti**", `/wasted , Profil Resmine Wasted Efekti Ekler.`)
  .addField("**Sunucu İstatistik**", `/statayarla , Sunucu İstatistik.`)
  .setFooter('TheFunt | Discord Bot')
if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oyun', 'games', 'game', 'oyn'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};