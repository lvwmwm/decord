// Module ID: 11786
// Function ID: 11787
// Name: ChannelVisibilityUtils
// Dependencies: [7044, 5213, 5343, 2]
// Exports: isChannelCurrentlyVisible

// Module 11786 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 7044 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5213 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5343 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
