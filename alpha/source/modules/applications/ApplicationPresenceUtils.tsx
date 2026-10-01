// Module ID: 7859
// Function ID: 7860
// Name: ApplicationPresenceUtils
// Dependencies: [2044, 2]
// Exports: shouldDisableUserPresenceInChannel

// Module 7859 (ApplicationPresenceUtils)
import ChannelStore from "ChannelStore" /* 2044 */;

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
