// Module ID: 12423
// Function ID: 12424
// Name: ConjurePublishCtaCard
// Dependencies: [19, 21, 558, 576, 11816, 12230, 5964, 5230, 12248, 12424, 12425, 2]

// Module 12423 (ConjurePublishCtaCard)
import react2 from "react" /* 576 */;
import components_Button_Button from "components/Button/Button" /* 5230 */;
import Stack_Stack from "Stack/Stack" /* 5964 */;
import useConjurePublishAction from "useConjurePublishAction" /* 11816 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12230 */;
import conjurePublishCard from "conjurePublishCard" /* 12248 */;
import ConjureTipInlineCalloutDefault from "ConjureTipInlineCallout" /* 12424 */;
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
  let obj5;
  const tmp = projectId;
  const obj = projectId(576);
  const cResult = obj.c(7);
  projectId = projectId.projectId;
  const publish = projectId.publish;
  const context = react.useContext(projectId(11816).ConjurePublishActionContext);
  if (cResult[0] === context) {
    let tmp5;
    if (cResult[1] === projectId) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === publish.label) {
      if (cResult[4] === publish.publishing) {
        let tmp6;
        if (cResult[5] === tmp5) {
          tmp6 = cResult[6];
        }
        return tmp6;
      }
    }
    const obj2 = { direction: "horizontal", children: closure_4(tmp(5230).Button, obj5) };
    const Stack = tmp(5964).Stack;
    obj5 = { text: null, variant: "primary", size: "sm", loading: null, onPress: tmp5 };
    ({ label: obj3.text, publishing: obj3.loading } = publish);
    const tmp8 = closure_4(Stack, obj2);
    cResult[3] = publish.label;
    cResult[4] = publish.publishing;
    cResult[5] = tmp5;
    cResult[6] = tmp8;
    tmp6 = tmp8;
  }
  const fn = function u() {
    if (null != context) {
      ConjurePublishSheetDefault(projectId, tmp.guildId, "card");
    }
  };
  cResult[0] = context;
  cResult[1] = projectId;
  cResult[2] = fn;
  tmp5 = fn;
}) : (function PublishCta(arg0) {
  let obj2;
  let publish;
  ({ projectId: require, publish } = arg0);
  let closure_1 = react.useContext(useConjurePublishAction.ConjurePublishActionContext);
  const obj = { direction: "horizontal", children: closure_4(components_Button_Button.Button, obj2) };
  const Stack = Stack_Stack.Stack;
  obj2 = {
    text: publish.label,
    variant: "primary",
    size: "sm",
    loading: publish.publishing,
    onPress() {
      if (null != closure_1) {
        ConjurePublishSheetDefault(require, tmp.guildId, "card");
      }
    }
  };
  return closure_4(Stack, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishCtaCard(arg0) {
  let cta;
  let obj5;
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
  let tmp8Result2 = null;
  if (null != tmp5) {
    tmp8Result2 = null;
    const tmpResult = conjurePublishCard;
    if (tmpResult.isConjurePublishCtaVisible(tmp5, cta)) {
      const obj2 = { projectId, publish: tmp5 };
      const tmp4Result = ConjureTipInlineCalloutDefault;
      const Stack = tmp(5964).Stack;
      const items = [React3(closure_6, obj2), ];
      let tmp8Result = null;
      const tmp10 = hasOwnProperty;
      if (null != turnId) {
        const obj3 = { projectId, turnId, cta, status: tmp5.status };
        tmp8Result = tmp8(tmp4(12425), obj3, turnId);
      }
      const obj4 = { children: tmp10(Stack, obj5) };
      obj5 = { spacing: 12, children: items };
      items[1] = tmp8Result;
      tmp8Result2 = tmp8(tmp4Result, obj4);
    }
  }
  cResult[0] = cta;
  cResult[1] = projectId;
  cResult[2] = tmp5;
  cResult[3] = turnId;
  cResult[4] = tmp8Result2;
  tmp6 = tmp8Result2;
}) : (function ConjurePublishCtaCard(arg0) {
  let cta;
  let obj5;
  let projectId;
  let turnId;
  ({ projectId, turnId, cta } = arg0);
  const tmp3 = useConjurePublishActionDefault(projectId);
  let tmp6Result2 = null;
  if (null != tmp3) {
    tmp6Result2 = null;
    const obj = conjurePublishCard;
    const tmp5 = require;
    if (obj.isConjurePublishCtaVisible(tmp3, cta)) {
      const obj2 = { projectId, publish: tmp3 };
      const tmpResult = ConjureTipInlineCalloutDefault;
      const Stack = tmp5(5964).Stack;
      const items = [React3(closure_6, obj2), ];
      let tmp6Result = null;
      const tmp8 = hasOwnProperty;
      if (null != turnId) {
        const obj3 = { projectId, turnId, cta, status: tmp3.status };
        tmp6Result = tmp6(tmp(12425), obj3, turnId);
      }
      const obj4 = { children: tmp8(Stack, obj5) };
      obj5 = { spacing: 12, children: items };
      items[1] = tmp6Result;
      tmp6Result2 = tmp6(tmpResult, obj4);
    }
  }
  return tmp6Result2;
});
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishCtaCard.tsx");

export default tmp3;
