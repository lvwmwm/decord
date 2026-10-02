// Module ID: 12213
// Function ID: 12214
// Name: MessageUtils
// Dependencies: [2051, 1378, 5047, 2]
// Exports: canViewPotentiallyNSFWChannel, getGuildIdFromMessage

// Module 12213 (MessageUtils)
import AgeGateUtils from "AgeGateUtils" /* 5047 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1378 */;
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
