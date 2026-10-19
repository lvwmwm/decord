// Module ID: 13518
// Function ID: 13519
// Name: ChannelVisibilityUtils
// Dependencies: [6339, 2119, 5034, 2]
// Exports: isChannelCurrentlyVisible

// Module 13518 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6339 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2119 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5034 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
