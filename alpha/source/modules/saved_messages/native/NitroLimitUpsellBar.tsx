// Module ID: 14544
// Function ID: 14545
// Name: NitroLimitUpsellBar
// Dependencies: [17, 21, 5009, 575, 8018, 5712, 10027, 5619, 1114, 10270, 5629, 2]
// Exports: default

// Module 14544 (NitroLimitUpsellBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import WarningIcon from "WarningIcon" /* 8018 */;
import AssetRegistryDefault from "AssetRegistry" /* 10027 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 10270 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
  const obj4 = { variant: "text-xs/medium", color: "text-default", style: tmp.text, children: items1 };
  const Text = Text_Text.Text;
  const obj5 = { variant: "text-xs/bold", color: "text-brand", children: str.toUpperCase() };
  const Text2 = Text_Text.Text;
  const intl = intl3.intl;
  str = intl.string(intl3.t.oW0eUd);
  items1 = [tmp9(Text2, obj5), " \u00B7 ", text];
  items[1] = hasOwnProperty(Text, obj4);
  if (isAtLimit) {
    Button = NitroUpsellButtonDefault;
  } else {
    Button = tmp12(5629).Button;
  }
  const obj6 = { size: "sm", text: intl2.string(intl3.t["8x0jKT"]), onPress, loading };
  intl2 = tmp12(1114).intl;
  items[2] = tmp9(Button, obj6);
  return hasOwnProperty(tmp3, obj);
};
