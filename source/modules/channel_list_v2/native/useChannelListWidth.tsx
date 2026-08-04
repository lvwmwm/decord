// Module ID: 15049
// Function ID: 15050
// Name: useChannelListWidth
// Dependencies: [10911, 4139, 3989, 712, 691, 2]
// Exports: default

// Module 15049 (useChannelListWidth)
const result = require("map").fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = require(10911) /* sum */.useDrawerWidth();
  const obj = require(10911) /* sum */;
  const token = require(3989) /* map */.useToken(importDefault(712).modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - require(691) /* keys */.DM_WIDTH;
  if (importDefault(4139)().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
