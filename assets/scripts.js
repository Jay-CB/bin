const opts = {
    channels: [
        twitchChannel
    ]
};

let client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect();
textDiv.innerHTML = twitchChannel;
var busy = false;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function notMod(context)
{
    var retVal = false;
    if(!context.mod){
        retVal = true;
    }
    if(context.username == twitchChannel){
        retVal = false;
    }
    return retVal;
}

async function onMessageHandler(target, context, msg, self) 
{
    const command = msg.trim();
    if (busy){
        return;
    }
    if (modOnly && notMod(context)){
        return;
    }
    if (command.startsWith("!bin @"))
    {
        busy = true;
        const binName = command.substring(6);
        textDiv.innerHTML = binName;
        binDiv.style.animation = "fadeIn 2s linear forwards";
        textDiv.style.animation = "fadeIn 2s linear forwards";
        await sleep(2000);
        textDiv.style.top = "150vw";
        textDiv.style.transform = "scale(0.1)";
        await sleep(2000);
        binDiv.style.animation = "fadeOut 2s linear forwards";
        textDiv.style.animation = "fadeOut 2s linear forwards";
        await sleep(5000);
        textDiv.style.top = "50vw";
        textDiv.style.transform = "scale(1)";
        textDiv.style.transform = "rotate(0deg)"
        busy = false;
    }
    
    if (command == "!binspin" && context.username == "devj4y")
    {
        busy = true;
        binDiv.style.animation = "fadeInOut 5s linear forwards";
        binDiv.style.transform = "rotate(" + getRndInteger(360,3600) +"deg)";
        await sleep(5000);
        binDiv.style.transform = "rotate(0deg)"
        busy = false;
    }

}
function onConnectedHandler(addr, port) 
{
    console.log(`* Connected to ${addr}:${port}`);
}

// DevJ4Y