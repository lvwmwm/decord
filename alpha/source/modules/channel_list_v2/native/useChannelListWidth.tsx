// Module ID: 15626
// Function ID: 15627
// Name: useChannelListWidth
// Dependencies: [11008, 4691, 4528, 576, 1094, 2]
// Exports: default

// Module 15626 (useChannelListWidth)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import useToken from "useToken" /* 4528 */;
import useChatLayoutDefault from "useChatLayout" /* 4691 */;
import useDrawerWidth from "useDrawerWidth" /* 11008 */;
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
