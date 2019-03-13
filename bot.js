 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("حط الاي دي حق الروم")
setInterval(function() {
channel.send(`free cred0ohb bfghbvfhmm`);
}, 30)
})


client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "1cا") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});
client.login(NTU1MDQ1ODMyNzEwMTYwMzk0.D2p2jA.-hMOnHWYqu6IagkfP9yZLW_qNqw
); 
