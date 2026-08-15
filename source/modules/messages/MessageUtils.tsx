// Module ID: 10018
// Function ID: 10019
// Name: canViewPotentiallyNSFWChannel
// Dependencies: [1391, 1922, 5252, 2]
// Exports: canViewPotentiallyNSFWChannel, getGuildIdFromMessage

// Module 10018 (canViewPotentiallyNSFWChannel)
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("shouldShowAgeGateForVoiceChannel").fileFinishedImporting("modules/messages/MessageUtils.tsx");

export const canViewPotentiallyNSFWChannel = function canViewPotentiallyNSFWChannel(channel_id) {
  currentUser = currentUser.getCurrentUser();
  const channel = store.getChannel(channel_id);
  let tmp3 = null != currentUser && null != channel;
  if (tmp3) {
    tmp3 = !require(5252) /* shouldShowAgeGateForVoiceChannel */.isChannelContentGated(channel);
    const obj = require(5252) /* shouldShowAgeGateForVoiceChannel */;
  }
  return tmp3;
};
export const getGuildIdFromMessage = function getGuildIdFromMessage(channel_id) {
  const channel = store.getChannel(channel_id.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  return guild_id;
};
