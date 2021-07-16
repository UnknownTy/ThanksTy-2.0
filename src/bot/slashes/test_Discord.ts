import "reflect-metadata"
import { Discord, Slash, Option, ArgsOf, On, Client } from "@typeit/discord";
import { CommandInteraction } from "discord.js";
@Discord()
abstract class DiscordBot {
  @Slash("add")
  add(
      [content]: ArgsOf<"interaction">,
    @Option("x", { description: "x value" })
    x: number,
    @Option("y", { description: "y value" })
    y: number,

    interaction: CommandInteraction
  ) {
      console.log(content)
    interaction.reply(String(x + y));
  }

  @On("interactionCreate")
  private onInteraction(
      [message]: ArgsOf<"interactionCreate">,
      client: Client,
      interaction: CommandInteraction
  ) {
      console.log(message.id)
      client.executeSlash(interaction)
  }
}