// Module ID: 12472
// Function ID: 12473
// Name: ChannelVisibilityUtils
// Dependencies: [6783, 2103, 4699, 2]
// Exports: isChannelCurrentlyVisible

// Module 12472 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6783 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
