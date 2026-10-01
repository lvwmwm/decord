// Module ID: 9742
// Function ID: 9743
// Name: ChannelVisibilityUtils
// Dependencies: [6885, 2098, 4684, 2]
// Exports: isChannelCurrentlyVisible

// Module 9742 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6885 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2098 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4684 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  let tmp2 = channelId === id;
  if (!tmp2) {
    tmp2 = ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  }
  return tmp2;
};
