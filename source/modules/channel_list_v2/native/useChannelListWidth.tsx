// Module ID: 15220
// Function ID: 15221
// Name: useChannelListWidth
// Dependencies: [11055, 4202, 4065, 712, 691, 2]
// Exports: default

// Module 15220 (useChannelListWidth)
const result = require("map").fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = require(11055) /* sum */.useDrawerWidth();
  const obj = require(11055) /* sum */;
  const token = require(4065) /* map */.useToken(importDefault(712).modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - require(691) /* keys */.DM_WIDTH;
  if (importDefault(4202)().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
