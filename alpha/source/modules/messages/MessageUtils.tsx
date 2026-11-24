// Module ID: 10458
// Function ID: 10459
// Name: MessageUtils
// Dependencies: [4766, 1386, 6707, 2]
// Exports: canViewPotentiallyNSFWChannel, getGuildIdFromMessage

// Module 10458 (MessageUtils)
import AgeGateUtils from "AgeGateUtils" /* 6707 */;
import ChannelStore from "ChannelStore" /* 4766 */;
import UserStore from "UserStore" /* 1386 */;
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
