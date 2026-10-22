// Module ID: 13673
// Function ID: 13674
// Name: ChannelVisibilityUtils
// Dependencies: [6777, 4872, 4995, 2]
// Exports: isChannelCurrentlyVisible

// Module 13673 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6777 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4995 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
