// Module ID: 11017
// Function ID: 11018
// Name: ChannelVisibilityUtils
// Dependencies: [6862, 4917, 5045, 2]
// Exports: isChannelCurrentlyVisible

// Module 11017 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6862 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
