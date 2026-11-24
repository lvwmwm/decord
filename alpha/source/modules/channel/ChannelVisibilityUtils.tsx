// Module ID: 10461
// Function ID: 10462
// Name: ChannelVisibilityUtils
// Dependencies: [6826, 4820, 4950, 2]
// Exports: isChannelCurrentlyVisible

// Module 10461 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6826 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4820 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4950 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
