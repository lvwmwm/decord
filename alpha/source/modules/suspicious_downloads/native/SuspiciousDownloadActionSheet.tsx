// Module ID: 12080
// Function ID: 12081
// Name: SuspiciousDownloadActionSheet
// Dependencies: [19, 21, 5043, 575, 1629, 5271, 6115, 7257, 5634, 1112, 5641, 5257, 5718, 2]
// Exports: default

// Module 12080 (SuspiciousDownloadActionSheet)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import openURLDefault from "openURL" /* 5718 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2, title: { textAlign: "center" }, body: { textAlign: "center" } };
obj2 = { padding: nativeDefault.space.PX_12 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/suspicious_downloads/native/SuspiciousDownloadActionSheet.tsx");

export default function SuspiciousDownloadActionSheet(href) {
  let Stack;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let items3;
  let obj2;
  href = href.href;
  const tmp = closure_5();
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = { startExpanded: true, children: closure_4(Stack, obj2) };
  const BottomSheet = href(5271).BottomSheet;
  obj2 = { spacing: 16, justify: "center", align: "center", style: items, children: items2 };
  items = [tmp.container, { paddingBottom: bottom }];
  Stack = href(6115).Stack;
  const obj3 = { spacing: 8, justify: "center", align: "center", children: items1 };
  const Stack2 = href(6115).Stack;
  items1 = [closure_3(href(7257).TrafficConeSpotIllustration, {}), , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(href(1112).t.XtDo9Z) };
  const Text = href(5634).Text;
  intl = href(1112).intl;
  items1[1] = closure_3(Text, obj4);
  const obj5 = { style: tmp.body, variant: "body-md/medium", children: intl2.string(href(1112).t.L9yFko) };
  const Text2 = href(5634).Text;
  intl2 = href(1112).intl;
  items1[2] = closure_3(Text2, obj5);
  items2 = [closure_4(Stack2, obj3), ];
  const obj6 = { spacing: 8, children: items3 };
  const Stack3 = href(6115).Stack;
  const obj7 = {
    text: intl3.string(href(1112).t.j7Vi2i),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet();
    }
  };
  const Button = href(5641).Button;
  intl3 = href(1112).intl;
  items3 = [closure_3(Button, obj7), ];
  const obj8 = {
    text: intl4.string(href(1112).t["/bHu89"]),
    onPress: function handleContinue() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      openURLDefault(href, true);
    },
    variant: "secondary"
  };
  const Button2 = href(5641).Button;
  intl4 = href(1112).intl;
  items3[1] = closure_3(Button2, obj8);
  items2[1] = closure_4(Stack3, obj6);
  return closure_3(BottomSheet, obj);
};
