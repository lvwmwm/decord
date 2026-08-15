// Module ID: 15283
// Function ID: 15284
// Name: useChannelListWidth
// Dependencies: [10719, 4232, 4097, 712, 691, 2]
// Exports: default

// Module 15283 (useChannelListWidth)
const result = require("map").fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = require(10719) /* sum */.useDrawerWidth();
  const obj = require(10719) /* sum */;
  const token = require(4097) /* map */.useToken(importDefault(712).modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - require(691) /* keys */.DM_WIDTH;
  if (importDefault(4232)().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
