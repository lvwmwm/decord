// Module ID: 11161
// Function ID: 11162
// Name: ChannelVisibilityUtils
// Dependencies: [6942, 5073, 5201, 2]
// Exports: isChannelCurrentlyVisible

// Module 11161 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6942 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5073 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5201 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
