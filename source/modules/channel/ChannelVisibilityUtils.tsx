// Module ID: 10108
// Function ID: 10109
// Name: isChannelCurrentlyVisible
// Dependencies: [6092, 1982, 4268, 2]
// Exports: isChannelCurrentlyVisible

// Module 10108 (isChannelCurrentlyVisible)
import closure_0 from "handlePermissionsChange" /* 6092 */;
import closure_1 from "handleConnectionOpen" /* 1982 */;
import closure_2 from "handleConnectionOpen" /* 4268 */;

const result = require("set").fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  channelId = channelId.getChannelId(guildId.getGuildId());
  let tmp2 = channelId === id;
  if (!tmp2) {
    tmp2 = currentSidebarChannelId.getCurrentSidebarChannelId(channelId) === id;
  }
  return tmp2;
};
