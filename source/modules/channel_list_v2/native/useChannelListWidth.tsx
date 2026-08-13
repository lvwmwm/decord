// Module ID: 15229
// Function ID: 15230
// Name: useChannelListWidth
// Dependencies: [10970, 4200, 4065, 712, 691, 2]
// Exports: default

// Module 15229 (useChannelListWidth)
const result = require("map").fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = require(10970) /* sum */.useDrawerWidth();
  const obj = require(10970) /* sum */;
  const token = require(4065) /* map */.useToken(importDefault(712).modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - require(691) /* keys */.DM_WIDTH;
  if (importDefault(4200)().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
