// Module ID: 12505
// Function ID: 12506
// Name: BlockedDomainActionSheet
// Dependencies: [19, 21, 4836, 576, 6571, 5279, 6004, 4832, 1115, 12506, 5281, 4800, 2]
// Exports: default

// Module 12505 (BlockedDomainActionSheet)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import TrafficConeSpotIllustration from "TrafficConeSpotIllustration" /* 6004 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import URLCallout from "URLCallout" /* 12506 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c3;
let closure_4;
let obj2;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2, title: { textAlign: "center" }, warningMessage: { textAlign: "center" } };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/blocked_domains/components/native/BlockedDomainActionSheet.tsx");

export default function BlockedDomainActionSheet(url) {
  let Stack;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj2;
  url = url.url;
  const tmp = closure_5();
  let obj = { startExpanded: true, children: React3(Stack, obj2) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = { spacing: 16, justify: "center", align: "center", style: tmp.container, children: items1 };
  Stack = Stack_Stack.Stack;
  const obj3 = { spacing: 8, justify: "center", align: "center", children: items };
  const Stack2 = Stack_Stack.Stack;
  items = [_false(TrafficConeSpotIllustration.TrafficConeSpotIllustration, {}), , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["2B3wj8"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = _false(Text, obj4);
  const obj5 = { style: tmp.warningMessage, variant: "text-md/medium", children: intl2.format(intl4.t.jnHyYU, {}) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = _false(Text2, obj5);
  items1 = [React3(Stack2, obj3), _false(URLCallout.URLCallout, { url }), ];
  const obj6 = {
    grow: true,
    text: intl3.string(intl4.t["/g10LC"]),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet();
    }
  };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[2] = _false(Button, obj6);
  return _false(BottomSheet, obj);
};
