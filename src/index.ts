import { Client, Events, GatewayIntentBits, Interaction, CommandInteraction, Message, Guild } from "discord.js";

import { deployCommands } from "./commands/commands";
import { CommandHandler } from "./commands/handler";

import config from "./configs/config.json";

const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});


client.once(Events.ClientReady, () => {
	console.log("Bot is ready!");
});

client.once(Events.GuildCreate, (guild: Guild) => {
	const guildID = guild.id;
	deployCommands(guildID);
});

client.on(Events.InteractionCreate, async (interaction: Interaction) => {
	if (!interaction.isCommand()) { 
		return; 
	}
	const commandName = interaction.commandName as string;
	const commandFunction = CommandHandler.get(commandName);
	if (commandFunction === undefined) { 
		return; 
	}
	commandFunction(interaction);
});

client.login(config.client.token);

