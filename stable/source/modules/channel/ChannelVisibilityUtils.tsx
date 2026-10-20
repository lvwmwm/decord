// Module ID: 12577
// Function ID: 12578
// Name: ChannelVisibilityUtils
// Dependencies: [6061, 2116, 4939, 2]
// Exports: isChannelCurrentlyVisible

// Module 12577 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6061 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
