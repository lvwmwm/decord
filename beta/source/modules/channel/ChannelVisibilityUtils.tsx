// Module ID: 9547
// Function ID: 9548
// Name: ChannelVisibilityUtils
// Dependencies: [6698, 2099, 4655, 2]
// Exports: isChannelCurrentlyVisible

// Module 9547 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6698 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
