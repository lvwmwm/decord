// Module ID: 13436
// Function ID: 13437
// Name: MessageUtils
// Dependencies: [2068, 1392, 6142, 2]
// Exports: canViewPotentiallyNSFWChannel, getGuildIdFromMessage

// Module 13436 (MessageUtils)
import AgeGateUtils from "AgeGateUtils" /* 6142 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/MessageUtils.tsx");

export const canViewPotentiallyNSFWChannel = function canViewPotentiallyNSFWChannel(channel_id) {
  const currentUser = UserStore.getCurrentUser();
  const channel = ChannelStore.getChannel(channel_id);
  let tmp3 = null != currentUser && null != channel;
  if (tmp3) {
    const obj = AgeGateUtils;
    tmp3 = !obj.isChannelContentGated(channel);
  }
  return tmp3;
};
export const getGuildIdFromMessage = function getGuildIdFromMessage(channel_id) {
  const channel = ChannelStore.getChannel(channel_id.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  return guild_id;
};
