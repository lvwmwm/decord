// Module ID: 13784
// Function ID: 13785
// Name: ChannelVisibilityUtils
// Dependencies: [6823, 4906, 5034, 2]
// Exports: isChannelCurrentlyVisible

// Module 13784 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6823 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4906 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5034 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
