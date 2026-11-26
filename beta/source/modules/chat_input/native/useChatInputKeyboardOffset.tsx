// Module ID: 13307
// Function ID: 13308
// Name: useChatInputKeyboardOffset
// Dependencies: [1642, 5489, 5100, 1628, 5477, 575, 1378, 1626, 2]
// Exports: default

// Module 13307 (useChatInputKeyboardOffset)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1642 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5100 */;
import useToken from "useToken" /* 5477 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5489 */;
import size from "module_2" /* 2 */;

let tmp;
const KeyboardTypes = tmp(1626);
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
