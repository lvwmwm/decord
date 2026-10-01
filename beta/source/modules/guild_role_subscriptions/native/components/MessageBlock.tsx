// Module ID: 11706
// Function ID: 11707
// Name: MessageBlock
// Dependencies: [19, 17, 21, 576, 4836, 1177, 2]
// Exports: default

// Module 11706 (MessageBlock)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const MessageBlockColors = { RED: 0, [0]: "RED", YELLOW: 1, [1]: "YELLOW" };
let closure_6 = createStyles.createStyles((arg0) => {
  let TEXT_FEEDBACK_WARNING;
  let obj;
  let obj4;
  let tmp2;
  if (obj.RED === arg0) {
    obj = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL };
    tmp2 = obj;
  } else if (obj.YELLOW === arg0) {
    tmp2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
    const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
  }
  const obj3 = { container: obj4, text: { textAlign: "center", color: TEXT_FEEDBACK_WARNING } };
  obj4 = { alignItems: "center", borderRadius: nativeDefault.radii.xs, borderWidth: 1, padding: 8, width: "100%" };
  const merged = Object.assign(tmp2);
  if (obj.RED === arg0) {
    TEXT_FEEDBACK_WARNING = tmp6(576).colors.TEXT_FEEDBACK_CRITICAL;
  } else if (obj.YELLOW === arg0) {
    TEXT_FEEDBACK_WARNING = tmp6(576).colors.TEXT_FEEDBACK_WARNING;
  }
  return obj3;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/MessageBlock.tsx");

export default function MessageBlock(children) {
  children = children.children;
  const tmp = closure_6(children.color);
  return <View style={tmp.container}>{null}</View>;
};
export { MessageBlockColors };
