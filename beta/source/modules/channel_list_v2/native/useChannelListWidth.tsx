// Module ID: 17539
// Function ID: 17540
// Name: useChannelListWidth
// Dependencies: [11954, 5092, 5477, 575, 1091, 2]
// Exports: default

// Module 17539 (useChannelListWidth)
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1091 */;
import useChatLayoutDefault from "useChatLayout" /* 5092 */;
import useToken from "useToken" /* 5477 */;
import useDrawerWidth from "useDrawerWidth" /* 11954 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const obj = useDrawerWidth;
  const drawerWidth = obj.useDrawerWidth({ whileSliding: "wider" });
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - ConstantsIOS.DM_WIDTH;
  if (isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
