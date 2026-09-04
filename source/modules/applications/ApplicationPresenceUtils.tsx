// Module ID: 8162
// Function ID: 8163
// Name: shouldDisableUserPresenceInChannel
// Dependencies: [1386, 2]
// Exports: shouldDisableUserPresenceInChannel

// Module 8162 (shouldDisableUserPresenceInChannel)
import closure_0 from "ensureGuildLoaded" /* 1386 */;

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
