// Module ID: 8064
// Function ID: 8065
// Name: ApplicationPresenceUtils
// Dependencies: [4643, 2]
// Exports: shouldDisableUserPresenceInChannel

// Module 8064 (ApplicationPresenceUtils)
import ChannelStore from "ChannelStore" /* 4643 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/applications/ApplicationPresenceUtils.tsx");

export function shouldDisableUserPresenceInChannel(bot, channelId) {
  let closure_0 = bot;
  const channel = ChannelStore.getChannel(channelId);
  let tmp = null != channel && bot.bot && channel.isPrivate();
  if (tmp) {
    const rawRecipients = channel.rawRecipients;
    tmp = null == rawRecipients.find((id) => id.id === id.id);
  }
  return tmp;
}
