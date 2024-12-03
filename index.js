const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1258311684334944286')
        .setType('PLAYING')
        .setURL('https://discord.gg/Warmuts')
        .setState('& N1tro Murah, Aman, Begaransi')
        .setName('Warmut Store')
        .setDetails('Menjual Berbagai App Premium')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1282219539140055101/1313467574608068608/20240609_172952_0000.png?ex=67503d80&is=674eec00&hm=3cbc348f7242b5911c4892d315f71ae4be2ffe30e31bb99cb3eb9e993fdc5579&=&format=webp&quality=lossless&width=400&height=400')
        .setAssetsLargeText('Testimoni 850+')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1282219539140055101/1313467574251687976/verif.gif?ex=67503d80&is=674eec00&hm=501b8bd7f0302485285a5bddb8b1466c9517b7fc34adbab02ddc8319393203b0&=&width=81&height=81')
        .setAssetsSmallText('Verified')
        .addButton('Join Warmut Store', 'https://discord.gg/warmuts')
        .addButton('Slow Respon? Tekan Ini', 'https://wa.me/6283102229967');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












