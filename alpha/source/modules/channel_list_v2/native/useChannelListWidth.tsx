// Module ID: 18021
// Function ID: 18022
// Name: useChannelListWidth
// Dependencies: [11522, 5196, 5591, 575, 1093, 2]
// Exports: default

// Module 18021 (useChannelListWidth)
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import useChatLayoutDefault from "useChatLayout" /* 5196 */;
import useToken from "useToken" /* 5591 */;
import useDrawerWidth from "useDrawerWidth" /* 11522 */;
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
