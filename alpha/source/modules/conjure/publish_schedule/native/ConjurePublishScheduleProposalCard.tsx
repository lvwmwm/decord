// Module ID: 12440
// Function ID: 12441
// Name: ConjurePublishScheduleProposalCard
// Dependencies: [19, 21, 558, 576, 12441, 5220, 1128, 3830, 5963, 5230, 11770, 2]

// Module 12440 (ConjurePublishScheduleProposalCard)
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import Text_Text from "Text/Text" /* 5220 */;
import Stack_Stack from "Stack/Stack" /* 5963 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 11770 */;
import useConjurePublishScheduleProposalDefault from "useConjurePublishScheduleProposal" /* 12441 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishScheduleProposalCard(arg0) {
  let current;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let obj8;
  let projectId;
  let proposal;
  let tmp12;
  let tmp15;
  let tmp18;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(22);
  ({ projectId, proposal, current } = arg0);
  const tmp5 = useConjurePublishScheduleProposalDefault(projectId, proposal, current);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3830.ZtfX9V) };
    const Text = tmp(5220).Text;
    intl = tmp(1128).intl;
    const tmp8 = _false(Text, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp5.summary) {
    const obj3 = { variant: "text-md/medium", color: "text-default", children: tmp5.summary };
    const tmp11 = _false(Text_Text.Text, obj3);
    cResult[1] = tmp5.summary;
    cResult[2] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp5.firstPublish) {
    let tmp13 = null;
    if (null != tmp5.firstPublish) {
      const obj4 = { variant: "text-sm/normal", color: "text-muted", children: tmp5.firstPublish };
      tmp13 = _false(tmp(5220).Text, obj4);
    }
    cResult[3] = tmp5.firstPublish;
    cResult[4] = tmp13;
    tmp12 = tmp13;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(_modDef3830.cxNHma) };
    const Text2 = tmp(5220).Text;
    intl2 = tmp(1128).intl;
    const tmp17 = _false(Text2, obj5);
    cResult[5] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== tmp5.status) {
    let tmp19 = null;
    if ("on" === tmp5.status) {
      const obj6 = { variant: "text-sm/normal", color: "text-default", accessibilityRole: "alert", children: intl3.string(_modDef3830.k4IRsm) };
      const Text3 = tmp(5220).Text;
      intl3 = tmp(1128).intl;
      tmp19 = _false(Text3, obj6);
    }
    cResult[6] = tmp5.status;
    cResult[7] = tmp19;
    tmp18 = tmp19;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] === tmp5.error) {
    let tmp21;
    if (cResult[9] === tmp5.status) {
      tmp21 = cResult[10];
    }
    if (cResult[11] === tmp9) {
      if (cResult[12] === tmp12) {
        if (cResult[13] === tmp18) {
          let tmp24;
          if (cResult[14] === tmp21) {
            tmp24 = cResult[15];
          }
          if (cResult[16] === tmp5.onTurnOn) {
            let tmp27;
            if (cResult[17] === tmp5.status) {
              tmp27 = cResult[18];
            }
            if (cResult[19] === tmp24) {
              let tmp30;
              if (cResult[20] === tmp27) {
                tmp30 = cResult[21];
              }
              return tmp30;
            }
            const obj7 = { children: React3(Stack_Stack.Stack, obj8) };
            obj8 = { direction: "vertical", spacing: 8, children: items };
            items = [first, tmp24, tmp27];
            const tmp4Result = ConjureNativeCardSurfaceDefault;
            const tmp34 = _false(tmp4Result, obj7);
            cResult[19] = tmp24;
            cResult[20] = tmp27;
            cResult[21] = tmp34;
            tmp30 = tmp34;
          }
          let tmp28 = null;
          if (null != tmp5.onTurnOn) {
            const obj9 = { text: intl4.string(_modDef3830.EuhBSG), variant: "secondary", loading: "sending" === tmp5.status, disabled: "sending" === tmp5.status, onPress: tmp5.onTurnOn };
            const Button = tmp(5230).Button;
            intl4 = tmp(1128).intl;
            tmp28 = _false(Button, obj9);
          }
          cResult[16] = tmp5.onTurnOn;
          cResult[17] = tmp5.status;
          cResult[18] = tmp28;
          tmp27 = tmp28;
        }
      }
    }
    const obj10 = { direction: "vertical", spacing: 4, children: items1 };
    items1 = [tmp9, tmp12, tmp15, tmp18, tmp21];
    const tmp26 = React3(Stack_Stack.Stack, obj10);
    cResult[11] = tmp9;
    cResult[12] = tmp12;
    cResult[13] = tmp18;
    cResult[14] = tmp21;
    cResult[15] = tmp26;
    tmp24 = tmp26;
  }
  let tmp22 = null;
  if ("error" === tmp5.status) {
    const obj11 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp5.error };
    tmp22 = _false(tmp(5220).Text, obj11);
  }
  cResult[8] = tmp5.error;
  cResult[9] = tmp5.status;
  cResult[10] = tmp22;
  tmp21 = tmp22;
}) : (function ConjurePublishScheduleProposalCard(arg0) {
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
  const obj = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3830.ZtfX9V) };
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
    tmp4Result = tmp4(tmp7(5220).Text, obj3);
  }
  items1[1] = tmp4Result;
  const obj4 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(_modDef3830.cxNHma) };
  const Text2 = tmp7(5220).Text;
  intl2 = tmp7(1128).intl;
  items1[2] = _false(Text2, obj4);
  let tmp4Result4 = null;
  if ("on" === tmp3.status) {
    const obj5 = { variant: "text-sm/normal", color: "text-default", accessibilityRole: "alert", children: intl3.string(_modDef3830.k4IRsm) };
    const Text3 = tmp7(5220).Text;
    intl3 = tmp7(1128).intl;
    tmp4Result4 = tmp4(Text3, obj5);
  }
  items1[3] = tmp4Result4;
  let tmp4Result5 = null;
  if ("error" === tmp3.status) {
    const obj6 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp3.error };
    tmp4Result5 = tmp4(tmp7(5220).Text, obj6);
  }
  items1[4] = tmp4Result5;
  items[1] = React3(Stack2, { direction: "vertical", spacing: 4, children: items1 });
  let tmp4Result6 = null;
  if (null != tmp3.onTurnOn) {
    const obj7 = { text: intl4.string(_modDef3830.EuhBSG), variant: "secondary", loading: "sending" === tmp3.status, disabled: "sending" === tmp3.status, onPress: tmp3.onTurnOn };
    const Button = tmp7(5230).Button;
    intl4 = tmp7(1128).intl;
    tmp4Result6 = tmp4(Button, obj7);
  }
  items[2] = tmp4Result6;
  const obj8 = { children: React3(Stack, { direction: "vertical", spacing: 8, children: items }) };
  return _false(tmp5, obj8);
});
const result = size.fileFinishedImporting("modules/conjure/publish_schedule/native/ConjurePublishScheduleProposalCard.tsx");

export default tmp4;
