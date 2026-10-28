// Module ID: 13985
// Function ID: 13986
// Name: ChannelVisibilityUtils
// Dependencies: [6826, 4907, 5035, 2]
// Exports: isChannelCurrentlyVisible

// Module 13985 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6826 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4907 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5035 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
