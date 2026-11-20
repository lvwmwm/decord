// Module ID: 10988
// Function ID: 10989
// Name: ChannelVisibilityUtils
// Dependencies: [6521, 4697, 4827, 2]
// Exports: isChannelCurrentlyVisible

// Module 10988 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6521 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4697 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4827 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
