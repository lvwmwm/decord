// Module ID: 13402
// Function ID: 13403
// Name: useChatInputKeyboardOffset
// Dependencies: [1643, 5619, 5230, 1629, 5607, 575, 1379, 1627, 2]
// Exports: default

// Module 13402 (useChatInputKeyboardOffset)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1643 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5230 */;
import useToken from "useToken" /* 5607 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5619 */;
import size from "module_2" /* 2 */;

let tmp;
const KeyboardTypes = tmp(1627);
const result = size.fileFinishedImporting("modules/chat_input/native/useChatInputKeyboardOffset.tsx");

export default function useChatInputKeyboardOffset() {
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
};
