// Module ID: 13430
// Function ID: 13431
// Name: ActivateDeviceError
// Dependencies: [19, 17, 21, 4836, 8558, 13428, 4832, 1115, 5281, 2]
// Exports: ActivateDeviceError

// Module 13430 (ActivateDeviceError)
import intl4 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import AssetRegistryDefault from "AssetRegistry" /* 8558 */;
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles" /* 13428 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ image: { width: 254, height: 127, alignSelf: "center" } });
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceError.tsx");

export const ActivateDeviceError = function ActivateDeviceError(onRetry) {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let tmp;
  onRetry = onRetry.onRetry;
  const obj = { children: items };
  const obj2 = { source: AssetRegistryDefault, style: tmp.image };
  tmp = closure_8();
  items = [hasOwnProperty(_false, obj2), , ];
  const obj3 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: items1 };
  const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: ActivateDeviceSharedStylesDefault.centerText, children: intl.string(intl4.t["3dgwPD"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items1 = [hasOwnProperty(Text, obj4), ];
  const obj5 = { variant: "text-md/medium", color: "text-default", style: ActivateDeviceSharedStylesDefault.centerText, children: intl2.string(intl4.t["/GAO1P"]) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items1[1] = hasOwnProperty(Text2, obj5);
  items[1] = metroRequire(React3, obj3);
  const obj6 = { size: "lg", text: intl3.string(intl4.t["5911Lb"]), onPress: onRetry, grow: true };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[2] = hasOwnProperty(Button, obj6);
  return metroRequire(metroImportDefault, obj);
};
