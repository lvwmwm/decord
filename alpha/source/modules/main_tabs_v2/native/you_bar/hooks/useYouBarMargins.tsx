// Module ID: 15372
// Function ID: 15373
// Name: useYouBarMargins
// Dependencies: [15373, 1612, 1365, 4458, 576, 2]
// Exports: useYouBarBottomMargin, useYouBarHorizontalMargin

// Module 15372 (useYouBarMargins)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import useToken from "useToken" /* 4458 */;
import YouBarConstants from "YouBarConstants" /* 15373 */;
import size from "module_2" /* 2 */;

({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: closure_4 } = YouBarConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export const useYouBarHorizontalMargin = function useYouBarHorizontalMargin() {
  if (useSafeAreaInsetsDefault().bottom > 0) {
    if (obj.isIOS()) {
      let tmp3 = React3;
    }
    return tmp3;
  }
  tmp3 = React4;
};
export const useYouBarBottomMargin = function useYouBarBottomMargin() {
  return Math.max(useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), useSafeAreaInsetsDefault().bottom);
};
