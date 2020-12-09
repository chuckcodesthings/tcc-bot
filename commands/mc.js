module.exports = {
  name: 'mc',
  execute(message, args) {
    var mc = "**Members\n**" + (message.guild.memberCount);
    message.channel.send({
      embed: {
        color: 3447003,
        description: mc
      }
    });
  }
};