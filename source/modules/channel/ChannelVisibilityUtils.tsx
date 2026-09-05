// Module ID: 10087
// Function ID: 10088
// Name: isChannelCurrentlyVisible
// Dependencies: [7280, 2011, 4381, 2]
// Exports: isChannelCurrentlyVisible

// Module 10087 (isChannelCurrentlyVisible)
import closure_0 from "toggleSection" /* 7280 */;
import closure_1 from "handleConnectionOpen" /* 2011 */;
import closure_2 from "handleConnectionOpen" /* 4381 */;

const result = require("set").fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  channelId = channelId.getChannelId(guildId.getGuildId());
  let tmp2 = channelId === id;
  if (!tmp2) {
    tmp2 = currentSidebarChannelId.getCurrentSidebarChannelId(channelId) === id;
  }
  return tmp2;
};
