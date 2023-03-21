import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { SlashCommandBuilder } from "@discordjs/builders";

import config from "../configs/config.json";

// ENUM
enum BotCommands {
	ping = "ping"
}

async function deployCommands(guildID: string) {
	const slashCommands = [
		new SlashCommandBuilder()
			.setName(BotCommands.ping)
			.setDescription("Replies with pong!")
	];
	const rest = new REST({ version: "9" })
						.setToken(config.client.token)
	rest.put(Routes.applicationGuildCommands(config.client.id, guildID), { body: slashCommands })
		.then(() => console.log("Successfully registered application commands."))
		.catch(console.error);
}

export { 
	deployCommands,
	BotCommands
}

