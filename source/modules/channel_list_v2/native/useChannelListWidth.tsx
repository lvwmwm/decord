// Module ID: 15163
// Function ID: 15164
// Name: useChannelListWidth
// Dependencies: [11002, 4161, 4024, 712, 691, 2]
// Exports: default

// Module 15163 (useChannelListWidth)
const result = require("map").fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = require(11002) /* sum */.useDrawerWidth();
  const obj = require(11002) /* sum */;
  const token = require(4024) /* map */.useToken(importDefault(712).modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - require(691) /* keys */.DM_WIDTH;
  if (importDefault(4161)().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
