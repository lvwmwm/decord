// Module ID: 17704
// Function ID: 17705
// Name: UpdateAppScreen
// Dependencies: [17, 21, 4836, 576, 4832, 1115, 2781, 5281, 2]
// Exports: default

// Module 17704 (UpdateAppScreen)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import _modDef2781 from "module_2781" /* 2781 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BundleUpdaterManager;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ NativeModules: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, buttonContainer: obj3 };
obj2 = { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/safety_flows/native/UpdateAppScreen.tsx");

export default function UpdateAppScreen() {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj5;
  const tmp = closure_7();
  const obj = { style: tmp.container, children: items };
  const obj2 = { variant: "heading-lg/semibold", children: intl.string(_modDef2781.yxqMCD) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items = [hasOwnProperty(Text, obj2), , ];
  const obj3 = { variant: "text-md/normal", color: "text-muted", children: intl2.string(_modDef2781.VBZJJg) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[1] = hasOwnProperty(Text2, obj3);
  const obj4 = { style: tmp.buttonContainer, children: hasOwnProperty(Button, obj5) };
  obj5 = {
    onPress() {
      BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
      BundleUpdaterManager.reload();
    },
    text: intl3.string(_modDef2781.o4D6fm),
    variant: "primary",
    size: "md"
  };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[2] = hasOwnProperty(React3, obj4);
  return metroRequire(React3, obj);
};
