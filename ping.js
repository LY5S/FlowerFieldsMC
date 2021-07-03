const { Message } = require("discord.js");

module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args) {

        if(message.member.roles.cache.has('844123301717737493')){
        message.channel.send('pong!')


        } else {
            message.channel.send('You have insufficent permissions to execute that command.');
        }


    }
}