// Module ID: 12478
// Function ID: 12479
// Name: useCommandContext
// Dependencies: [19, 4914, 2]
// Exports: getCommandContext, useCommandContext

// Module 12478 (useCommandContext)
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export function getCommandContext(type) {
  let obj;
  if ("contextless" === type.type) {
    obj = { channel: "displayName", guild: "isArray" };
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
      obj = { channel: "displayName", guild: "isArray" };
    } else {
      obj = { channel: context.channel, guild: GuildStore.getGuild(context.channel.guild_id) };
    }
    return obj;
  }, items);
}
