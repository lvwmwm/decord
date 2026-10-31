// Module ID: 13979
// Function ID: 13980
// Name: useChatInputKeyboardOffset
// Dependencies: [1639, 5610, 5209, 1625, 5596, 575, 1375, 1623, 2]
// Exports: default

// Module 13979 (useChatInputKeyboardOffset)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1639 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5209 */;
import useToken from "useToken" /* 5596 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5610 */;
import size from "module_2" /* 2 */;

let tmp;
const KeyboardTypes = tmp(1623);
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
