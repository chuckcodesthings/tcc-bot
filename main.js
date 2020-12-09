const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('TCCB is online!');
});

client.on('guildMemberAdd', guildMember => {
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

  guildMember.roles.add(welcomeRole);
  guildMember.guild.channels.cache.get('700492943684796548').send(`Welcome <@${guildMember.user.id}> to **The Cubing Club**! Make sure to check out <#700492942346813540>!`)
});

client.on('guildMemberRemove', guildMember => {
  guildMember.guild.channels.cache.get('700492943684796548').send(`<@${guildMember.user.id}> just left the server, I hope he DNFs his next solve...`);
})

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'charles') {
    client.commands.get('charles').execute(message, args, Discord);
  } else if (command === 'comp') {
    client.commands.get('comp').execute(message, args, Discord);
  } else if (command === 'embed') {
    client.commands.get('embed').execute(message, args, Discord);
  } else if (command == 'clear') {
    client.commands.get('clear').execute(message, args, Discord);
  } else if (command == 'mc') {
    client.commands.get('mc').execute(message, args, Discord);
  }
});

client.login('NzA5MDQ4ODcxMDY5Njc5NzA3.XrgPOA.xVAxLwZXY68pgSvHOHFNcFk5WcE');

// Obviously not the real bot token, lol
