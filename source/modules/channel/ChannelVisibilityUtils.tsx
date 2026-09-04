// Module ID: 10016
// Function ID: 10017
// Name: isChannelCurrentlyVisible
// Dependencies: [7220, 1980, 4302, 2]
// Exports: isChannelCurrentlyVisible

// Module 10016 (isChannelCurrentlyVisible)
import closure_0 from "handlePermissionsChange" /* 7220 */;
import closure_1 from "handleConnectionOpen" /* 1980 */;
import closure_2 from "handleConnectionOpen" /* 4302 */;

const result = require("set").fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  channelId = channelId.getChannelId(guildId.getGuildId());
  let tmp2 = channelId === id;
  if (!tmp2) {
    tmp2 = currentSidebarChannelId.getCurrentSidebarChannelId(channelId) === id;
  }
  return tmp2;
};
