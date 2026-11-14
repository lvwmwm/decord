// Module ID: 15950
// Function ID: 15951
// Name: BlockedDomainActionSheet
// Dependencies: [19, 21, 5306, 575, 5566, 6337, 7751, 5929, 1113, 15951, 5936, 5552, 2]
// Exports: default

// Module 15950 (BlockedDomainActionSheet)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5566 */;
import Text_Text from "Text/Text" /* 5929 */;
import components_Button_Button from "components/Button/Button" /* 5936 */;
import Stack_Stack from "Stack/Stack" /* 6337 */;
import TrafficConeSpotIllustration from "TrafficConeSpotIllustration" /* 7751 */;
import URLCallout from "URLCallout" /* 15951 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

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
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = { spacing: 16, justify: "center", align: "center", style: tmp.container, children: items1 };
  Stack = Stack_Stack.Stack;
  const obj3 = { spacing: 8, justify: "center", align: "center", children: items };
  const Stack2 = Stack_Stack.Stack;
  items = [_false(TrafficConeSpotIllustration.TrafficConeSpotIllustration, {}), , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["2B3wj8"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = _false(Text, obj4);
  const obj5 = { style: tmp.warningMessage, variant: "body-md/medium", children: intl2.format(intl4.t.jnHyYU, {}) };
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
