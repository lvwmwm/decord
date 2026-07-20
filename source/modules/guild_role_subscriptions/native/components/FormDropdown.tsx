// Module ID: 12773
// Function ID: 97897
// Name: LockedIcon
// Dependencies: []
// Exports: default

// Module 12773 (LockedIcon)
function LockedIcon() {
  const obj = { size: arg1(dependencyMap[6]).Icon.Sizes.MEDIUM, source: importDefault(dependencyMap[7]) };
  return callback(arg1(dependencyMap[6]).Icon, obj);
}
function DropdownIcon() {
  const obj = { style: { transform: items } };
  const items = [{ rotate: "90deg" }];
  obj.size = arg1(dependencyMap[6]).Icon.Sizes.MEDIUM;
  obj.source = importDefault(dependencyMap[8]);
  return callback(arg1(dependencyMap[6]).Icon, obj);
}
importAll(dependencyMap[0]);
const Fonts = arg1(dependencyMap[1]).Fonts;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: {}, content: {} };
obj = {};
const tmp3 = arg1(dependencyMap[2]);
const merged = Object.assign(importDefault(dependencyMap[4])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[5]).colors.TEXT_MUTED, 16));
obj.placeholder = obj;
const importDefaultResult = importDefault(dependencyMap[4]);
const obj1 = {};
const merged1 = Object.assign(importDefault(dependencyMap[4])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[5]).colors.TEXT_DEFAULT, 16));
obj.text = obj1;
const styles = obj.createStyles(obj);
const importDefaultResult1 = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormDropdown.tsx");

export default function FormDropdown(arg0) {
  let disabled;
  let label;
  let leading;
  let onPress;
  let placeholder;
  ({ disabled, label, placeholder } = arg0);
  ({ leading, onPress } = arg0);
  const tmp = styles();
  const tmp2 = importDefault(dependencyMap[9])();
  let obj = { style: items, accessibilityRole: "spinbutton", disabled };
  const items = [tmp.container, tmp2.dropdownInput];
  let tmp6;
  const tmp3 = callback(disabled ? LockedIcon : DropdownIcon, {});
  const tmp4 = closure_4;
  if (!disabled) {
    tmp6 = onPress;
  }
  obj.onPress = tmp6;
  const items1 = [leading, , ];
  obj = { style: items2 };
  const items2 = [tmp.content, null != label ? tmp.text : tmp.placeholder];
  if (null != label) {
    placeholder = label;
  }
  obj.children = placeholder;
  items1[1] = callback(arg1(dependencyMap[6]).LegacyText, obj);
  items1[2] = tmp3;
  obj.children = items1;
  return tmp4(importDefault(dependencyMap[10]), obj);
};
export const useFormDropdownStyles = styles;
