// Module ID: 10383
// Function ID: 10384
// Name: ChannelVisibilityUtils
// Dependencies: [7554, 2095, 4609, 2]
// Exports: isChannelCurrentlyVisible

// Module 10383 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 7554 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4609 */;

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
