// Module ID: 17723
// Function ID: 17724
// Name: useChannelListWidth
// Dependencies: [558, 576, 11265, 5189, 5288, 587, 1104, 2]

// Module 17723 (useChannelListWidth)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1104 */;
import useChatLayoutDefault from "useChatLayout" /* 5189 */;
import useToken from "useToken" /* 5288 */;
import useDrawerWidth from "useDrawerWidth" /* 11265 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelListWidth() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { whileSliding: "wider" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = useDrawerWidth;
  const drawerWidth = tmpResult.useDrawerWidth(first);
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  const tmpResult2 = useToken;
  const token = tmpResult2.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_SPACING);
  let num2 = 0;
  const diff = drawerWidth - tmp(1104).DM_WIDTH;
  if (isChatBesideChannelList) {
    num2 = token;
  }
  return diff - num2;
}) : (function useChannelListWidth() {
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
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/useChannelListWidth.tsx");

export default tmp2;
