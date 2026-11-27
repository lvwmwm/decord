// Module ID: 16689
// Function ID: 16690
// Name: useYouBarMargins
// Dependencies: [16690, 5222, 1629, 11812, 1359, 5607, 575, 2]
// Exports: useYouBarBottomMargin, useYouBarHorizontalMargin

// Module 16689 (useYouBarMargins)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import useChatLayoutDefault from "useChatLayout" /* 5222 */;
import useToken from "useToken" /* 5607 */;
import VoicePanelDockLayout from "VoicePanelDockLayout" /* 11812 */;
import YouBarConstants from "YouBarConstants" /* 16690 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp2;
const utils_PlatformUtils = tmp2(1359);
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
