// Module ID: 12504
// Function ID: 12505
// Name: ConjureScopeCardView
// Dependencies: [19, 17, 21, 5003, 587, 558, 576, 12505, 5266, 2]

// Module 12504 (ConjureScopeCardView)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConjureClarificationCardDefault from "ConjureClarificationCard" /* 12505 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let tmp;
const Text_Text = tmp(5266);
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
  const obj = react2;
  const cResult = obj.c(15);
  ({ projectId, card, onInputFocusChange } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === card.backText) {
    if (cResult[1] === card.clarification) {
      if (cResult[2] === card.hideSubmit) {
        if (cResult[3] === card.onBack) {
          if (cResult[4] === card.onSubmit) {
            if (cResult[5] === card.submitText) {
              if (cResult[6] === onInputFocusChange) {
                let tmp5;
                let tmp7;
                if (cResult[7] === projectId) {
                  tmp5 = cResult[8];
                }
                if (cResult[9] !== card.failure) {
                  let tmp8 = null;
                  if (null != card.failure) {
                    const obj2 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: card.failure };
                    tmp8 = React3(Text_Text.Text, obj2);
                  }
                  cResult[9] = card.failure;
                  cResult[10] = tmp8;
                  tmp7 = tmp8;
                } else {
                  tmp7 = cResult[10];
                }
                if (cResult[11] === tmp4.container) {
                  if (cResult[12] === tmp5) {
                    let tmp10;
                    if (cResult[13] === tmp7) {
                      tmp10 = cResult[14];
                    }
                    return tmp10;
                  }
                }
                const obj3 = { style: tmp4.container, children: items };
                items = [tmp5, tmp7];
                const tmp13 = hasOwnProperty(View, obj3);
                cResult[11] = tmp4.container;
                cResult[12] = tmp5;
                cResult[13] = tmp7;
                cResult[14] = tmp13;
                tmp10 = tmp13;
              }
            }
          }
        }
      }
    }
  }
  const obj4 = { projectId, clarification: card.clarification, onSubmit: card.onSubmit, submitText: card.submitText, onBack: card.onBack, backText: card.backText, hideSubmit: card.hideSubmit, onInputFocusChange };
  const tmp6 = React3(ConjureClarificationCardDefault, obj4, card.clarification.id);
  cResult[0] = card.backText;
  cResult[1] = card.clarification;
  cResult[2] = card.hideSubmit;
  cResult[3] = card.onBack;
  cResult[4] = card.onSubmit;
  cResult[5] = card.submitText;
  cResult[6] = onInputFocusChange;
  cResult[7] = projectId;
  cResult[8] = tmp6;
  tmp5 = tmp6;
}) : (function ConjureScopeCardView(card) {
  let items;
  let onInputFocusChange;
  let projectId;
  card = card.card;
  ({ projectId, onInputFocusChange } = card);
  const obj = { style: closure_6().container, children: items };
  items = [, ];
  const obj2 = { projectId, clarification: card.clarification, onSubmit: card.onSubmit, submitText: card.submitText, onBack: card.onBack, backText: card.backText, hideSubmit: card.hideSubmit, onInputFocusChange };
  items[0] = React3(ConjureClarificationCardDefault, obj2, card.clarification.id);
  let tmp3Result = null;
  const tmp = hasOwnProperty;
  const tmp2 = View;
  const tmp3 = React3;
  if (null != card.failure) {
    const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: card.failure };
    tmp3Result = tmp3(Text_Text.Text, obj3);
  }
  items[1] = tmp3Result;
  return tmp(tmp2, obj);
});
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeCardView.tsx");

export default tmp4;
