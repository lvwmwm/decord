// Module ID: 14154
// Function ID: 14155
// Name: MessageRequestEmptyChat
// Dependencies: [19, 17, 1083, 21, 5009, 1376, 5619, 1114, 2]
// Exports: default

// Module 14154 (MessageRequestEmptyChat)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1083 */;
import intl2 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import size from "module_2" /* 2 */;

let obj2;
let obj4;
const View = react_native.View;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
if (PlatformUtils.isAndroid()) {
  obj2 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
  const obj = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
} else {
  obj2 = { fontStyle: "italic" };
}
const obj3 = { text: obj4 };
obj4 = { textAlign: "center" };
const merged = Object.assign(obj2);
let closure_4 = createStyles(obj3);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmptyChat.tsx");

export default function MessageRequestEmptyChat(style) {
  let intl;
  ({ style: closure_4().text, variant: "text-md/normal", color: "text-muted", children: intl.string(intl2.t.eeJvfA) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <View style={arg0.style}>{null}</View>;
};
