// Module ID: 10995
// Function ID: 10996
// Name: MessageUtils
// Dependencies: [4858, 1384, 6728, 2]
// Exports: canViewPotentiallyNSFWChannel, getGuildIdFromMessage

// Module 10995 (MessageUtils)
import AgeGateUtils from "AgeGateUtils" /* 6728 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/MessageUtils.tsx");

export function canViewPotentiallyNSFWChannel(channel_id) {
  const currentUser = UserStore.getCurrentUser();
  const channel = ChannelStore.getChannel(channel_id);
  let tmp3 = null != currentUser && null != channel;
  if (tmp3) {
    const obj = AgeGateUtils;
    tmp3 = !obj.isChannelContentGated(channel);
  }
  return tmp3;
}
export function getGuildIdFromMessage(channel_id) {
  const channel = ChannelStore.getChannel(channel_id.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  return guild_id;
}
