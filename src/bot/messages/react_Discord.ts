import {
    Discord,
    On,
    ArgsOf,
    Description
} from "@typeit/discord"

const activators = ["thanks ty", "ty ty", "tyty", "ok ty"]
const emoji = ":WaitWhat:754104719554772994"

@Discord()
abstract class DiscordBot {
    @On("messageCreate")
    private onMessage([message]: ArgsOf<"message">) {
        let baseContent = message.content.toLowerCase()
        if(baseContent.startsWith("link pl")){
            //If a user requests a link, check the DB to see if one is currently active.
            //If a class is active, send the appropriate embed
            message.channel.send("Nothing available at the moment! FIXME - ACCESS DATABASE")
        } else if(activators.some(term => baseContent.includes(term))){
            //If the user is not looking for a link, instead check
            //To see if they are trying to thank the bot creator (Ty)
            message.react(emoji)
        }
    }
}