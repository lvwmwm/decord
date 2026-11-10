// Module ID: 11156
// Function ID: 11157
// Name: ChannelVisibilityUtils
// Dependencies: [6920, 5045, 5173, 2]
// Exports: isChannelCurrentlyVisible

// Module 11156 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6920 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5045 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5173 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
