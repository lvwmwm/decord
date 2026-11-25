// Module ID: 11113
// Function ID: 11114
// Name: ChannelVisibilityUtils
// Dependencies: [6640, 4816, 4946, 2]
// Exports: isChannelCurrentlyVisible

// Module 11113 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6640 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4816 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4946 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
