// Module ID: 16361
// Function ID: 16362
// Name: useChannelListWidth
// Dependencies: [11808, 4648, 4489, 576, 1094, 2]
// Exports: default

// Module 16361 (useChannelListWidth)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import useToken from "useToken" /* 4489 */;
import useChatLayoutDefault from "useChatLayout" /* 4648 */;
import useDrawerWidth from "useDrawerWidth" /* 11808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default function useChannelListWidth() {
  const drawerWidth = useDrawerWidth.useDrawerWidth();
  const token = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - ConstantsIOS.DM_WIDTH;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
};
