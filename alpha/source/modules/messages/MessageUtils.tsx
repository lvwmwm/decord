// Module ID: 12520
// Function ID: 12521
// Name: MessageUtils
// Dependencies: [2064, 1390, 5931, 2]
// Exports: canViewPotentiallyNSFWChannel, getGuildIdFromMessage

// Module 12520 (MessageUtils)
import AgeGateUtils from "AgeGateUtils" /* 5931 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import UserStore from "UserStore" /* 1390 */;
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
