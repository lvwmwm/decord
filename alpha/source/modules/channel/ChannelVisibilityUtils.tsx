// Module ID: 13439
// Function ID: 13440
// Name: ChannelVisibilityUtils
// Dependencies: [6279, 2119, 4998, 2]
// Exports: isChannelCurrentlyVisible

// Module 13439 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6279 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2119 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4998 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
