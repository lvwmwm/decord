// Module ID: 10957
// Function ID: 10958
// Name: ChannelVisibilityUtils
// Dependencies: [6973, 5146, 5286, 2]
// Exports: isChannelCurrentlyVisible

// Module 10957 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6973 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5286 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
