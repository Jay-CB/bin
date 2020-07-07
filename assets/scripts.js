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
function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function notMod(context)
{
    var retVal = false;
    if(!context.mod)
    {
        retVal = true;
    }
    if(context.username == twitchChannel)
    {
        retVal = false;
    }
    return retVal;
}

async function onMessageHandler(target, context, msg, self) 
{
    const command = msg.trim();
    if (busy)
    {
        return;
    }
    if (modOnly && notMod(context))
    {
        return;
    }
    if (command.startsWith("!bin @"))
    {
        busy = true; // TODO: Sound effect?
        const binName = command.substring(6);
        textDiv.style.fontSize = (textSize / binName.length) + "vw";
        await sleep(500);
        textDiv.style.transition = transtionTime + "s ease-in-out";
        binDiv.style.transition = transtionTime + "s ease-in-out";
        textDiv.innerHTML = binName;
        binDiv.style.animation = "fadeIn " + transtionTime + "s linear forwards";
        textDiv.style.animation = "fadeIn " + transtionTime + "s linear forwards";
        await sleep(transtionTime * 1000);
        textDiv.style.top = "50vh";
        textDiv.style.transform = "scale(0.1)";
        await sleep(transtionTime * 1000);
        binDiv.style.animation = "fadeOut " + transtionTime + "s linear forwards";
        textDiv.innerHTML = "";
        textDiv.style.transition = "none";
        binDiv.style.transition = "none";
        await sleep(5000);
        textDiv.style.top = "25vh";
        textDiv.style.transform = "scale(1)";
        textDiv.style.transform = "rotate(0deg)"
        busy = false;
    }
    if (command == "!binspin" && context.username == "devj4y")
    {
        busy = true;
        binDiv.style.transition = "2s ease-in-out";
        binDiv.style.animation = "fadeInOut 4s linear forwards";
        binDiv.style.transform = "rotate(" + getRndInteger(360,3600) +"deg)";
        await sleep(5000);
        binDiv.style.transform = "rotate(0deg)"
        binDiv.style.transition = "none";
        busy = false;
    }

}
function onConnectedHandler(addr, port) 
{
    console.log(`* Connected to ${addr}:${port}`);
}

// DevJ4Y