// Module ID: 14227
// Function ID: 14228
// Name: useChatInputKeyboardOffset
// Dependencies: [1641, 5736, 5325, 1627, 5724, 575, 1377, 1625, 2]
// Exports: default

// Module 14227 (useChatInputKeyboardOffset)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1641 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5325 */;
import useToken from "useToken" /* 5724 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5736 */;
import size from "module_2" /* 2 */;

let tmp;
const KeyboardTypes = tmp(1625);
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
