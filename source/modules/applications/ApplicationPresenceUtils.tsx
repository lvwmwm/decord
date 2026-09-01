// Module ID: 8909
// Function ID: 8910
// Name: shouldDisableUserPresenceInChannel
// Dependencies: [1387, 2]
// Exports: shouldDisableUserPresenceInChannel

// Module 8909 (shouldDisableUserPresenceInChannel)
import closure_0 from "ensureGuildLoaded" /* 1387 */;

const result = require("set").fileFinishedImporting("modules/applications/ApplicationPresenceUtils.tsx");

export const shouldDisableUserPresenceInChannel = function shouldDisableUserPresenceInChannel(bot, channelId) {
  let channel = bot;
  channel = channel.getChannel(channelId);
  let tmp = null != channel && bot.bot && channel.isPrivate();
  if (tmp) {
    const rawRecipients = channel.rawRecipients;
    tmp = null == rawRecipients.find((id) => id.id === bot.id);
  }
  return tmp;
};
