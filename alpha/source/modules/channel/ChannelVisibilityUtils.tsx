// Module ID: 10560
// Function ID: 10561
// Name: ChannelVisibilityUtils
// Dependencies: [6921, 4915, 5045, 2]
// Exports: isChannelCurrentlyVisible

// Module 10560 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6921 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4915 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
