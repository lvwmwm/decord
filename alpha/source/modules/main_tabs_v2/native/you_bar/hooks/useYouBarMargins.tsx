// Module ID: 16531
// Function ID: 16532
// Name: useYouBarMargins
// Dependencies: [16532, 4971, 1630, 11705, 1360, 5356, 575, 2]
// Exports: useYouBarBottomMargin, useYouBarHorizontalMargin

// Module 16531 (useYouBarMargins)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import useChatLayoutDefault from "useChatLayout" /* 4971 */;
import useToken from "useToken" /* 5356 */;
import VoicePanelDockLayout from "VoicePanelDockLayout" /* 11705 */;
import YouBarConstants from "YouBarConstants" /* 16532 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp2;
const utils_PlatformUtils = tmp2(1360);
({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: closure_4 } = YouBarConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export function useYouBarHorizontalMargin() {
  let tmp5;
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  const bottom = useSafeAreaInsetsDefault().bottom;
  VoicePanelDockLayout;
  if (isChatBesideChannelList) {
    tmp5 = React3;
  } else {
    if (bottom > 0) {
      const tmp2Result = utils_PlatformUtils;
      if (tmp2Result.isIOS()) {
        if (!tmp4) {
          tmp5 = _false;
        }
      }
    }
    tmp5 = React3;
  }
  return tmp5;
}
export function useYouBarBottomMargin() {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const obj2 = VoicePanelDockLayout;
  return Math.max(token, bottom, obj2.useVoicePanelDockHeight());
}
