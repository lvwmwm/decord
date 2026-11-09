// Module ID: 11147
// Function ID: 11148
// Name: ChannelVisibilityUtils
// Dependencies: [6917, 5043, 5171, 2]
// Exports: isChannelCurrentlyVisible

// Module 11147 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6917 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5043 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
