// Module ID: 16432
// Function ID: 16433
// Name: useChannelListWidth
// Dependencies: [558, 10679, 4979, 4818, 587, 1105, 2]

// Module 16432 (useChannelListWidth)
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import useToken from "useToken" /* 4818 */;
import useChatLayoutDefault from "useChatLayout" /* 4979 */;
import useDrawerWidth from "useDrawerWidth" /* 10679 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelListWidth() {
  const obj = useDrawerWidth;
  const drawerWidth = obj.useDrawerWidth();
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - ConstantsIOS.DM_WIDTH;
  if (isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
}) : (function useChannelListWidth() {
  const obj = useDrawerWidth;
  const drawerWidth = obj.useDrawerWidth();
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_SPACING);
  let num = 0;
  const diff = drawerWidth - ConstantsIOS.DM_WIDTH;
  if (isChatBesideChannelList) {
    num = token;
  }
  return diff - num;
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default tmp2;
