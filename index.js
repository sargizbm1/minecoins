const { Client, GatewayIntentBits } = require('discord.js');

// Define your bot token directly in the code
const DISCORD_TOKEN = 'MTI5ODg4NTAzMjk4Mjc0NTE0OA.GLI_np.bzgIVslnGoB43FAxWvmkMEPbsogKMCDdBz2JKk';

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// When the bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Listen for messages
client.on('messageCreate', (message) => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    // Respond to the "!roll" command
    if (message.content === '!roll') {
        const roll = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
        message.channel.send(`You rolled a ${roll}! 🎲`);
    }
});

// Login to Discord with your bot token
client.login(DISCORD_TOKEN);
