// Module ID: 10192
// Function ID: 10193
// Name: isChannelCurrentlyVisible
// Dependencies: [6135, 1980, 4299, 2]
// Exports: isChannelCurrentlyVisible

// Module 10192 (isChannelCurrentlyVisible)
import closure_0 from "handlePermissionsChange" /* 6135 */;
import closure_1 from "handleConnectionOpen" /* 1980 */;
import closure_2 from "handleConnectionOpen" /* 4299 */;

const result = require("set").fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  channelId = channelId.getChannelId(guildId.getGuildId());
  let tmp2 = channelId === id;
  if (!tmp2) {
    tmp2 = currentSidebarChannelId.getCurrentSidebarChannelId(channelId) === id;
  }
  return tmp2;
};
