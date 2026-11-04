// Module ID: 11198
// Function ID: 11199
// Name: ChannelVisibilityUtils
// Dependencies: [6997, 5044, 5172, 2]
// Exports: isChannelCurrentlyVisible

// Module 11198 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6997 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5044 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5172 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
