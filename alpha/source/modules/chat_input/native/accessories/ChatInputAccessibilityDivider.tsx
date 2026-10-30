// Module ID: 13770
// Function ID: 13771
// Name: ChatInputAccessibilityDivider
// Dependencies: [19, 17, 21, 5269, 1376, 1114, 2]

// Module 13770 (ChatInputAccessibilityDivider)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5269 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ StyleSheet: c2, View: c3 } = react_native);
const jsx = Fragment.jsx;
const memoResult = react.memo(function ChatInputAccessibilityDivider() {
  let tmp3 = null;
  const obj = useIsScreenReaderEnabled;
  if (obj.useIsScreenReaderEnabled()) {
    tmp3 = null;
    const tmpResult = PlatformUtils;
    if (!tmpResult.isAndroid()) {
      const intl = tmp(1114).intl;
      const items = [absoluteFill.absoluteFill, { height: 1 }];
      tmp3 = <_false nativeID="chat-input-accessibility-divider" accessible accessibilityLabel={intl.string(intl2.t["uKZtC/"])} accessibilityRole="header" style={items} />;
    }
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx");

export const ChatInputAccessibilityDivider = memoResult;
