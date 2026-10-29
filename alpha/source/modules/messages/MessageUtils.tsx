// Module ID: 14215
// Function ID: 14216
// Name: MessageUtils
// Dependencies: [4857, 1389, 6721, 2]
// Exports: canViewPotentiallyNSFWChannel, getGuildIdFromMessage

// Module 14215 (MessageUtils)
import AgeGateUtils from "AgeGateUtils" /* 6721 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import UserStore from "UserStore" /* 1389 */;
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
