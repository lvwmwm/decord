// Module ID: 14910
// Function ID: 113581
// Name: useChannelListWidth
// Dependencies: [10866, 4019, 3869, 689, 668, 2]
// Exports: default

// Module 14910 (useChannelListWidth)
const result = require("map").fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  let num = 0;
  const drawerWidth = require(10866) /* computeTabletDrawerWidth */.useDrawerWidth();
  const obj = require(10866) /* computeTabletDrawerWidth */;
  const token = require(3869) /* map */.useToken(importDefault(689).modules.mobile.CHANNEL_DRAWER_SPACING);
  const diff = drawerWidth - require(668) /* keys */.DM_WIDTH;
  if (importDefault(4019)().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
