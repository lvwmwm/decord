// Module ID: 15669
// Function ID: 15670
// Name: ActivateDeviceError
// Dependencies: [19, 17, 21, 5009, 5712, 14582, 15667, 5619, 1114, 5629, 2]
// Exports: ActivateDeviceError

// Module 15669 (ActivateDeviceError)
import react_native from "react-native" /* 17 */;
import intl4 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import FastImageDefault from "FastImage" /* 5712 */;
import AssetRegistryDefault from "AssetRegistry" /* 14582 */;
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles" /* 15667 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ image: { width: 254, height: 127, alignSelf: "center" } });
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceError.tsx");

export function ActivateDeviceError(onRetry) {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let tmp;
  onRetry = onRetry.onRetry;
  const obj = { children: items };
  const obj2 = { source: AssetRegistryDefault, style: tmp.image };
  tmp = closure_7();
  const tmp2 = FastImageDefault;
  items = [React3(tmp2, obj2), , ];
  const obj3 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: items1 };
  const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: ActivateDeviceSharedStylesDefault.centerText, children: intl.string(intl4.t["3dgwPD"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items1 = [React3(Text, obj4), ];
  const obj5 = { variant: "text-md/medium", color: "text-default", style: ActivateDeviceSharedStylesDefault.centerText, children: intl2.string(intl4.t["/GAO1P"]) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items1[1] = React3(Text2, obj5);
  items[1] = hasOwnProperty(View, obj3);
  const obj6 = { size: "lg", text: intl3.string(intl4.t["5911Lb"]), onPress: onRetry, grow: true };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[2] = React3(Button, obj6);
  return hasOwnProperty(metroRequire, obj);
}
