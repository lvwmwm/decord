// Module ID: 12423
// Function ID: 12424
// Name: MessageBlock
// Dependencies: [19, 17, 21, 575, 5014, 5624, 2]
// Exports: default

// Module 12423 (MessageBlock)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const MessageBlockColors = { RED: 0, [0]: "RED", YELLOW: 1, [1]: "YELLOW" };
let closure_6 = createStyles.createStyles((arg0) => {
  let obj;
  let obj4;
  let tmp2;
  if (obj.RED === arg0) {
    obj = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL };
    tmp2 = obj;
  } else if (tmp.YELLOW === arg0) {
    tmp2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
    const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
  }
  const obj3 = { container: obj4, text: { textAlign: "center" } };
  obj4 = { alignItems: "center", borderRadius: nativeDefault.radii.xs, borderWidth: 1, padding: 8, width: "100%" };
  const merged = Object.assign(tmp2);
  return obj3;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/MessageBlock.tsx");

export default function MessageBlock(color) {
  color = color.color;
  const children = color.children;
  const tmp = closure_6(color);
  const obj = { style: tmp.container, children: null };
  let str = "text-feedback-critical";
  const Text = Text_Text.Text;
  if (obj.RED !== color) {
    if (obj.YELLOW === color) {
      str = "text-feedback-warning";
    }
  }
  return <tmp3 style={tmp.container}>{null}</tmp3>;
};
export { MessageBlockColors };
