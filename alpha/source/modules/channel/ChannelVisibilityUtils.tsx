// Module ID: 13687
// Function ID: 13688
// Name: ChannelVisibilityUtils
// Dependencies: [6776, 4872, 4995, 2]
// Exports: isChannelCurrentlyVisible

// Module 13687 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6776 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4995 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
