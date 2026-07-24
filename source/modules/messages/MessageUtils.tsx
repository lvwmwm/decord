// Module ID: 10253
// Function ID: 79176
// Name: canViewPotentiallyNSFWChannel
// Dependencies: [1348, 1849, 4345, 2]
// Exports: canViewPotentiallyNSFWChannel, getGuildIdFromMessage

// Module 10253 (canViewPotentiallyNSFWChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("shouldAgeVerifyForAgeGate").fileFinishedImporting("modules/messages/MessageUtils.tsx");

export const canViewPotentiallyNSFWChannel = function canViewPotentiallyNSFWChannel(channel_id) {
  currentUser = currentUser.getCurrentUser();
  const channel = store.getChannel(channel_id);
  let tmp3 = null != currentUser && null != channel;
  if (tmp3) {
    tmp3 = !require(4345) /* shouldAgeVerifyForAgeGate */.isChannelContentGated(channel);
    const obj = require(4345) /* shouldAgeVerifyForAgeGate */;
  }
  return tmp3;
};
export const getGuildIdFromMessage = function getGuildIdFromMessage(channel_id) {
  const channel = store.getChannel(channel_id.channel_id);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  let tmp3;
  if (null != guild_id) {
    tmp3 = guild_id;
  }
  return tmp3;
};
