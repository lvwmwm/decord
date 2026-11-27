// Module ID: 10606
// Function ID: 10607
// Name: ChannelVisibilityUtils
// Dependencies: [6952, 4946, 5076, 2]
// Exports: isChannelCurrentlyVisible

// Module 10606 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6952 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4946 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5076 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
