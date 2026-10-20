// Module ID: 13570
// Function ID: 13571
// Name: ChannelVisibilityUtils
// Dependencies: [6742, 4851, 4971, 2]
// Exports: isChannelCurrentlyVisible

// Module 13570 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6742 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4851 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4971 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
