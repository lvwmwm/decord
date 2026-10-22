// Module ID: 13477
// Function ID: 13478
// Name: MessageRequestEmptyChat
// Dependencies: [19, 17, 1098, 21, 4969, 1384, 558, 576, 1128, 5220, 2]

// Module 13477 (MessageRequestEmptyChat)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1098 */;
import intl2 from "intl" /* 1128 */;
import Text_Text from "Text/Text" /* 5220 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4969 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj4;
const View = react_native.View;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
if (PlatformUtils.isAndroid()) {
  let obj = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
  obj2 = obj;
} else {
  obj2 = { fontStyle: "italic" };
}
const obj3 = { text: obj4 };
obj4 = { textAlign: "center" };
const merged = Object.assign(obj2);
let closure_4 = createStyles(obj3);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessageRequestEmptyChat(style) {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  style = style.style;
  const tmp4 = closure_4();
  const text = tmp4.text;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(intl2.t.eeJvfA);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.text) {
    const tmp9 = jsx(Text_Text.Text, { style: text, variant: "text-md/normal", color: "text-muted", children: first });
    cResult[1] = tmp4.text;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === style) {
    let tmp10;
    if (cResult[4] === tmp7) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = <View style={style}>{tmp7}</View>;
  cResult[3] = style;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (function MessageRequestEmptyChat(style) {
  let intl;
  ({ style: closure_4().text, variant: "text-md/normal", color: "text-muted", children: intl.string(intl2.t.eeJvfA) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <View style={arg0.style}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmptyChat.tsx");

export default tmp5;
