// Module ID: 12660
// Function ID: 12661
// Name: useCommandContext
// Dependencies: [19, 5014, 2]
// Exports: getCommandContext, useCommandContext

// Module 12660 (useCommandContext)
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5014 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export function getCommandContext(type) {
  let obj;
  if ("contextless" === type.type) {
    obj = { channel: "Path", guild: "count" };
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
      obj = { channel: "Path", guild: "count" };
    } else {
      obj = { channel: context.channel, guild: GuildStore.getGuild(context.channel.guild_id) };
    }
    return obj;
  }, items);
}
