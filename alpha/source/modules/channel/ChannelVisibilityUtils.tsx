// Module ID: 12487
// Function ID: 12488
// Name: ChannelVisibilityUtils
// Dependencies: [6793, 2103, 4705, 2]
// Exports: isChannelCurrentlyVisible

// Module 12487 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6793 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
