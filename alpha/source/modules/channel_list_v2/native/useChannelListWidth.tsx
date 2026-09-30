// Module ID: 15852
// Function ID: 15853
// Name: useChannelListWidth
// Dependencies: [11226, 4725, 4561, 576, 1094, 2]
// Exports: default

// Module 15852 (useChannelListWidth)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import useToken from "useToken" /* 4561 */;
import useChatLayoutDefault from "useChatLayout" /* 4725 */;
import useDrawerWidth from "useDrawerWidth" /* 11226 */;
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
