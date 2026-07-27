// Module ID: 14866
// Function ID: 113408
// Name: useChannelListWidth
// Dependencies: [10828, 3985, 3835, 689, 668, 2]
// Exports: default

// Module 14866 (useChannelListWidth)
const result = require("map").fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  let num = 0;
  const drawerWidth = require(10828) /* computeTabletDrawerWidth */.useDrawerWidth();
  const obj = require(10828) /* computeTabletDrawerWidth */;
  const token = require(3835) /* map */.useToken(importDefault(689).modules.mobile.CHANNEL_DRAWER_SPACING);
  const diff = drawerWidth - require(668) /* keys */.DM_WIDTH;
  if (importDefault(3985)().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
