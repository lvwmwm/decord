// Module ID: 7598
// Function ID: 7599
// Name: ConversationPreviewBlockedMessage
// Dependencies: [19, 21, 558, 576, 7599, 587, 6463, 1126, 4892, 5600, 2]

// Module 7598 (ConversationPreviewBlockedMessage)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let reason;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((reason) => {
  let items;
  let tmp10;
  let tmp4;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(9);
  reason = reason.reason;
  if (cResult[0] !== reason) {
    let EyeSlashIcon;
    const tmp5 = _false;
    if ("blocked" === reason) {
      EyeSlashIcon = tmp(7599).DenyIcon;
    } else {
      EyeSlashIcon = tmp(6463).EyeSlashIcon;
    }
    const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_MUTED };
    const tmp5Result = tmp5(EyeSlashIcon, obj2);
    cResult[0] = reason;
    cResult[1] = tmp5Result;
    tmp4 = tmp5Result;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== reason) {
    let uxrh1O;
    const intl = tmp(1126).intl;
    const string = intl.string;
    if ("blocked" === reason) {
      uxrh1O = tmp(1126).t["WPe+xL"];
    } else {
      uxrh1O = tmp(1126).t.uxrh1O;
    }
    const stringResult = string(uxrh1O);
    cResult[2] = reason;
    cResult[3] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== tmp8) {
    const obj3 = { variant: "text-md/normal", color: "text-muted", children: tmp8 };
    const tmp12 = _false(Text_Text.Text, obj3);
    cResult[4] = tmp8;
    cResult[5] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === tmp4) {
    let tmp13;
    if (cResult[7] === tmp10) {
      tmp13 = cResult[8];
    }
    return tmp13;
  }
  const obj4 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, align: "center", children: items };
  const Stack = tmp(5600).Stack;
  items = [tmp4, tmp10];
  const tmp14 = React3(Stack, obj4);
  cResult[6] = tmp4;
  cResult[7] = tmp10;
  cResult[8] = tmp14;
  tmp13 = tmp14;
}) : ((reason) => {
  let EyeSlashIcon;
  let items;
  reason = reason.reason;
  const obj = { direction: "horizontal", spacing: nativeDefault.space.PX_8, align: "center", children: items };
  const Stack = Stack_Stack.Stack;
  const tmp = React3;
  if ("blocked" === reason) {
    EyeSlashIcon = tmp2(7599).DenyIcon;
  } else {
    EyeSlashIcon = tmp2(6463).EyeSlashIcon;
  }
  items = [, ];
  const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_MUTED };
  items[0] = _false(EyeSlashIcon, obj2);
  const Text = tmp2(4892).Text;
  const intl = tmp2(1126).intl;
  const string = intl.string;
  const t = tmp2(1126).t;
  const obj3 = { variant: "text-md/normal", color: "text-muted", children: string("blocked" === reason ? t["WPe+xL"] : t.uxrh1O) };
  items[1] = _false(Text, obj3);
  return tmp(Stack, obj);
});
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx");

export default tmp4;
