import "reflect-metadata";
import { Intents, ClientOptions } from "discord.js";
import { Client } from "@typeit/discord";
require("dotenv").config()
const options = new Client ({

})

async function start() {
    const client = new Client ({
        classes: [
            `${__dirname}**/*Discord.ts`
        ],
        silent: false,
    });

    await client.login(process.env.BOT_TOKEN! as string)
}

start()