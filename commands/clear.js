module.exports = {
  name: 'clear',
  description: 'This is a clear command',
  async execute(message, args, Discord) {

    if (message.member.roles.cache.has('785193794672132106')) {

      if (!args[0]) return message.reply("are you dumb?");
      if (isNaN(args[0])) return message.reply("breh have you ever went to school idiot");

      if (args[0] > 10) return message.reply("woah chill bruh");
      if (args[0] < 1) return message.reply('bro are you fucking dumb')

      await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
        message.channel.bulkDelete(messages)
      });
    } else {
      message.channel.send('bruh nice try, kiddo')
    }


  }
}
