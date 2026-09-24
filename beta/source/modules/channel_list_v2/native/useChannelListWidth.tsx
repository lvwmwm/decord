// Module ID: 16369
// Function ID: 16370
// Name: useChannelListWidth
// Dependencies: [558, 11684, 4651, 4494, 580, 1098, 2]

// Module 16369 (useChannelListWidth)
import nativeDefault from "native" /* 580 */;
import ConstantsIOS from "ConstantsIOS" /* 1098 */;
import useToken from "useToken" /* 4494 */;
import useChatLayoutDefault from "useChatLayout" /* 4651 */;
import useDrawerWidth from "useDrawerWidth" /* 11684 */;
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
