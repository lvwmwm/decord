// Module ID: 8020
// Function ID: 8021
// Name: AgeVerificationOtherWindowScreen
// Dependencies: [19, 21, 5014, 1113, 3096, 7972, 7973, 6027, 7127, 575, 5624, 2]
// Exports: default

// Module 8020 (AgeVerificationOtherWindowScreen)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import _modDef3096 from "module_3096" /* 3096 */;
import Text_Text from "Text/Text" /* 5624 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import MobilePhoneIcon2 from "MobilePhoneIcon" /* 7127 */;
import ModalScreen2 from "ModalScreen" /* 7972 */;
import ModalContent2 from "ModalContent" /* 7973 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
    title = intl.string(_modDef3096.MLPgsX);
  }
  let description;
  if (copy != null) {
    description = copy.description;
  }
  if (description == null) {
    const intl2 = intl3.intl;
    description = intl2.string(_modDef3096.VcZF1q);
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
