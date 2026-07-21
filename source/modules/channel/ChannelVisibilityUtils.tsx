// Module ID: 10214
// Function ID: 78920
// Name: isChannelCurrentlyVisible
// Dependencies: []
// Exports: isChannelCurrentlyVisible

// Module 10214 (isChannelCurrentlyVisible)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = channelId.getChannelId(guildId.getGuildId());
  let tmp2 = channelId === id;
  if (!tmp2) {
    tmp2 = currentSidebarChannelId.getCurrentSidebarChannelId(channelId) === id;
  }
  return tmp2;
};
