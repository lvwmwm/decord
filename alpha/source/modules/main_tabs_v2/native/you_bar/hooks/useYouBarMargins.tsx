// Module ID: 15287
// Function ID: 15288
// Name: useYouBarMargins
// Dependencies: [15288, 558, 1631, 1383, 4779, 587, 2]
// Exports: useYouBarHorizontalMargin

// Module 15287 (useYouBarMargins)
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1383 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import useToken from "useToken" /* 4779 */;
import YouBarConstants from "YouBarConstants" /* 15288 */;
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
