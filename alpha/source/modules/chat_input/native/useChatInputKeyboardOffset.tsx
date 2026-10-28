// Module ID: 13564
// Function ID: 13565
// Name: useChatInputKeyboardOffset
// Dependencies: [558, 576, 1644, 5632, 5197, 1630, 5288, 587, 1381, 1628, 2]

// Module 13564 (useChatInputKeyboardOffset)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import KeyboardTypes from "KeyboardTypes" /* 1628 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1644 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5197 */;
import useToken from "useToken" /* 5288 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5632 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChatInputKeyboardOffset() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(height) {
      return height.height;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = KeyboardChatScrollView;
  const keyboardState = tmpResult.useKeyboardState(first);
  let tmp6 = useCustomKeyboardHeightDefault();
  const tmp7 = useKeyboardTypeDefault();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmpResult3 = useToken;
  const token = tmpResult3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const tmpResult4 = PlatformUtils;
  if (tmpResult4.isIOS()) {
    if (tmp7 === KeyboardTypes.KeyboardTypes.SYSTEM) {
      tmp6 = keyboardState;
    }
    const _Math = Math;
    const _Math2 = Math;
    return Math.max(0, tmp6 - Math.max(bottom, token));
  } else {
    return 0;
  }
}) : (function useChatInputKeyboardOffset() {
  const obj = KeyboardChatScrollView;
  const keyboardState = obj.useKeyboardState((height) => height.height);
  let tmp4 = useCustomKeyboardHeightDefault();
  const tmp5 = useKeyboardTypeDefault();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const obj3 = PlatformUtils;
  if (obj3.isIOS()) {
    if (tmp5 === KeyboardTypes.KeyboardTypes.SYSTEM) {
      tmp4 = keyboardState;
    }
    const _Math = Math;
    const _Math2 = Math;
    return Math.max(0, tmp4 - Math.max(bottom, token));
  } else {
    return 0;
  }
});
const result = size.fileFinishedImporting("modules/chat_input/native/useChatInputKeyboardOffset.tsx");

export default tmp2;
