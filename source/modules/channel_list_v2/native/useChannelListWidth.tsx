// Module ID: 14681
// Function ID: 110713
// Name: useChannelListWidth
// Dependencies: []
// Exports: default

// Module 14681 (useChannelListWidth)
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  let num = 0;
  const drawerWidth = require(dependencyMap[0]).useDrawerWidth();
  const obj = require(dependencyMap[0]);
  const token = require(dependencyMap[2]).useToken(importDefault(dependencyMap[3]).modules.mobile.CHANNEL_DRAWER_SPACING);
  const diff = drawerWidth - require(dependencyMap[4]).DM_WIDTH;
  if (importDefault(dependencyMap[1])().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
