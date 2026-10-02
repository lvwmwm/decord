// Module ID: 12216
// Function ID: 12217
// Name: ChannelVisibilityUtils
// Dependencies: [6699, 2102, 4657, 2]
// Exports: isChannelCurrentlyVisible

// Module 12216 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6699 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2102 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
