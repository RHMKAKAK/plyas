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
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1282219539140055101/1311674072878284880/20240609_172952_0000.png?ex=6749b72c&is=674865ac&hm=cb4d6d9c2bc378b27eaa2dd3ea96cc1292790ebd0ec82d8bed1dadef9e153c0d&=&format=webp&quality=lossless&width=400&height=400')
        .setAssetsLargeText('Testimoni 850+')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1282219539140055101/1311674073616748574/1196765932119408711.gif?ex=6749b72c&is=674865ac&hm=3827595cf4fbf63424fcdd3b40de53501f8c5837adfbff8ffc0f967e95e00400&=&width=81&height=81')
        .setAssetsSmallText('Verified')
        .addButton('Join Warmut Store', 'https://discord.gg/warmuts')
        .addButton('Slow Respon? Tekan Ini', 'https://wa.me/6283102229967');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












