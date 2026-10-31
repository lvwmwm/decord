// Module ID: 12774
// Function ID: 12775
// Name: ConjureRestoreProposalCard
// Dependencies: [19, 21, 12522, 12477, 6027, 5624, 1113, 3868, 5634, 2]
// Exports: default

// Module 12774 (ConjureRestoreProposalCard)
import intl3 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import Text_Text from "Text/Text" /* 5624 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 12477 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 12522 */;
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
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3868["t+b0rz"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  const items = [_false(Text, obj2), , ];
  const Stack2 = Stack_Stack.Stack;
  const items1 = [, ];
  const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
  items1[0] = _false(Text_Text.Text, obj3);
  let tmp3Result = null;
  if (null != relative) {
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: relative };
    tmp3Result = tmp3(tmp(5624).Text, obj4);
  }
  items1[1] = tmp3Result;
  items[1] = React3(Stack2, { direction: "vertical", spacing: 4, children: items1 });
  let tmp3Result2 = null;
  if (null != onRestore) {
    const obj5 = { text: intl2.string(_modDef3868.H8Jfhu), variant: "secondary", onPress: onRestore };
    const Button = tmp(5634).Button;
    intl2 = tmp(1113).intl;
    tmp3Result2 = tmp3(Button, obj5);
  }
  items[2] = tmp3Result2;
  const obj6 = { children: React3(Stack, { direction: "vertical", spacing: 8, children: items }) };
  return _false(tmp5, obj6);
};
