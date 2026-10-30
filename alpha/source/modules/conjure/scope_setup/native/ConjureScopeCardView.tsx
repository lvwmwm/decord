// Module ID: 12714
// Function ID: 12715
// Name: ConjureScopeCardView
// Dependencies: [19, 17, 21, 5009, 575, 12715, 12720, 5619, 2]
// Exports: default

// Module 12714 (ConjureScopeCardView)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import ConjureScopeServerCardDefault from "ConjureScopeServerCard" /* 12715 */;
import ConjureClarificationCardDefault from "ConjureClarificationCard" /* 12720 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2 };
obj2 = { gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeCardView.tsx");

export default function ConjureScopeCardView(onInputFocusChange) {
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
};
