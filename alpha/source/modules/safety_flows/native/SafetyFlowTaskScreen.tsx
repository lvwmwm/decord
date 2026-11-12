// Module ID: 20712
// Function ID: 20713
// Name: SafetyFlowTaskScreen
// Dependencies: [19, 21, 5243, 8142, 8144, 6274, 5866, 13975, 20710, 15045, 2]
// Exports: default

// Module 20712 (SafetyFlowTaskScreen)
import Text_Text from "Text/Text" /* 5866 */;
import Stack_Stack from "Stack/Stack" /* 6274 */;
import ModalScreen2 from "ModalScreen" /* 8142 */;
import ModalContent2 from "ModalContent" /* 8144 */;
import LogOutDisclaimerDefault from "LogOutDisclaimer" /* 20710 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ header: { textAlign: "center" } });
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowTaskScreen.tsx");

export default function SafetyFlowTaskScreen(title) {
  let ImageComponent;
  let children;
  let footer;
  let items1;
  let onAction;
  let submitting;
  let subtitle;
  let subtitleColor;
  let withLogout;
  ({ ImageComponent, subtitle, subtitleColor } = title);
  title = title.title;
  if (subtitleColor === undefined) {
    subtitleColor = "text-strong";
  }
  let action = title.action;
  if (action === undefined) {
    action = null;
  }
  ({ footer, withLogout, onAction, children, submitting } = title);
  if (withLogout === undefined) {
    withLogout = true;
  }
  const tmp2 = closure_5();
  const ModalScreen = ModalScreen2.ModalScreen;
  const ModalContent = ModalContent2.ModalContent;
  let tmp6 = null != ImageComponent;
  const Stack = Stack_Stack.Stack;
  if (tmp6) {
    tmp6 = ImageComponent;
  }
  const items = [tmp6, , ];
  const obj = { accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp2.header, children: title };
  items[1] = _false(Text_Text.Text, obj);
  let tmp7Result = null != subtitle;
  if (tmp7Result) {
    const obj2 = { variant: "body-md/medium", color: subtitleColor, style: tmp2.header, children: subtitle };
    tmp7Result = tmp7(tmp4(5866).Text, obj2);
  }
  const obj3 = { children: items1 };
  items[2] = tmp7Result;
  items1 = [React3(Stack, { align: "center", justify: "center", spacing: 8, children: items }), children];
  const children1 = [React3(ModalContent, obj3), ];
  if (undefined === footer) {
    const ModalFooter = tmp4(13975).ModalFooter;
    if (withLogout) {
      withLogout = tmp7(LogOutDisclaimerDefault, {});
    }
    const items3 = [withLogout, ];
    let tmp7Result2 = null != action;
    if (tmp7Result2) {
      const obj4 = { variant: "primary", text: action, onPress: onAction, loading: submitting };
      tmp7Result2 = tmp7(tmp4(15045).ModalActionButton, obj4);
    }
    const obj5 = { children: items3 };
    items3[1] = tmp7Result2;
    footer = tmp3(ModalFooter, obj5);
  }
  children1[1] = footer;
  return React3(ModalScreen, { children: children1 });
};
