// Module ID: 12583
// Function ID: 12584
// Name: ChannelVisibilityUtils
// Dependencies: [6066, 2115, 4899, 2]
// Exports: isChannelCurrentlyVisible

// Module 12583 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6066 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4899 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
