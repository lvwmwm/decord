// Module ID: 18660
// Function ID: 18661
// Name: ConjureRestoreProposalCard
// Dependencies: [19, 21, 18389, 18342, 5837, 5414, 1113, 4121, 5421, 2]
// Exports: default

// Module 18660 (ConjureRestoreProposalCard)
import intl3 from "intl" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;
import Text_Text from "Text/Text" /* 5414 */;
import Stack_Stack from "Stack/Stack" /* 5837 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 18342 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 18389 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjureRestoreProposalCard.tsx");

export default function ConjureRestoreProposalCard(arg0) {
  let intl;
  let intl2;
  let onRestore;
  let proposal;
  ({ proposal, onRestore } = arg0);
  const obj = ConjureHistoryFormat;
  const relative = obj.formatAuthoredAt(proposal.authored_at).relative;
  const tmp5 = ConjureNativeCardSurfaceDefault;
  const Stack = Stack_Stack.Stack;
  const obj2 = { variant: "body-sm/semibold", color: "text-muted", children: intl.string(_modDef4121["t+b0rz"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  const items = [_false(Text, obj2), , ];
  const Stack2 = Stack_Stack.Stack;
  const items1 = [, ];
  const obj3 = { variant: "body-md/medium", color: "text-default", children: proposal.subject };
  items1[0] = _false(Text_Text.Text, obj3);
  let tmp3Result = null;
  if (null != relative) {
    const obj4 = { variant: "body-sm/normal", color: "text-muted", children: relative };
    tmp3Result = tmp3(tmp(5414).Text, obj4);
  }
  items1[1] = tmp3Result;
  items[1] = React3(Stack2, { direction: "vertical", spacing: 4, children: items1 });
  let tmp3Result2 = null;
  if (null != onRestore) {
    const obj5 = { text: intl2.string(_modDef4121.H8Jfhu), variant: "secondary", onPress: onRestore };
    const Button = tmp(5421).Button;
    intl2 = tmp(1113).intl;
    tmp3Result2 = tmp3(Button, obj5);
  }
  items[2] = tmp3Result2;
  const obj6 = { children: React3(Stack, { direction: "vertical", spacing: 8, children: items }) };
  return _false(tmp5, obj6);
};
