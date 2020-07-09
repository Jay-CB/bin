// Your channel name, lowercase - replace devj4y
const twitchChannel = "devj4y";

// Transition timer - replace 2
const transtionTime = 2;

// Fade timer - replace 2
const fadeTime = 2;

// The size of the text - replace 100
const textSize = 100;

// The colour of the text - replace white
// Can also use hex format like this #4287f5
const textColour = "white";

// Text outline size, 0 for no outline - replace 2
const textOutlineSize = 2;

// Text outline colour - replace black
// Can also use hex format like this #4287f5
const textOutlineColour = "black"

// The text font, use a google fonts to find one - replace Capriola
// Find a font here https://fonts.google.com/
// Just copy the name of the font as is
const font = "Capriola";

// true - the text is bold
// false - the text is normal
const boldText = false;

// true - only mods can use it
// false - anyone can use it
const modOnly = false;


// Use this to test the settings
// will save you from using the command to see any setting updates
// replace false with true to turn on
const isTesting = false;


// Add a browser source in OBS, the size can be whatever you like 
// but the height should be double the width
// select local file and add the index.html
// scroll and check "refresh browser when secene becomes active"

// ----- Dont Touch below here -----
textDiv.style.color = textColour;
textDiv.style.fontFamily = font;
textDiv.style.fontSize = (textSize / twitchChannel.length) + "vw";
if (boldText){textDiv.style.fontWeight = "bold";}
if (isTesting){binDiv.style.opacity = "1";textDiv.style.opacity = "1";}
textDiv.style.webkitTextStroke = textOutlineSize + "px " + textOutlineColour;
var head = document.getElementsByTagName('HEAD')[0];  
var link = document.createElement('link'); 
link.rel = 'stylesheet';  
link.href = 'https://fonts.googleapis.com/css?family=' + font;  
head.appendChild(link);  
// DevJ4Y