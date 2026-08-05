// Module ID: 15028
// Function ID: 15029
// Name: useChannelListWidth
// Dependencies: [10883, 4109, 3959, 712, 691, 2]
// Exports: default

// Module 15028 (useChannelListWidth)
const result = require("map").fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = require(10883) /* sum */.useDrawerWidth();
  const obj = require(10883) /* sum */;
  const token = require(3959) /* map */.useToken(importDefault(712).modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - require(691) /* keys */.DM_WIDTH;
  if (importDefault(4109)().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
