// Module ID: 11068
// Function ID: 11069
// Name: ChannelVisibilityUtils
// Dependencies: [6548, 4726, 4856, 2]
// Exports: isChannelCurrentlyVisible

// Module 11068 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6548 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4726 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4856 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
