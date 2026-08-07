// Module ID: 15082
// Function ID: 15083
// Name: useChannelListWidth
// Dependencies: [10930, 4155, 4005, 712, 691, 2]
// Exports: default

// Module 15082 (useChannelListWidth)
const result = require("map").fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = require(10930) /* sum */.useDrawerWidth();
  const obj = require(10930) /* sum */;
  const token = require(4005) /* map */.useToken(importDefault(712).modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - require(691) /* keys */.DM_WIDTH;
  if (importDefault(4155)().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
