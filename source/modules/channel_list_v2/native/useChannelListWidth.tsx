// Module ID: 14807
// Function ID: 112954
// Name: useChannelListWidth
// Dependencies: [10850, 3984, 3834, 689, 668, 2]
// Exports: default

// Module 14807 (useChannelListWidth)
const result = require("map").fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  let num = 0;
  const drawerWidth = require(10850) /* computeTabletDrawerWidth */.useDrawerWidth();
  const obj = require(10850) /* computeTabletDrawerWidth */;
  const token = require(3834) /* map */.useToken(importDefault(689).modules.mobile.CHANNEL_DRAWER_SPACING);
  const diff = drawerWidth - require(668) /* keys */.DM_WIDTH;
  if (importDefault(3984)().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
