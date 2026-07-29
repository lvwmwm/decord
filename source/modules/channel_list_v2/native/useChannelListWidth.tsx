// Module ID: 14936
// Function ID: 14937
// Name: useChannelListWidth
// Dependencies: [10890, 4043, 3893, 712, 691, 2]
// Exports: default

// Module 14936 (useChannelListWidth)
const result = require("map").fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = require(10890) /* sum */.useDrawerWidth();
  const obj = require(10890) /* sum */;
  const token = require(3893) /* map */.useToken(importDefault(712).modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - require(691) /* keys */.DM_WIDTH;
  if (importDefault(4043)().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
