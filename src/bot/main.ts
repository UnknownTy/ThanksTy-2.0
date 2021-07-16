import "reflect-metadata";
import { Intents } from "discord.js";
import { Client } from "@typeit/discord";
require("dotenv").config()

export async function start() {
    const client = new Client ({
        intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
          ],
        classes: [
            `${__dirname}/*/*Discord.ts`,
            `${__dirname}/*/*Discord.js`,
        ],
        silent: false,
        slashGuilds: [process.env.BOT_TESTSERVER! as string]
    });
    
    client.once("ready", async () =>{
        await client.initSlashes();
    })
    
    // client.on("interactionCreate", (interaction) => {
    //     client.executeSlash(interaction);
    // })
    
    await client.login(process.env.BOT_TOKEN! as string)
}
