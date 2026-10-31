// Module ID: 12775
// Function ID: 12776
// Name: ConjurePublishScheduleProposalCard
// Dependencies: [19, 21, 12776, 12477, 6027, 5624, 1113, 3868, 5634, 2]
// Exports: default

// Module 12775 (ConjurePublishScheduleProposalCard)
import intl5 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import Text_Text from "Text/Text" /* 5624 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 12477 */;
import useConjurePublishScheduleProposalDefault from "useConjurePublishScheduleProposal" /* 12776 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/publish_schedule/native/ConjurePublishScheduleProposalCard.tsx");

export default function ConjurePublishScheduleProposalCard(arg0) {
  let current;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let projectId;
  let proposal;
  ({ projectId, proposal, current } = arg0);
  const tmp3 = useConjurePublishScheduleProposalDefault(projectId, proposal, current);
  const tmp5 = ConjureNativeCardSurfaceDefault;
  const Stack = Stack_Stack.Stack;
  const obj = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3868.ZtfX9V) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  const items = [_false(Text, obj), , ];
  const Stack2 = Stack_Stack.Stack;
  const items1 = [, , , , ];
  const obj2 = { variant: "text-md/medium", color: "text-default", children: tmp3.summary };
  items1[0] = _false(Text_Text.Text, obj2);
  let tmp4Result = null;
  if (null != tmp3.firstPublish) {
    const obj3 = { variant: "text-sm/normal", color: "text-muted", children: tmp3.firstPublish };
    tmp4Result = tmp4(tmp7(5624).Text, obj3);
  }
  items1[1] = tmp4Result;
  const obj4 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(_modDef3868.cxNHma) };
  const Text2 = tmp7(5624).Text;
  intl2 = tmp7(1113).intl;
  items1[2] = _false(Text2, obj4);
  let tmp4Result4 = null;
  if ("on" === tmp3.status) {
    const obj5 = { variant: "text-sm/normal", color: "text-default", accessibilityRole: "alert", children: intl3.string(_modDef3868.k4IRsm) };
    const Text3 = tmp7(5624).Text;
    intl3 = tmp7(1113).intl;
    tmp4Result4 = tmp4(Text3, obj5);
  }
  items1[3] = tmp4Result4;
  let tmp4Result5 = null;
  if ("error" === tmp3.status) {
    const obj6 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp3.error };
    tmp4Result5 = tmp4(tmp7(5624).Text, obj6);
  }
  items1[4] = tmp4Result5;
  items[1] = React3(Stack2, { direction: "vertical", spacing: 4, children: items1 });
  let tmp4Result6 = null;
  if (null != tmp3.onTurnOn) {
    const obj7 = { text: intl4.string(_modDef3868.EuhBSG), variant: "secondary", loading: "sending" === tmp3.status, disabled: "sending" === tmp3.status, onPress: tmp3.onTurnOn };
    const Button = tmp7(5634).Button;
    intl4 = tmp7(1113).intl;
    tmp4Result6 = tmp4(Button, obj7);
  }
  items[2] = tmp4Result6;
  const obj8 = { children: React3(Stack, { direction: "vertical", spacing: 8, children: items }) };
  return _false(tmp5, obj8);
};
