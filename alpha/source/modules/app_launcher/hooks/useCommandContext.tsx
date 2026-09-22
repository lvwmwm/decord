// Module ID: 12285
// Function ID: 12286
// Name: useCommandContext
// Dependencies: [19, 2064, 2]
// Exports: getCommandContext, useCommandContext

// Module 12285 (useCommandContext)
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2064 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export const getCommandContext = function getCommandContext(type) {
  if ("contextless" === type.type) {
    let obj = { channel: "Array", guild: "flex" };
  } else {
    obj = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
  }
  return obj;
};
export const useCommandContext = function useCommandContext(context) {
  noop = context;
  const items = [context];
  return noop.useMemo(() => {
    if ("contextless" === type.type) {
      let obj = { channel: "Array", guild: "flex" };
    } else {
      obj = { channel: tmp.channel, guild: GuildStore.getGuild(tmp.channel.guild_id) };
    }
    return obj;
  }, items);
};
