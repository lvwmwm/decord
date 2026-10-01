// Module ID: 11510
// Function ID: 11511
// Name: useCommandContext
// Dependencies: [19, 2067, 2]
// Exports: getCommandContext, useCommandContext

// Module 11510 (useCommandContext)
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export const getCommandContext = function getCommandContext(type) {
  let obj;
  if ("contextless" === type.type) {
    obj = { channel: "Array", guild: "channel" };
  } else {
    obj = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
  }
  return obj;
};
export const useCommandContext = function useCommandContext(context) {
  react = context;
  const items = [context];
  return react.useMemo(() => {
    let obj;
    if ("contextless" === context.type) {
      obj = { channel: "Array", guild: "channel" };
    } else {
      obj = { channel: context.channel, guild: GuildStore.getGuild(context.channel.guild_id) };
    }
    return obj;
  }, items);
};
