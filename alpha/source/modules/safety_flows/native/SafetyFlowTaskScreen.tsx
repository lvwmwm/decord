// Module ID: 17960
// Function ID: 17961
// Name: SafetyFlowTaskScreen
// Dependencies: [19, 21, 4845, 8054, 8055, 5463, 4841, 11616, 17958, 10654, 2]
// Exports: default

// Module 17960 (SafetyFlowTaskScreen)
import Text_Text from "Text/Text" /* 4841 */;
import Stack_Stack from "Stack/Stack" /* 5463 */;
import ModalScreen from "ModalScreen" /* 8054 */;
import ModalContent from "ModalContent" /* 8055 */;
import LogOutDisclaimerDefault from "LogOutDisclaimer" /* 17958 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4845);
let closure_5 = createStyles.createStyles({ header: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowTaskScreen.tsx");

export default function SafetyFlowTaskScreen(action) {
  ({ ImageComponent, subtitle, subtitleColor } = action);
  if (subtitleColor === undefined) {
    subtitleColor = "text-strong";
  }
  action = action.action;
  if (action === undefined) {
    action = null;
  }
  ({ footer, withLogout, onAction, children, submitting } = action);
  if (withLogout === undefined) {
    withLogout = true;
  }
  const tmp2 = closure_5();
  let tmp6 = null != ImageComponent;
  if (tmp6) {
    tmp6 = ImageComponent;
  }
  const items = [tmp6, React3(Text_Text.Text, { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp2.header, children: action.title }), ];
  let tmp7Result = null != subtitle;
  if (tmp7Result) {
    const obj2 = { variant: "text-md/medium", color: subtitleColor, style: tmp2.header, children: subtitle };
    tmp7Result = tmp7(tmp4(4841).Text, obj2);
  }
  const obj3 = { children: null };
  items[2] = tmp7Result;
  const items1 = [React4(Stack_Stack.Stack, { align: "center", justify: "center", spacing: 8, children: items }), children];
  obj3.children = items1;
  const children1 = [React4(ModalContent.ModalContent, obj3), ];
  if (undefined === footer) {
    if (withLogout) {
      withLogout = tmp7(LogOutDisclaimerDefault, {});
    }
    const items3 = [withLogout, ];
    let tmp7Result2 = null != action;
    if (tmp7Result2) {
      const obj4 = { variant: "primary", text: action, onPress: onAction, loading: submitting };
      tmp7Result2 = tmp7(tmp4(10654).ModalActionButton, obj4);
    }
    const obj5 = { children: null };
    items3[1] = tmp7Result2;
    obj5.children = items3;
    footer = tmp3(tmp4(11616).ModalFooter, obj5);
  }
  children1[1] = footer;
  return React4(ModalScreen.ModalScreen, { children: children1 });
};
