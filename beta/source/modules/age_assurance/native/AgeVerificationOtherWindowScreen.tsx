// Module ID: 7905
// Function ID: 7906
// Name: AgeVerificationOtherWindowScreen
// Dependencies: [19, 21, 4836, 1115, 3039, 7870, 7871, 5279, 6379, 576, 4832, 2]
// Exports: default

// Module 7905 (AgeVerificationOtherWindowScreen)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import _modDef3039 from "module_3039" /* 3039 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import MobilePhoneIcon2 from "MobilePhoneIcon" /* 6379 */;
import ModalScreen2 from "ModalScreen" /* 7870 */;
import ModalContent2 from "ModalContent" /* 7871 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ container: { flex: 1, alignSelf: "stretch" }, text: { textAlign: "center" } });
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationOtherWindowScreen.tsx");

export default function AgeVerificationOtherWindowScreen(copy) {
  let ModalContent;
  let Stack;
  let items;
  let items1;
  let obj2;
  let obj3;
  copy = copy.copy;
  const tmp = closure_5();
  let title;
  if (copy != null) {
    title = copy.title;
  }
  if (title == null) {
    const intl = intl3.intl;
    title = intl.string(_modDef3039.MLPgsX);
  }
  let description;
  if (copy != null) {
    description = copy.description;
  }
  if (description == null) {
    const intl2 = intl3.intl;
    description = intl2.string(_modDef3039.VcZF1q);
  }
  const obj = { children: _false(ModalContent, obj2) };
  const ModalScreen = ModalScreen2.ModalScreen;
  obj2 = { children: React3(Stack, obj3) };
  ModalContent = ModalContent2.ModalContent;
  obj3 = { align: "center", justify: "center", spacing: 16, style: tmp.container, children: items };
  Stack = Stack_Stack.Stack;
  const obj4 = { size: "lg", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
  const MobilePhoneIcon = MobilePhoneIcon2.MobilePhoneIcon;
  items = [_false(MobilePhoneIcon, obj4), ];
  const obj5 = { align: "center", justify: "center", spacing: 8, children: items1 };
  const Stack2 = Stack_Stack.Stack;
  items1 = [, ];
  const obj6 = { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.text, children: title };
  items1[0] = _false(Text_Text.Text, obj6);
  const obj7 = { variant: "text-md/medium", color: "text-muted", style: tmp.text, children: description };
  items1[1] = _false(Text_Text.Text, obj7);
  items[1] = React3(Stack2, obj5);
  return _false(ModalScreen, obj);
};
