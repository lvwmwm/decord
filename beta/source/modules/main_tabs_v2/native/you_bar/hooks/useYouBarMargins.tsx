// Module ID: 14626
// Function ID: 14627
// Name: useYouBarMargins
// Dependencies: [14627, 1613, 1365, 4531, 576, 2]
// Exports: useYouBarBottomMargin, useYouBarHorizontalMargin

// Module 14626 (useYouBarMargins)
import nativeDefault from "native" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import useToken from "useToken" /* 4531 */;
import YouBarConstants from "YouBarConstants" /* 14627 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: closure_4 } = YouBarConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export const useYouBarHorizontalMargin = function useYouBarHorizontalMargin() {
  if (useSafeAreaInsetsDefault().bottom > 0) {
    let tmp3;
    const obj = utils_PlatformUtils;
    if (obj.isIOS()) {
      tmp3 = _false;
    }
    return tmp3;
  }
  tmp3 = React3;
};
export const useYouBarBottomMargin = function useYouBarBottomMargin() {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = useToken;
  return Math.max(obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), bottom);
};
