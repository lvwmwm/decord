// Module ID: 12491
// Function ID: 12492
// Name: ConjurePublishCtaCard
// Dependencies: [19, 21, 558, 576, 11877, 12290, 5977, 5244, 12308, 12492, 5234, 12493, 2]

// Module 12491 (ConjurePublishCtaCard)
import react2 from "react" /* 576 */;
import components_Button_Button from "components/Button/Button" /* 5244 */;
import Stack_Stack from "Stack/Stack" /* 5977 */;
import useConjurePublishAction from "useConjurePublishAction" /* 11877 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12290 */;
import conjurePublishCard from "conjurePublishCard" /* 12308 */;
import ConjureTipInlineCalloutDefault from "ConjureTipInlineCallout" /* 12492 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useConjurePublishActionDefault = useConjurePublishAction;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function PublishCta(projectId) {
  let obj3;
  const tmp = projectId;
  const obj = projectId(576);
  const cResult = obj.c(7);
  projectId = projectId.projectId;
  const publish = projectId.publish;
  const context = react.useContext(projectId(11877).ConjurePublishActionContext);
  if (cResult[0] === context) {
    let tmp6;
    if (cResult[1] === projectId) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === publish.label) {
      if (cResult[4] === (publish.publishing && !publish.showsProgress)) {
        let tmp7;
        if (cResult[5] === tmp6) {
          tmp7 = cResult[6];
        }
        return tmp7;
      }
    }
    const obj2 = { direction: "horizontal", children: closure_4(tmp(5244).Button, obj3) };
    const Stack = tmp(5977).Stack;
    obj3 = { text: publish.label, variant: "primary", size: "sm", loading: publish.publishing && !publish.showsProgress, onPress: tmp6 };
    const tmp9 = closure_4(Stack, obj2);
    cResult[3] = publish.label;
    cResult[4] = publish.publishing && !publish.showsProgress;
    cResult[5] = tmp6;
    cResult[6] = tmp9;
    tmp7 = tmp9;
  }
  const fn = function u() {
    if (null != context) {
      ConjurePublishSheetDefault(projectId, tmp.guildId, "card");
    }
  };
  cResult[0] = context;
  cResult[1] = projectId;
  cResult[2] = fn;
  tmp6 = fn;
}) : (function PublishCta(arg0) {
  let publish;
  let publishing;
  ({ projectId: require, publish } = arg0);
  let closure_1 = react.useContext(useConjurePublishAction.ConjurePublishActionContext);
  const tmp = closure_4;
  const Stack = Stack_Stack.Stack;
  const obj = {
    text: publish.label,
    variant: "primary",
    size: "sm",
    loading: publishing,
    onPress() {
      if (null != closure_1) {
        ConjurePublishSheetDefault(require, tmp.guildId, "card");
      }
    }
  };
  publishing = publish.publishing;
  const Button = components_Button_Button.Button;
  if (publishing) {
    publishing = !publish.showsProgress;
  }
  const obj2 = { direction: "horizontal", children: tmp(Button, obj) };
  return tmp(Stack, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishCtaCard(arg0) {
  let cta;
  let obj6;
  let projectId;
  let turnId;
  const obj = react2;
  const cResult = obj.c(5);
  ({ projectId, turnId, cta } = arg0);
  const tmp5 = useConjurePublishActionDefault(projectId);
  if (cResult[0] === cta) {
    if (cResult[1] === projectId) {
      if (cResult[2] === tmp5) {
        let tmp6;
        if (cResult[3] === turnId) {
          tmp6 = cResult[4];
        }
        return tmp6;
      }
    }
  }
  let tmp8Result4 = null;
  if (null != tmp5) {
    tmp8Result4 = null;
    const tmpResult = conjurePublishCard;
    if (tmpResult.isConjurePublishCtaVisible(tmp5, cta)) {
      const obj2 = { projectId, publish: tmp5 };
      const tmp4Result = ConjureTipInlineCalloutDefault;
      const Stack = tmp(5977).Stack;
      const items = [React3(closure_6, obj2), , ];
      let tmp8Result = null;
      const tmp10 = hasOwnProperty;
      if (null != tmp5.failure) {
        const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp5.failure };
        tmp8Result = tmp8(tmp(5234).Text, obj3);
      }
      items[1] = tmp8Result;
      let tmp8Result3 = null;
      if (null != turnId) {
        const obj4 = { projectId, turnId, cta, status: tmp5.status };
        tmp8Result3 = tmp8(tmp4(12493), obj4, turnId);
      }
      const obj5 = { children: tmp10(Stack, obj6) };
      obj6 = { spacing: 12, children: items };
      items[2] = tmp8Result3;
      tmp8Result4 = tmp8(tmp4Result, obj5);
    }
  }
  cResult[0] = cta;
  cResult[1] = projectId;
  cResult[2] = tmp5;
  cResult[3] = turnId;
  cResult[4] = tmp8Result4;
  tmp6 = tmp8Result4;
}) : (function ConjurePublishCtaCard(arg0) {
  let cta;
  let obj6;
  let projectId;
  let turnId;
  ({ projectId, turnId, cta } = arg0);
  const tmp3 = useConjurePublishActionDefault(projectId);
  let tmp6Result4 = null;
  if (null != tmp3) {
    tmp6Result4 = null;
    const obj = conjurePublishCard;
    if (obj.isConjurePublishCtaVisible(tmp3, cta)) {
      const obj2 = { projectId, publish: tmp3 };
      const tmpResult = ConjureTipInlineCalloutDefault;
      const Stack = tmp5(5977).Stack;
      const items = [React3(closure_6, obj2), , ];
      let tmp6Result = null;
      const tmp8 = hasOwnProperty;
      if (null != tmp3.failure) {
        const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp3.failure };
        tmp6Result = tmp6(tmp5(5234).Text, obj3);
      }
      items[1] = tmp6Result;
      let tmp6Result3 = null;
      if (null != turnId) {
        const obj4 = { projectId, turnId, cta, status: tmp3.status };
        tmp6Result3 = tmp6(tmp(12493), obj4, turnId);
      }
      const obj5 = { children: tmp8(Stack, obj6) };
      obj6 = { spacing: 12, children: items };
      items[2] = tmp6Result3;
      tmp6Result4 = tmp6(tmpResult, obj5);
    }
  }
  return tmp6Result4;
});
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishCtaCard.tsx");

export default tmp3;
