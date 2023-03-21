import { registerCommands } from "./src/commands/commands";

const guildID = "";

registerCommands(guildID)
	.then(() => {
		console.log("Registered commands.");
	});

