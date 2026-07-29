// Module ID: 11206
// Function ID: 11207
// Name: getCommandContext
// Dependencies: [19, 1862, 2]
// Exports: getCommandContext, useCommandContext

// Module 11206 (getCommandContext)
import noop from "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";

const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export const getCommandContext = function getCommandContext(type) {
  if ("contextless" === type.type) {
    let obj = { channel: "dispatch", guild: "isArray" };
  } else {
    obj = { channel: null, guild: null };
    obj[0] = type.channel;
    obj[1] = guild.getGuild(type.channel.guild_id);
  }
  return obj;
};
export const useCommandContext = function useCommandContext(context) {
  const React = context;
  const items = [context];
  return React.useMemo(() => {
    if ("contextless" === type.type) {
      let obj = { channel: "dispatch", guild: "isArray" };
    } else {
      obj = { channel: null, guild: null };
      obj[0] = tmp.channel;
      obj[1] = outer1_1.getGuild(tmp.channel.guild_id);
    }
    return obj;
  }, items);
};
