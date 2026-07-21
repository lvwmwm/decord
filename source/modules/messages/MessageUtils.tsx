// Module ID: 10210
// Function ID: 78900
// Name: canViewPotentiallyNSFWChannel
// Dependencies: []
// Exports: canViewPotentiallyNSFWChannel, getGuildIdFromMessage

// Module 10210 (canViewPotentiallyNSFWChannel)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/messages/MessageUtils.tsx");

export const canViewPotentiallyNSFWChannel = function canViewPotentiallyNSFWChannel(channel_id) {
  const currentUser = currentUser.getCurrentUser();
  const channel = store.getChannel(channel_id);
  let tmp3 = null != currentUser && null != channel;
  if (tmp3) {
    tmp3 = !arg1(dependencyMap[2]).isChannelContentGated(channel);
    const obj = arg1(dependencyMap[2]);
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
