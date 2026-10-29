// Module ID: 14218
// Function ID: 14219
// Name: ChannelVisibilityUtils
// Dependencies: [6849, 4908, 5036, 2]
// Exports: isChannelCurrentlyVisible

// Module 14218 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6849 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4908 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5036 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
