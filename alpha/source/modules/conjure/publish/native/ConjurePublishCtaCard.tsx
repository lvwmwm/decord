// Module ID: 12528
// Function ID: 12529
// Name: ConjurePublishCtaCard
// Dependencies: [19, 21, 558, 576, 12190, 6013, 5280, 11803, 12338, 12529, 5270, 12530, 2]

// Module 12528 (ConjurePublishCtaCard)
import react2 from "react" /* 576 */;
import components_Button_Button from "components/Button/Button" /* 5280 */;
import Stack_Stack from "Stack/Stack" /* 6013 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 11803 */;
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12190 */;
import conjurePublishCard from "conjurePublishCard" /* 12338 */;
import ConjureTipInlineCalloutDefault from "ConjureTipInlineCallout" /* 12529 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function PublishCta(publish) {
  let obj3;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(6);
  publish = publish.publish;
  const tmp4 = useConjureStartPublishDefault(publish.projectId, publish);
  let closure_0 = tmp4;
  if (cResult[0] !== tmp4) {
    const fn = function n() {
      return closure_0("card");
    };
    cResult[0] = tmp4;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === publish.label) {
    if (cResult[3] === (publish.publishing && !publish.showsProgress)) {
      let tmp7;
      if (cResult[4] === tmp6) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const obj2 = { direction: "horizontal", children: _false(components_Button_Button.Button, obj3) };
  const Stack = tmp(6013).Stack;
  obj3 = { text: publish.label, variant: "primary", size: "sm", loading: publish.publishing && !publish.showsProgress, onPress: tmp6 };
  const tmp8 = _false(Stack, obj2);
  cResult[2] = publish.label;
  cResult[3] = publish.publishing && !publish.showsProgress;
  cResult[4] = tmp6;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : (function PublishCta(publish) {
  let publishing;
  publish = publish.publish;
  let closure_0 = useConjureStartPublishDefault(publish.projectId, publish);
  const Stack = Stack_Stack.Stack;
  const obj = {
    text: publish.label,
    variant: "primary",
    size: "sm",
    loading: publishing,
    onPress() {
      return closure_0("card");
    }
  };
  publishing = publish.publishing;
  const Button = components_Button_Button.Button;
  if (publishing) {
    publishing = !publish.showsProgress;
  }
  const obj2 = { direction: "horizontal", children: _false(Button, obj) };
  return _false(Stack, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishCtaCard(arg0) {
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
      const Stack = tmp(6013).Stack;
      const items = [_false(closure_5, obj2), , ];
      let tmp8Result = null;
      const tmp10 = React3;
      if (null != tmp5.failure) {
        const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp5.failure };
        tmp8Result = tmp8(tmp(5270).Text, obj3);
      }
      items[1] = tmp8Result;
      let tmp8Result3 = null;
      if (null != turnId) {
        const obj4 = { projectId, turnId, cta, status: tmp5.status };
        tmp8Result3 = tmp8(tmp4(12530), obj4, turnId);
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
      const Stack = tmp5(6013).Stack;
      const items = [_false(closure_5, obj2), , ];
      let tmp6Result = null;
      const tmp8 = React3;
      if (null != tmp3.failure) {
        const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp3.failure };
        tmp6Result = tmp6(tmp5(5270).Text, obj3);
      }
      items[1] = tmp6Result;
      let tmp6Result3 = null;
      if (null != turnId) {
        const obj4 = { projectId, turnId, cta, status: tmp3.status };
        tmp6Result3 = tmp6(tmp(12530), obj4, turnId);
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

export default tmp4;
