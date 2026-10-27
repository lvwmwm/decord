// Module ID: 13767
// Function ID: 13768
// Name: ChannelVisibilityUtils
// Dependencies: [6792, 4875, 5003, 2]
// Exports: isChannelCurrentlyVisible

// Module 13767 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6792 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4875 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5003 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
