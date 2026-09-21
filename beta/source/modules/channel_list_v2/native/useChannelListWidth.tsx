// Module ID: 16359
// Function ID: 16360
// Name: useChannelListWidth
// Dependencies: [558, 11648, 4619, 4462, 580, 1098, 2]

// Module 16359 (useChannelListWidth)
import nativeDefault from "native" /* 580 */;
import ConstantsIOS from "ConstantsIOS" /* 1098 */;
import useToken from "useToken" /* 4462 */;
import useChatLayoutDefault from "useChatLayout" /* 4619 */;
import useDrawerWidth from "useDrawerWidth" /* 11648 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const drawerWidth = useDrawerWidth.useDrawerWidth();
  const token = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - ConstantsIOS.DM_WIDTH;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
}) : (() => {
  const drawerWidth = useDrawerWidth.useDrawerWidth();
  const token = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - ConstantsIOS.DM_WIDTH;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
});
