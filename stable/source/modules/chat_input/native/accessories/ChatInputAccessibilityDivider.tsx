// Module ID: 12395
// Function ID: 12396
// Name: ChatInputAccessibilityDivider
// Dependencies: [19, 17, 21, 5043, 1363, 1114, 2]

// Module 12395 (ChatInputAccessibilityDivider)
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx");

export const ChatInputAccessibilityDivider = noop.memo(() => {
  let tmp3 = null;
  if (obj.useIsScreenReaderEnabled()) {
    tmp3 = null;
    if (!tmpResult.isAndroid()) {
      const obj2 = { nativeID: "chat-input-accessibility-divider", accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null };
      const intl = tmp(1114).intl;
      obj2.accessibilityLabel = intl.string(tmp(1114).t["uKZtC/"]);
      const items = [absoluteFill.absoluteFill, { height: 1 }];
      obj2.style = items;
      tmp3 = <React3 nativeID="chat-input-accessibility-divider" accessible accessibilityLabel={null} accessibilityRole="header" style={null} />;
    }
    tmpResult = tmp(1363);
  }
  return tmp3;
});
