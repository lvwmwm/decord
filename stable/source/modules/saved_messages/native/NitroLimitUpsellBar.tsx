// Module ID: 14861
// Function ID: 14862
// Name: NitroLimitUpsellBar
// Dependencies: [17, 21, 5170, 575, 8129, 5874, 10201, 5783, 1113, 10441, 5790, 2]
// Exports: default

// Module 14861 (NitroLimitUpsellBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5783 */;
import FastImageDefault from "FastImage" /* 5874 */;
import WarningIcon from "WarningIcon" /* 8129 */;
import AssetRegistryDefault from "AssetRegistry" /* 10201 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 10441 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, icon: { height: 20, width: 20 }, text: { flex: 1 } };
obj2 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md, flexDirection: "row", gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/saved_messages/native/NitroLimitUpsellBar.tsx");

export default function NitroLimitUpsellBar(isAtLimit) {
  let Button;
  let intl2;
  let items;
  let items1;
  let loading;
  let onPress;
  let str;
  let text;
  let tmp4Result;
  let tmp9;
  isAtLimit = isAtLimit.isAtLimit;
  ({ text, onPress, loading } = isAtLimit);
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items };
  const tmp3 = View;
  if (isAtLimit) {
    const obj2 = { color: "text-feedback-warning", style: tmp.icon };
    tmp4Result = tmp4(WarningIcon.WarningIcon, obj2);
    tmp9 = tmp4;
  } else {
    const obj3 = { source: AssetRegistryDefault, style: tmp.icon };
    const tmp7 = FastImageDefault;
    tmp4Result = tmp4(tmp7, obj3);
    tmp9 = tmp4;
  }
  items = [tmp4Result, , ];
  const obj4 = { variant: "body-xs/medium", color: "text-default", style: tmp.text, children: items1 };
  const Text = Text_Text.Text;
  const obj5 = { variant: "body-xs/semibold", color: "text-brand", children: str.toUpperCase() };
  const Text2 = Text_Text.Text;
  const intl = intl3.intl;
  str = intl.string(intl3.t.oW0eUd);
  items1 = [tmp9(Text2, obj5), " \u00B7 ", text];
  items[1] = hasOwnProperty(Text, obj4);
  if (isAtLimit) {
    Button = NitroUpsellButtonDefault;
  } else {
    Button = tmp12(5790).Button;
  }
  const obj6 = { size: "sm", text: intl2.string(intl3.t["8x0jKT"]), onPress, loading };
  intl2 = tmp12(1113).intl;
  items[2] = tmp9(Button, obj6);
  return hasOwnProperty(tmp3, obj);
};
