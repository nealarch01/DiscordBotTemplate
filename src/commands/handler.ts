import { CommandInteraction } from "discord.js";

import { BotCommands } from "./commands";

const CommandHandler = new Map<string, Function>();

CommandHandler.set(BotCommands.ping, async (interaction: CommandInteraction) => {
	interaction.reply("pong!");	
});

export {
	CommandHandler
}

