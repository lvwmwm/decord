// Module ID: 10118
// Function ID: 10119
// Name: MediaKeyboardFooter
// Dependencies: [19, 17, 21, 4836, 576, 10107, 4832, 1115, 5281, 10119, 2]

// Module 10118 (MediaKeyboardFooter)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import DeviceMediaDefault from "DeviceMedia" /* 10107 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp2;
const AssetRegistryDefault = tmp2(10119);
({ View: c3, Image: closure_4, ActivityIndicator: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, label: { textAlign: "center", marginBottom: 16 }, buttonWrapper: obj3, loadingSpinner: obj4 };
obj2 = { padding: nativeDefault.space.PX_16, height: 280, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_32, height: nativeDefault.space.PX_48 };
obj4 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, margin: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const memoResult = react.memo(function MediaKeyboardFooter(arg0) {
  let Button;
  let disabled;
  let intl;
  let intl2;
  let items;
  let obj5;
  let onViewAll;
  let tmp6;
  ({ disabled, onViewAll } = arg0);
  const tmp = closure_8();
  const obj = DeviceMediaDefault;
  if (obj.useHasReachedEnd()) {
    const obj2 = { style: tmp.container, children: items };
    const obj3 = { variant: "text-sm/normal", style: tmp.label, children: intl.string(intl3.t.mKSwAW) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    items = [metroRequire(Text, obj3), , ];
    const obj4 = { style: tmp.buttonWrapper, children: metroRequire(Button, obj5) };
    obj5 = { variant: "primary", size: "sm", onPress: onViewAll, text: intl2.string(intl3.t.ZT24In), disabled };
    Button = components_Button_Button.Button;
    intl2 = intl3.intl;
    items[1] = metroRequire(_false, obj4);
    const obj6 = { source: AssetRegistryDefault };
    items[2] = metroRequire(React3, obj6);
    tmp6 = metroImportDefault(_false, obj2);
  } else {
    const obj7 = { style: tmp.loadingSpinner, size: "large", color: tmp.loadingSpinner.color };
    tmp6 = metroRequire(hasOwnProperty, obj7);
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFooter.tsx");

export default memoResult;
export const FOOTER_HEIGHT = 280;
