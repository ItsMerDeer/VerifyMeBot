module.exports = {
    name: 'verify',
    description: "Verify yourself with this command!",
    execute(message, args){

        let role = message.member.roles.cache.some(r => r.name === "Test");


        if(message.member.roles.cache.some(r => r.name === "Test")){
            message.channel.send('It seems that you are already Verified as a Member of the Server! If I got this wrong please Report it to ItsMeDeer!')

        } else {
            message.channel.send('You are now Verified as a Member of the Server!');
            message.member.roles.add('720300899641327688').catch(console.error);
        }

    }
}
