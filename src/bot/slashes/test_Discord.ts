import "reflect-metadata"
import { Discord, Slash, Option, ArgsOf, On, Client } from "@typeit/discord";
import { CommandInteraction } from "discord.js";

@Discord()
class DiscordBot {
  @Slash("add")
  add(
    interaction: CommandInteraction
  ) {
    interaction.reply("TEST");
  }
}