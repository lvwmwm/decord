// Module ID: 8720
// Function ID: 8721
// Name: shouldDisableUserPresenceInChannel
// Dependencies: [1372, 2]
// Exports: shouldDisableUserPresenceInChannel

// Module 8720 (shouldDisableUserPresenceInChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

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
