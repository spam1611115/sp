 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("546754191813640195")
setInterval(function() {
channel.send(`free crredioutvuj5nj/98`);
}, 30)
})


client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "1c") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});
client.login(process.env.NTU1MDQ1ODMyNzEwMTYwMzk0.D2p2jA.-hMOnHWYqu6IagkfP9yZLW_qNqw
); 
