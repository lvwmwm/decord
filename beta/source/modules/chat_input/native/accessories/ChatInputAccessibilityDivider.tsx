// Module ID: 11744
// Function ID: 11745
// Name: ChatInputAccessibilityDivider
// Dependencies: [19, 17, 21, 5266, 1364, 1115, 2]

// Module 11744 (ChatInputAccessibilityDivider)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5266 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ StyleSheet: c2, View: c3 } = react_native);
const jsx = Fragment.jsx;
const memoResult = react.memo(() => {
  let tmp3 = null;
  const obj = useIsScreenReaderEnabled;
  if (obj.useIsScreenReaderEnabled()) {
    tmp3 = null;
    const tmpResult = PlatformUtils;
    if (!tmpResult.isAndroid()) {
      const intl = tmp(1115).intl;
      const items = [absoluteFill.absoluteFill, { height: 1 }];
      tmp3 = <_false nativeID="chat-input-accessibility-divider" accessible accessibilityLabel={intl.string(intl2.t["uKZtC/"])} accessibilityRole="header" style={items} />;
    }
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx");

export const ChatInputAccessibilityDivider = memoResult;
