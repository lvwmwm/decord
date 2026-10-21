// Module ID: 13637
// Function ID: 13638
// Name: ChannelVisibilityUtils
// Dependencies: [6770, 4872, 4992, 2]
// Exports: isChannelCurrentlyVisible

// Module 13637 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6770 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4992 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
