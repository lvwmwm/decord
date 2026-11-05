// Module ID: 17347
// Function ID: 17348
// Name: useYouBarMargins
// Dependencies: [17348, 5327, 1627, 1357, 5734, 575, 11436, 2]
// Exports: useYouBarBottomMargin, useYouBarHorizontalMargin

// Module 17347 (useYouBarMargins)
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useChatLayoutDefault from "useChatLayout" /* 5327 */;
import useToken from "useToken" /* 5734 */;
import useVoicePanelDockHeightDefault from "useVoicePanelDockHeight" /* 11436 */;
import YouBarConstants from "YouBarConstants" /* 17348 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: closure_4 } = YouBarConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export function useYouBarHorizontalMargin() {
  let tmp4;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    tmp4 = React3;
  } else {
    if (tmp2 > 0) {
      const obj = utils_PlatformUtils;
      if (obj.isIOS()) {
        tmp4 = _false;
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
