// Module ID: 17429
// Function ID: 17430
// Name: useYouBarMargins
// Dependencies: [17430, 5349, 1627, 11412, 1357, 5756, 575, 2]
// Exports: useYouBarBottomMargin, useYouBarHorizontalMargin

// Module 17429 (useYouBarMargins)
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useChatLayoutDefault from "useChatLayout" /* 5349 */;
import useToken from "useToken" /* 5756 */;
import useVoicePanelDockHeightDefault from "useVoicePanelDockHeight" /* 11412 */;
import YouBarConstants from "YouBarConstants" /* 17430 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: closure_4 } = YouBarConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export function useYouBarHorizontalMargin() {
  let tmp4;
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (isChatBesideChannelList) {
    tmp4 = React3;
  } else {
    if (bottom > 0) {
      const obj = utils_PlatformUtils;
      if (obj.isIOS()) {
        if (!tmp2) {
          tmp4 = _false;
        }
      }
    }
    tmp4 = React3;
  }
  return tmp4;
}
export function useYouBarBottomMargin() {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  return Math.max(token, bottom, useVoicePanelDockHeightDefault());
}
