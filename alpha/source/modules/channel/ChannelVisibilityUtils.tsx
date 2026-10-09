// Module ID: 12523
// Function ID: 12524
// Name: ChannelVisibilityUtils
// Dependencies: [6068, 2115, 4900, 2]
// Exports: isChannelCurrentlyVisible

// Module 12523 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6068 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4900 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
