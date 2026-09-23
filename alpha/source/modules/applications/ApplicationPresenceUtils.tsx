// Module ID: 8575
// Function ID: 8576
// Name: ApplicationPresenceUtils
// Dependencies: [2042, 2]
// Exports: shouldDisableUserPresenceInChannel

// Module 8575 (ApplicationPresenceUtils)
import ChannelStore from "ChannelStore" /* 2042 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/ApplicationPresenceUtils.tsx");

export const shouldDisableUserPresenceInChannel = function shouldDisableUserPresenceInChannel(bot, channelId) {
  const channel = ChannelStore.getChannel(channelId);
  let tmp = null != channel && bot.bot && channel.isPrivate();
  if (tmp) {
    const rawRecipients = channel.rawRecipients;
    tmp = null == rawRecipients.find((id) => id.id === bot.id);
  }
  return tmp;
};
