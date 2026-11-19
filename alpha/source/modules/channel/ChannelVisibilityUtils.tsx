// Module ID: 11046
// Function ID: 11047
// Name: ChannelVisibilityUtils
// Dependencies: [6519, 4695, 4825, 2]
// Exports: isChannelCurrentlyVisible

// Module 11046 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6519 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4695 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4825 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
