// Module ID: 9806
// Function ID: 9807
// Name: isChannelCurrentlyVisible
// Dependencies: [5937, 1979, 4167, 2]
// Exports: isChannelCurrentlyVisible

// Module 9806 (isChannelCurrentlyVisible)
import handlePermissionsChange from "handlePermissionsChange";
import handleConnectionOpen from "handleConnectionOpen";
import closure_2 from "handleConnectionOpen";

const result = require("handleConnectionOpen").fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  channelId = channelId.getChannelId(guildId.getGuildId());
  let tmp2 = channelId === id;
  if (!tmp2) {
    tmp2 = currentSidebarChannelId.getCurrentSidebarChannelId(channelId) === id;
  }
  return tmp2;
};
