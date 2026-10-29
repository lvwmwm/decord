// Module ID: 12562
// Function ID: 12563
// Name: ConjureScopeCardView
// Dependencies: [19, 17, 21, 5005, 587, 558, 576, 12563, 12570, 5271, 2]

// Module 12562 (ConjureScopeCardView)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConjureScopeServerCardDefault from "ConjureScopeServerCard" /* 12563 */;
import ConjureClarificationCardDefault from "ConjureClarificationCard" /* 12570 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let tmp;
const Text_Text = tmp(5271);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2 };
obj2 = { gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureScopeCardView(arg0) {
  let card;
  let items;
  let onInputFocusChange;
  let projectId;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(10);
  ({ projectId, card, onInputFocusChange } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === card) {
    if (cResult[1] === onInputFocusChange) {
      let tmp5;
      let tmp11;
      if (cResult[2] === projectId) {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== card.failure) {
        let tmp12 = null;
        if (null != card.failure) {
          const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: card.failure };
          tmp12 = React3(Text_Text.Text, obj3);
        }
        cResult[4] = card.failure;
        cResult[5] = tmp12;
        tmp11 = tmp12;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === tmp4.container) {
        if (cResult[7] === tmp5) {
          let tmp14;
          if (cResult[8] === tmp11) {
            tmp14 = cResult[9];
          }
          return tmp14;
        }
      }
      const obj4 = { style: tmp4.container, children: items };
      items = [tmp5, tmp11];
      const tmp17 = hasOwnProperty(View, obj4);
      cResult[6] = tmp4.container;
      cResult[7] = tmp5;
      cResult[8] = tmp11;
      cResult[9] = tmp17;
      tmp14 = tmp17;
    }
  }
  if (true === card.serverStep) {
    const obj5 = { projectId, card };
    tmp8 = React3(ConjureScopeServerCardDefault, obj5, card.clarification.id);
  } else {
    const obj9 = { projectId, clarification: null, onSubmit: null, submitText: null, onBack: null, backText: null, hideSubmit: null, onInputFocusChange };
    ({ clarification: obj2.clarification, onSubmit: obj2.onSubmit, submitText: obj2.submitText, onBack: obj2.onBack, backText: obj2.backText, hideSubmit: obj2.hideSubmit } = card);
    tmp8 = React3(ConjureClarificationCardDefault, obj9, card.clarification.id);
  }
  cResult[0] = card;
  cResult[1] = onInputFocusChange;
  cResult[2] = projectId;
  cResult[3] = tmp8;
  tmp5 = tmp8;
}) : (function ConjureScopeCardView(onInputFocusChange) {
  let card;
  let items;
  let projectId;
  let tmp3;
  let tmp6;
  ({ projectId, card } = onInputFocusChange);
  onInputFocusChange = onInputFocusChange.onInputFocusChange;
  const obj = { style: closure_6().container, children: items };
  const tmp = hasOwnProperty;
  const tmp2 = View;
  if (true === card.serverStep) {
    const obj3 = { projectId, card };
    tmp6 = React3(ConjureScopeServerCardDefault, obj3, card.clarification.id);
    tmp3 = React3;
  } else {
    tmp3 = React3;
    const obj4 = { projectId, clarification: null, onSubmit: null, submitText: null, onBack: null, backText: null, hideSubmit: null, onInputFocusChange };
    ({ clarification: obj2.clarification, onSubmit: obj2.onSubmit, submitText: obj2.submitText, onBack: obj2.onBack, backText: obj2.backText, hideSubmit: obj2.hideSubmit } = card);
    tmp6 = React3(ConjureClarificationCardDefault, obj4, card.clarification.id);
  }
  items = [tmp6, ];
  let tmp3Result = null;
  if (null != card.failure) {
    const obj7 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: card.failure };
    tmp3Result = tmp3(Text_Text.Text, obj7);
  }
  items[1] = tmp3Result;
  return tmp(tmp2, obj);
});
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeCardView.tsx");

export default tmp4;
