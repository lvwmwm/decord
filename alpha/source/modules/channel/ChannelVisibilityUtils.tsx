// Module ID: 13552
// Function ID: 13553
// Name: ChannelVisibilityUtils
// Dependencies: [6739, 4851, 4971, 2]
// Exports: isChannelCurrentlyVisible

// Module 13552 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6739 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4851 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4971 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
