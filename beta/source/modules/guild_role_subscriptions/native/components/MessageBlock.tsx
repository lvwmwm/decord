// Module ID: 12276
// Function ID: 12277
// Name: MessageBlock
// Dependencies: [19, 17, 21, 587, 5003, 558, 576, 5266, 2]

// Module 12276 (MessageBlock)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const Text_Text = tmp(5266);
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessageBlock(arg0) {
  let children;
  let color;
  let container;
  let text;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  ({ color, children } = arg0);
  const tmp4 = closure_6(color);
  ({ container, text } = tmp4);
  if (cResult[0] !== color) {
    let str = "text-feedback-critical";
    if (obj.RED !== color) {
      if (obj.YELLOW === color) {
        str = "text-feedback-warning";
      }
    }
    cResult[0] = color;
    cResult[1] = str;
    tmp5 = str;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === children) {
    if (cResult[3] === tmp4.text) {
      let tmp6;
      if (cResult[4] === tmp5) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === tmp4.container) {
        let tmp8;
        if (cResult[7] === tmp6) {
          tmp8 = cResult[8];
        }
        return tmp8;
      }
      const tmp11 = <View style={container}>{tmp6}</View>;
      cResult[6] = tmp4.container;
      cResult[7] = tmp6;
      cResult[8] = tmp11;
      tmp8 = tmp11;
    }
  }
  const tmp7 = jsx(Text_Text.Text, { style: text, variant: "text-sm/medium", color: tmp5, children });
  cResult[2] = children;
  cResult[3] = tmp4.text;
  cResult[4] = tmp5;
  cResult[5] = tmp7;
  tmp6 = tmp7;
}) : (function MessageBlock(color) {
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
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/MessageBlock.tsx");

export default tmp3;
export { MessageBlockColors };
