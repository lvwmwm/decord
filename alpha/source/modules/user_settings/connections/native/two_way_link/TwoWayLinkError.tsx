// Module ID: 14619
// Function ID: 14620
// Name: TwoWayLinkError
// Dependencies: [19, 17, 21, 5014, 9730, 5717, 14620, 5624, 7292, 6027, 5634, 1113, 2]
// Exports: TwoWayLinkError

// Module 14619 (TwoWayLinkError)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import FastImageDefault from "FastImage" /* 5717 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7292 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9730 */;
import AssetRegistryDefault from "AssetRegistry" /* 14620 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ image: { width: 254, height: 127, marginBottom: 32 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkError.tsx");

export function TwoWayLinkError(arg0) {
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
  const tmp = closure_6();
  const obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const obj2 = { style: twoWayLinkStyles.container, children: items1 };
  const obj3 = { style: twoWayLinkStyles.content, children: items };
  const obj4 = { source: AssetRegistryDefault, style: tmp.image };
  const tmp3 = FastImageDefault;
  items = [React3(tmp3, obj4), , ];
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: title };
  items[1] = React3(Text_Text.Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: body };
  items[2] = React3(Text_Text.Text, obj6);
  items1 = [hasOwnProperty(View, obj3), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: hasOwnProperty(Stack, obj8) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj8 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton, children: items2 };
  Stack = Stack_Stack.Stack;
  const obj9 = { size: "lg", variant: "primary", text: intl.string(intl3.t["5911Lb"]), onPress: onRetry };
  const Button = components_Button_Button.Button;
  intl = intl3.intl;
  items2 = [React3(Button, obj9), ];
  const obj10 = { size: "lg", variant: "secondary", text: intl2.string(intl3.t["ETE/oC"]), onPress: onClose };
  const Button2 = components_Button_Button.Button;
  intl2 = intl3.intl;
  items2[1] = React3(Button2, obj10);
  items1[1] = React3(SafeAreaPaddingView, obj7);
  return hasOwnProperty(View, obj2);
}
