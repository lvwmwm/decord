// Module ID: 8557
// Function ID: 8558
// Name: TwoWayLinkError
// Dependencies: [19, 17, 21, 4836, 8538, 8558, 4832, 6544, 5279, 5281, 1115, 2]
// Exports: TwoWayLinkError

// Module 8557 (TwoWayLinkError)
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 8538 */;
import AssetRegistryDefault from "AssetRegistry" /* 8558 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ image: { width: 254, height: 127, marginBottom: 32 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkError.tsx");

export const TwoWayLinkError = function TwoWayLinkError(arg0) {
  let Stack;
  let body;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let obj8;
  let onClose;
  let onRetry;
  let title;
  ({ onClose, title, body, onRetry } = arg0);
  const tmp = closure_7();
  const obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const obj3 = { style: twoWayLinkStyles.content, children: items };
  items = [, , ];
  const obj2 = { style: twoWayLinkStyles.container, children: items1 };
  const obj4 = { source: AssetRegistryDefault, style: tmp.image };
  items[0] = hasOwnProperty(_false, obj4);
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: title };
  items[1] = hasOwnProperty(Text_Text.Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: body };
  items[2] = hasOwnProperty(Text_Text.Text, obj6);
  items1 = [metroRequire(React3, obj3), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: metroRequire(Stack, obj8) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj8 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton, children: items2 };
  Stack = Stack_Stack.Stack;
  const obj9 = { size: "lg", variant: "primary", text: intl.string(intl3.t["5911Lb"]), onPress: onRetry };
  const Button = components_Button_Button.Button;
  intl = intl3.intl;
  items2 = [hasOwnProperty(Button, obj9), ];
  const obj10 = { size: "lg", variant: "secondary", text: intl2.string(intl3.t["ETE/oC"]), onPress: onClose };
  const Button2 = components_Button_Button.Button;
  intl2 = intl3.intl;
  items2[1] = hasOwnProperty(Button2, obj10);
  items1[1] = hasOwnProperty(SafeAreaPaddingView, obj7);
  return metroRequire(React3, obj2);
};
