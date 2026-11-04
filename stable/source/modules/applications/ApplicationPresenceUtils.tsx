// Module ID: 8754
// Function ID: 8755
// Name: ApplicationPresenceUtils
// Dependencies: [4855, 2]
// Exports: shouldDisableUserPresenceInChannel

// Module 8754 (ApplicationPresenceUtils)
import ChannelStore from "ChannelStore" /* 4855 */;
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
