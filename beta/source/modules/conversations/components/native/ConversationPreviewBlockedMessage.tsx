// Module ID: 7370
// Function ID: 7371
// Name: ConversationPreviewBlockedMessage
// Dependencies: [19, 21, 5279, 576, 7371, 6387, 4832, 1115, 2]
// Exports: default

// Module 7370 (ConversationPreviewBlockedMessage)
import nativeDefault from "native" /* 576 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
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
    EyeSlashIcon = tmp2(7371).DenyIcon;
  } else {
    EyeSlashIcon = tmp2(6387).EyeSlashIcon;
  }
  items = [, ];
  const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_MUTED };
  items[0] = _false(EyeSlashIcon, obj2);
  const Text = tmp2(4832).Text;
  const intl = tmp2(1115).intl;
  const string = intl.string;
  const t = tmp2(1115).t;
  const obj3 = { variant: "text-md/normal", color: "text-muted", children: string("blocked" === reason ? t["WPe+xL"] : t.uxrh1O) };
  items[1] = _false(Text, obj3);
  return tmp(Stack, obj);
};
