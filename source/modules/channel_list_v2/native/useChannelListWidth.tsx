// Module ID: 15941
// Function ID: 15942
// Name: useChannelListWidth
// Dependencies: [11460, 4338, 4197, 709, 688, 2]
// Exports: default

// Module 15941 (useChannelListWidth)
import set from "set" /* 2 */;
import keys from "keys" /* 688 */;
import ThemesDefault from "Themes" /* 709 */;
import map from "map" /* 4197 */;
import useChatLayoutDefault from "useChatLayout" /* 4338 */;
import sum from "sum" /* 11460 */;

const result = set.fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = sum.useDrawerWidth();
  const obj = sum;
  const token = map.useToken(ThemesDefault.modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - keys.DM_WIDTH;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
