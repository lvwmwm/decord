// Module ID: 17713
// Function ID: 17714
// Name: AppStoreParentalRevocationScreen
// Dependencies: [19, 17, 21, 4836, 576, 4525, 7870, 7871, 5279, 4832, 1115, 2781, 11405, 17699, 10459, 8037, 2]
// Exports: default

// Module 17713 (AppStoreParentalRevocationScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import _modDef2781 from "module_2781" /* 2781 */;
import LinkingDefault from "Linking" /* 4525 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import ModalScreen2 from "ModalScreen" /* 7870 */;
import ModalContent2 from "ModalContent" /* 7871 */;
import LinkExternalSmallIcon2 from "LinkExternalSmallIcon" /* 8037 */;
import ModalActionButton2 from "ModalActionButton" /* 10459 */;
import ModalFooter2 from "ModalFooter" /* 11405 */;
import LogOutDisclaimerDefault from "LogOutDisclaimer" /* 17699 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { content: { flexGrow: 1, width: "100%" }, upperHalf: { flex: 1, justifyContent: "flex-end", alignItems: "center" }, lowerHalf: { flex: 1 }, text: { textAlign: "center" }, body: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/AppStoreParentalRevocationScreen.tsx");

export default function AppStoreParentalRevocationScreen() {
  let LinkExternalSmallIcon;
  let Stack;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj13;
  let obj3;
  let obj5;
  const tmp = closure_7();
  const callback = react.useCallback(() => {
    const obj = LinkingDefault;
    obj.openURL("https://support.discord.com/hc/en-us/articles/42855178312087");
  }, []);
  let obj = { children: items3 };
  const ModalScreen = ModalScreen2.ModalScreen;
  const obj2 = { children: metroRequire(View, obj3) };
  obj3 = { style: tmp.content, children: items2 };
  const obj4 = { style: tmp.upperHalf, children: metroRequire(Stack, obj5) };
  const ModalContent = ModalContent2.ModalContent;
  obj5 = { align: "center", spacing: nativeDefault.space.PX_16, children: items };
  Stack = Stack_Stack.Stack;
  const obj6 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.text, children: intl.string(_modDef2781.Z87TFb) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items = [hasOwnProperty(Text, obj6), ];
  const obj7 = { align: "center", spacing: nativeDefault.space.PX_16, style: tmp.body, children: items1 };
  const Stack2 = Stack_Stack.Stack;
  const obj8 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: intl2.string(_modDef2781.VS98dM) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items1 = [hasOwnProperty(Text2, obj8), ];
  const obj9 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: intl3.string(_modDef2781.BaI6L4) };
  const Text3 = Text_Text.Text;
  intl3 = intl5.intl;
  items1[1] = hasOwnProperty(Text3, obj9);
  items[1] = metroRequire(Stack2, obj7);
  items2 = [hasOwnProperty(View, obj4), ];
  const obj10 = { style: tmp.lowerHalf };
  items2[1] = hasOwnProperty(View, obj10);
  items3 = [hasOwnProperty(ModalContent, obj2), ];
  const obj11 = { children: items4 };
  const ModalFooter = ModalFooter2.ModalFooter;
  items4 = [hasOwnProperty(LogOutDisclaimerDefault, {}), ];
  const obj12 = { variant: "primary", text: intl4.string(_modDef2781["6FXIU6"]), icon: hasOwnProperty(LinkExternalSmallIcon, obj13), iconPosition: "end", onPress: callback };
  const ModalActionButton = ModalActionButton2.ModalActionButton;
  intl4 = intl5.intl;
  obj13 = { color: nativeDefault.colors.WHITE };
  LinkExternalSmallIcon = LinkExternalSmallIcon2.LinkExternalSmallIcon;
  items4[1] = hasOwnProperty(ModalActionButton, obj12);
  items3[1] = metroRequire(ModalFooter, obj11);
  return metroRequire(ModalScreen, obj);
};
