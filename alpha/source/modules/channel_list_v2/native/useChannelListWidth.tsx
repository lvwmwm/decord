// Module ID: 18221
// Function ID: 18222
// Name: useChannelListWidth
// Dependencies: [11694, 5324, 5719, 575, 1092, 2]
// Exports: default

// Module 18221 (useChannelListWidth)
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import useChatLayoutDefault from "useChatLayout" /* 5324 */;
import useToken from "useToken" /* 5719 */;
import useDrawerWidth from "useDrawerWidth" /* 11694 */;
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
