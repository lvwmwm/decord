// Module ID: 17003
// Function ID: 17004
// Name: useYouBarMargins
// Dependencies: [17004, 5196, 1626, 1377, 5591, 575, 2]
// Exports: useYouBarBottomMargin, useYouBarHorizontalMargin

// Module 17003 (useYouBarMargins)
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import useChatLayoutDefault from "useChatLayout" /* 5196 */;
import useToken from "useToken" /* 5591 */;
import YouBarConstants from "YouBarConstants" /* 17004 */;
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
  return Math.max(obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), bottom);
}
