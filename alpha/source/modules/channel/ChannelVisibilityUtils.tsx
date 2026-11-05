// Module ID: 11206
// Function ID: 11207
// Name: ChannelVisibilityUtils
// Dependencies: [7000, 5046, 5174, 2]
// Exports: isChannelCurrentlyVisible

// Module 11206 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 7000 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5046 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5174 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
