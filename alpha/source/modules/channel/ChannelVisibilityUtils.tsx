// Module ID: 13752
// Function ID: 13753
// Name: ChannelVisibilityUtils
// Dependencies: [6791, 4874, 5002, 2]
// Exports: isChannelCurrentlyVisible

// Module 13752 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6791 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4874 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5002 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
