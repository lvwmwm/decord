// Module ID: 8584
// Function ID: 8585
// Name: ApplicationPresenceUtils
// Dependencies: [2068, 2]
// Exports: shouldDisableUserPresenceInChannel

// Module 8584 (ApplicationPresenceUtils)
import ChannelStore from "ChannelStore" /* 2068 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/applications/ApplicationPresenceUtils.tsx");

export const shouldDisableUserPresenceInChannel = function shouldDisableUserPresenceInChannel(bot, channelId) {
  let closure_0 = bot;
  const channel = ChannelStore.getChannel(channelId);
  let tmp = null != channel && bot.bot && channel.isPrivate();
  if (tmp) {
    const rawRecipients = channel.rawRecipients;
    tmp = null == rawRecipients.find((id) => id.id === id.id);
  }
  return tmp;
};
