// Module ID: 13710
// Function ID: 13711
// Name: ChannelVisibilityUtils
// Dependencies: [6789, 4872, 5000, 2]
// Exports: isChannelCurrentlyVisible

// Module 13710 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6789 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5000 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
