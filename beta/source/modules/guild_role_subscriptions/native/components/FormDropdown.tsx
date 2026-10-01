// Module ID: 13440
// Function ID: 13441
// Name: FormDropdown
// Dependencies: [19, 1074, 21, 4836, 5836, 576, 1177, 13441, 9396, 13442, 9203, 2]
// Exports: default

// Module 13440 (FormDropdown)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9203 */;
import AssetRegistryDefault from "AssetRegistry" /* 9396 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13441 */;
import FormStylesDefault from "FormStyles" /* 13442 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles_mod from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
function LockedIcon() {
  const obj = { size: native.Icon.Sizes.MEDIUM, source: AssetRegistryDefault2 };
  const Icon = native.Icon;
  return _false(Icon, obj);
}
function DropdownIcon() {
  let items;
  let obj2;
  const obj = { style: obj2, size: native.Icon.Sizes.MEDIUM, source: AssetRegistryDefault };
  obj2 = { transform: items };
  items = [{ rotate: "90deg" }];
  const Icon = native.Icon;
  return _false(Icon, obj);
}
const Fonts = Constants.Fonts;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 }, placeholder: obj2, text: obj3 };
obj2 = {};
createStyles = createStyles.createStyles;
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_MUTED, 16));
obj3 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 16));
const styles = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormDropdown.tsx");

export default function FormDropdown(arg0) {
  let disabled;
  let items;
  let items1;
  let label;
  let leading;
  let onPress;
  let placeholder;
  let tmp9;
  ({ disabled, label } = arg0);
  ({ leading, onPress, placeholder } = arg0);
  const tmp = styles();
  const obj = { style: items, accessibilityRole: "spinbutton", disabled, onPress: tmp9, children: items1 };
  items = [tmp.container, FormStylesDefault().dropdownInput];
  tmp9 = undefined;
  const tmp4 = FormStylesDefault();
  const tmp5Result = _false(disabled ? LockedIcon : DropdownIcon, {});
  const tmp2Result = TouchableHitBoxDefault;
  const tmp7 = React3;
  if (!disabled) {
    tmp9 = onPress;
  }
  items1 = [leading, , ];
  const items2 = [tmp.content, ];
  const obj2 = { style: items2, children: label };
  items2[1] = null != label ? tmp.text : tmp.placeholder;
  const LegacyText = native.LegacyText;
  if (label == null) {
    label = placeholder;
  }
  items1[1] = _false(LegacyText, obj2);
  items1[2] = tmp5Result;
  return tmp7(tmp2Result, obj);
};
export const useFormDropdownStyles = styles;
