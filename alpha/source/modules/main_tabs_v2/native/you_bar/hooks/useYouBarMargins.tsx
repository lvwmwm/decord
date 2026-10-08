// Module ID: 15176
// Function ID: 15177
// Name: useYouBarMargins
// Dependencies: [15177, 558, 1630, 1382, 4778, 587, 2]
// Exports: useYouBarHorizontalMargin

// Module 15176 (useYouBarMargins)
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1382 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import useToken from "useToken" /* 4778 */;
import YouBarConstants from "YouBarConstants" /* 15177 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: closure_4 } = YouBarConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
function useYouBarHorizontalMargin() {
  if (useSafeAreaInsetsDefault().bottom > 0) {
    let tmp3;
    const obj = utils_PlatformUtils;
    if (obj.isIOS()) {
      tmp3 = _false;
    }
    return tmp3;
  }
  tmp3 = React3;
}
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouBarBottomMargin() {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = useToken;
  return Math.max(obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), bottom);
}) : (function useYouBarBottomMargin() {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = useToken;
  return Math.max(obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), bottom);
});
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export { useYouBarHorizontalMargin };
export const useYouBarBottomMargin = tmp4;
