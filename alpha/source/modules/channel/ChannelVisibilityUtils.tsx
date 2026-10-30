// Module ID: 10998
// Function ID: 10999
// Name: ChannelVisibilityUtils
// Dependencies: [6856, 4912, 5040, 2]
// Exports: isChannelCurrentlyVisible

// Module 10998 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6856 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  const tmp2 = channelId === id || ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  return tmp2;
}
