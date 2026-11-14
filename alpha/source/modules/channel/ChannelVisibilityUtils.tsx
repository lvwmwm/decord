// Module ID: 11020
// Function ID: 11021
// Name: ChannelVisibilityUtils
// Dependencies: [7036, 5209, 5349, 2]
// Exports: isChannelCurrentlyVisible

// Module 11020 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 7036 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5349 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
