// Module ID: 12399
// Function ID: 12400
// Name: ConjureRestoreProposalCard
// Dependencies: [19, 21, 558, 576, 11778, 5216, 1128, 3830, 5957, 5226, 11742, 2]

// Module 12399 (ConjureRestoreProposalCard)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import Text_Text from "Text/Text" /* 5216 */;
import Stack_Stack from "Stack/Stack" /* 5957 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 11742 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 11778 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRestoreProposalCard(arg0) {
  let intl;
  let intl2;
  let items;
  let items1;
  let obj7;
  let onRestore;
  let proposal;
  let tmp10;
  let tmp13;
  let tmp4;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(15);
  ({ proposal, onRestore } = arg0);
  if (cResult[0] !== proposal.authored_at) {
    const tmpResult = ConjureHistoryFormat;
    const formatAuthoredAtResult = tmpResult.formatAuthoredAt(proposal.authored_at);
    cResult[0] = proposal.authored_at;
    cResult[1] = formatAuthoredAtResult;
    tmp4 = formatAuthoredAtResult;
  } else {
    tmp4 = cResult[1];
  }
  const relative = tmp4.relative;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3830["t+b0rz"]) };
    const Text = tmp(5216).Text;
    intl = tmp(1128).intl;
    const tmp9 = _false(Text, obj2);
    cResult[2] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== proposal.subject) {
    const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
    const tmp12 = _false(Text_Text.Text, obj3);
    cResult[3] = proposal.subject;
    cResult[4] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== relative) {
    let tmp14 = null;
    if (null != relative) {
      const obj4 = { variant: "text-sm/normal", color: "text-muted", children: relative };
      tmp14 = _false(tmp(5216).Text, obj4);
    }
    cResult[5] = relative;
    cResult[6] = tmp14;
    tmp13 = tmp14;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] === tmp10) {
    let tmp16;
    let tmp18;
    if (cResult[8] === tmp13) {
      tmp16 = cResult[9];
    }
    if (cResult[10] !== onRestore) {
      let tmp19 = null;
      if (null != onRestore) {
        const obj5 = { text: intl2.string(_modDef3830.H8Jfhu), variant: "secondary", onPress: onRestore };
        const Button = tmp(5226).Button;
        intl2 = tmp(1128).intl;
        tmp19 = _false(Button, obj5);
      }
      cResult[10] = onRestore;
      cResult[11] = tmp19;
      tmp18 = tmp19;
    } else {
      tmp18 = cResult[11];
    }
    if (cResult[12] === tmp16) {
      let tmp22;
      if (cResult[13] === tmp18) {
        tmp22 = cResult[14];
      }
      return tmp22;
    }
    const obj6 = { children: React3(Stack_Stack.Stack, obj7) };
    obj7 = { direction: "vertical", spacing: 8, children: items };
    items = [tmp6, tmp16, tmp18];
    const tmp25 = ConjureNativeCardSurfaceDefault;
    const tmp27 = _false(tmp25, obj6);
    cResult[12] = tmp16;
    cResult[13] = tmp18;
    cResult[14] = tmp27;
    tmp22 = tmp27;
  }
  const obj8 = { direction: "vertical", spacing: 4, children: items1 };
  items1 = [tmp10, tmp13];
  const tmp17 = React3(Stack_Stack.Stack, obj8);
  cResult[7] = tmp10;
  cResult[8] = tmp13;
  cResult[9] = tmp17;
  tmp16 = tmp17;
}) : (function ConjureRestoreProposalCard(arg0) {
  let intl;
  let intl2;
  let onRestore;
  let proposal;
  ({ proposal, onRestore } = arg0);
  const obj = ConjureHistoryFormat;
  const relative = obj.formatAuthoredAt(proposal.authored_at).relative;
  const tmp5 = ConjureNativeCardSurfaceDefault;
  const Stack = Stack_Stack.Stack;
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3830["t+b0rz"]) };
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
    tmp3Result = tmp3(tmp(5216).Text, obj4);
  }
  items1[1] = tmp3Result;
  items[1] = React3(Stack2, { direction: "vertical", spacing: 4, children: items1 });
  let tmp3Result2 = null;
  if (null != onRestore) {
    const obj5 = { text: intl2.string(_modDef3830.H8Jfhu), variant: "secondary", onPress: onRestore };
    const Button = tmp(5226).Button;
    intl2 = tmp(1128).intl;
    tmp3Result2 = tmp3(Button, obj5);
  }
  items[2] = tmp3Result2;
  const obj6 = { children: React3(Stack, { direction: "vertical", spacing: 8, children: items }) };
  return _false(tmp5, obj6);
});
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjureRestoreProposalCard.tsx");

export default tmp4;
