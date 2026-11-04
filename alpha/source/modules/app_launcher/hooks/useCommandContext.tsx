// Module ID: 12652
// Function ID: 12653
// Name: useCommandContext
// Dependencies: [19, 5012, 2]
// Exports: getCommandContext, useCommandContext

// Module 12652 (useCommandContext)
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5012 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export function getCommandContext(type) {
  let obj;
  if ("contextless" === type.type) {
    obj = { channel: "PX_8", guild: "__closure" };
  } else {
    obj = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
  }
  return obj;
}
export function useCommandContext(context) {
  react = context;
  const items = [context];
  return react.useMemo(() => {
    let obj;
    if ("contextless" === context.type) {
      obj = { channel: "PX_8", guild: "__closure" };
    } else {
      obj = { channel: context.channel, guild: GuildStore.getGuild(context.channel.guild_id) };
    }
    return obj;
  }, items);
}
