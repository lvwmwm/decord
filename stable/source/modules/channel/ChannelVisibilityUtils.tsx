// Module ID: 10216
// Function ID: 10217
// Name: ChannelVisibilityUtils
// Dependencies: [7383, 2011, 4458, 2]
// Exports: isChannelCurrentlyVisible

// Module 10216 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 7383 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4458 */;

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
