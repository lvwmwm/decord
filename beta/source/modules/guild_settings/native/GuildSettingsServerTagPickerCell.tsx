// Module ID: 17392
// Function ID: 17393
// Name: GuildSettingsServerTagPickerCell
// Dependencies: [19, 17, 21, 4836, 576, 4548, 2]
// Exports: default

// Module 17392 (GuildSettingsServerTagPickerCell)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import react_native2 from "react-native" /* 4548 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { cell: obj2, cellSelected: obj3 };
obj2 = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.md, borderWidth: 2, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderColor: nativeDefault.colors.BORDER_MUTED };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.unsafe_rawColors.BRAND_500 };
let closure_4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPickerCell.tsx");

export default function GuildSettingsServerTagPickerCell(accessibilityLabel) {
  let accessibilityRole;
  let children;
  let items;
  let obj3;
  let onPress;
  let selected;
  ({ size, selected, accessibilityRole } = accessibilityLabel);
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  if (accessibilityRole === undefined) {
    accessibilityRole = "radio";
  }
  ({ onPress, children } = accessibilityLabel);
  const tmp = closure_4();
  const obj = react_native2;
  let radioA11yNative = obj.useRadioA11yNative({ selected });
  if ("button" === accessibilityRole) {
    const obj2 = { accessibilityRole: "button", accessibilityState: obj3 };
    radioA11yNative = obj2;
    obj3 = { selected };
  }
  const obj4 = { accessibilityRole: radioA11yNative.accessibilityRole, accessibilityState: radioA11yNative.accessibilityState, accessibilityLabel, onPress, style: items, children };
  items = [tmp.cell, , ];
  const tmp3 = jsx;
  const tmp4 = Pressable;
  if (selected) {
    selected = tmp.cellSelected;
  }
  items[1] = selected;
  items[2] = { width: size, height: size };
  return tmp3(tmp4, obj4);
};
