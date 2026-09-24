// Module ID: 12370
// Function ID: 12371
// Name: useCommandContext
// Dependencies: [19, 2066, 2]
// Exports: getCommandContext, useCommandContext

// Module 12370 (useCommandContext)
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2066 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export const getCommandContext = function getCommandContext(type) {
  if ("contextless" === type.type) {
    let obj = { channel: "channel", guild: "channelId" };
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
      let obj = { channel: "channel", guild: "channelId" };
    } else {
      obj = { channel: tmp.channel, guild: GuildStore.getGuild(tmp.channel.guild_id) };
    }
    return obj;
  }, items);
};
