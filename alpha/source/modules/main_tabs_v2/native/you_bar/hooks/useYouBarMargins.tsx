// Module ID: 16711
// Function ID: 16712
// Name: useYouBarMargins
// Dependencies: [16712, 558, 5189, 1630, 1382, 5288, 587, 2]

// Module 16711 (useYouBarMargins)
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1382 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import useChatLayoutDefault from "useChatLayout" /* 5189 */;
import useToken from "useToken" /* 5288 */;
import YouBarConstants from "YouBarConstants" /* 16712 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: closure_4 } = YouBarConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouBarHorizontalMargin() {
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
}) : (function useYouBarHorizontalMargin() {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouBarBottomMargin() {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = useToken;
  return Math.max(obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), bottom);
}) : (function useYouBarBottomMargin() {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = useToken;
  return Math.max(obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), bottom);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export const useYouBarHorizontalMargin = tmp3;
export const useYouBarBottomMargin = tmp4;
