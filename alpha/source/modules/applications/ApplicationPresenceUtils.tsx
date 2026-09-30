// Module ID: 7872
// Function ID: 7873
// Name: ApplicationPresenceUtils
// Dependencies: [2045, 2]
// Exports: shouldDisableUserPresenceInChannel

// Module 7872 (ApplicationPresenceUtils)
import ChannelStore from "ChannelStore" /* 2045 */;

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
