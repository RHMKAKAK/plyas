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
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1282219539140055101/1314465929869922364/20240609_172952_0000.png?ex=6753df4b&is=67528dcb&hm=977930123bb55b8421ec6cb8ec3f9d901f7e01debd2731920c27b345c8aeb53e&')
        .setAssetsLargeText('Testimoni 850+')
        .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1282219539140055101/1314465930251735110/1196765932119408711.gif?ex=6753df4b&is=67528dcb&hm=e480f9c0bbbbf1cbffe299954765ac0142d1fdd6c13a8ecb8a70ba03736c74fe&')
        .setAssetsSmallText('Verified')
        .addButton('Join Warmut Store', 'https://discord.gg/warmuts')
        .addButton('Slow Respon? Tekan Ini', 'https://wa.me/6283102229967');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












