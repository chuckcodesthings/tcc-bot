module.exports = {
  name: 'embed',
  description: 'Embeds',
  execute(message, args, Discord) {

    const newEmbed = new Discord.MessageEmbed()
      .setColor('#E8DA3B')
      .setTitle('Announcement')
      .setAuthor('Charles', 'https://i.imgur.com/PhP8iTH.png')
      .setDescription('Hi guys, as you have probably seen I just coded my own bot for the server, I will add new features soon. Right now the commands are -charles, -comp and -clear. Let me know what you think!')
      .setTimestamp()
      .setFooter('Bababooey')
    message.channel.send(newEmbed);
  }

}
