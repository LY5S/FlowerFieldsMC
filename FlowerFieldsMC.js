const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '❀';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandfFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandfFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('FlowerFieldsMC is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);

    }
});

client.login('');
