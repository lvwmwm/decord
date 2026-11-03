// Module ID: 10013
// Function ID: 10014
// Name: ConversationPreviewBlockedMessage
// Dependencies: [19, 21, 6147, 575, 10014, 7261, 5747, 1113, 2]
// Exports: default

// Module 10013 (ConversationPreviewBlockedMessage)
import nativeDefault from "native" /* 575 */;
import Stack_Stack from "Stack/Stack" /* 6147 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx");

export default function ConversationPreviewBlockedMessage(reason) {
  let EyeSlashIcon;
  let items;
  reason = reason.reason;
  const obj = { direction: "horizontal", spacing: nativeDefault.space.PX_8, align: "center", children: items };
  const Stack = Stack_Stack.Stack;
  const tmp = React3;
  if ("blocked" === reason) {
    EyeSlashIcon = tmp2(10014).DenyIcon;
  } else {
    EyeSlashIcon = tmp2(7261).EyeSlashIcon;
  }
  items = [, ];
  const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_MUTED };
  items[0] = _false(EyeSlashIcon, obj2);
  const Text = tmp2(5747).Text;
  const intl = tmp2(1113).intl;
  const string = intl.string;
  const t = tmp2(1113).t;
  const obj3 = { variant: "text-md/normal", color: "text-muted", children: string("blocked" === reason ? t["WPe+xL"] : t.uxrh1O) };
  items[1] = _false(Text, obj3);
  return tmp(Stack, obj);
};
