// Module ID: 11179
// Function ID: 11180
// Name: ChannelVisibilityUtils
// Dependencies: [6950, 5073, 5203, 2]
// Exports: isChannelCurrentlyVisible

// Module 11179 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6950 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5073 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5203 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
