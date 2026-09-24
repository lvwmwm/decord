// Module ID: 15363
// Function ID: 15364
// Name: useYouBarMargins
// Dependencies: [15364, 558, 1616, 1369, 4494, 580, 2]
// Exports: useYouBarHorizontalMargin

// Module 15363 (useYouBarMargins)
import nativeDefault from "native" /* 580 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import useToken from "useToken" /* 4494 */;
import YouBarConstants from "YouBarConstants" /* 15364 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: closure_4 } = YouBarConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
const fn = () => {
  if (useSafeAreaInsetsDefault().bottom > 0) {
    if (obj.isIOS()) {
      let tmp3 = React3;
    }
    return tmp3;
  }
  tmp3 = React4;
};
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export const useYouBarHorizontalMargin = fn;
export const useYouBarBottomMargin = ReactCompilerGating.isReactCompilerEnabled() ? (() => Math.max(useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), useSafeAreaInsetsDefault().bottom)) : (() => Math.max(useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), useSafeAreaInsetsDefault().bottom));
