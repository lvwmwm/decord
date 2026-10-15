// Module ID: 13413
// Function ID: 13414
// Name: ChannelVisibilityUtils
// Dependencies: [6277, 2116, 4995, 2]
// Exports: isChannelCurrentlyVisible

// Module 13413 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6277 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4995 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
