// Module ID: 14930
// Function ID: 14931
// Name: useChannelListWidth
// Dependencies: [10886, 4043, 3893, 712, 691, 2]
// Exports: default

// Module 14930 (useChannelListWidth)
const result = require("map").fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = require(10886) /* sum */.useDrawerWidth();
  const obj = require(10886) /* sum */;
  const token = require(3893) /* map */.useToken(importDefault(712).modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - require(691) /* keys */.DM_WIDTH;
  if (importDefault(4043)().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
