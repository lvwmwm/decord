// Module ID: 13117
// Function ID: 13118
// Name: ChannelVisibilityUtils
// Dependencies: [6066, 2116, 4941, 2]
// Exports: isChannelCurrentlyVisible

// Module 13117 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6066 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4941 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
};
