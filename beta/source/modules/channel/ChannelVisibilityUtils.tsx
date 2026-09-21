// Module ID: 12954
// Function ID: 12955
// Name: ChannelVisibilityUtils
// Dependencies: [7524, 2099, 4580, 2]
// Exports: isChannelCurrentlyVisible

// Module 12954 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 7524 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4580 */;

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
