// Module ID: 15066
// Function ID: 15067
// Name: useChannelListWidth
// Dependencies: [10915, 4138, 3988, 712, 691, 2]
// Exports: default

// Module 15066 (useChannelListWidth)
const result = require("map").fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = require(10915) /* sum */.useDrawerWidth();
  const obj = require(10915) /* sum */;
  const token = require(3988) /* map */.useToken(importDefault(712).modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - require(691) /* keys */.DM_WIDTH;
  if (importDefault(4138)().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
