// Module ID: 16148
// Function ID: 124475
// Name: GuildSettingsServerTagPickerCell
// Dependencies: []
// Exports: default

// Module 16148 (GuildSettingsServerTagPickerCell)
importAll(dependencyMap[0]);
const Pressable = arg1(dependencyMap[1]).Pressable;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { maxFontSizeMultiplier: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}", variant: 6, accessibilityRole: 185, color: null, borderRadius: importDefault(dependencyMap[4]).radii.md, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE, borderColor: importDefault(dependencyMap[4]).colors.BORDER_MUTED };
obj.cell = obj;
obj.cellSelected = { borderColor: importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_500 };
let closure_4 = obj.createStyles(obj);
const obj1 = { borderColor: importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_500 };
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPickerCell.tsx");

export default function GuildSettingsServerTagPickerCell(accessibilityLabel) {
  let accessibilityRole;
  let children;
  let onPress;
  let selected;
  let size;
  ({ size, selected, accessibilityRole } = accessibilityLabel);
  if (accessibilityRole === undefined) {
    accessibilityRole = "radio";
  }
  ({ onPress, children } = accessibilityLabel);
  const tmp = callback();
  let obj = arg1(dependencyMap[5]);
  obj = { selected };
  let radioA11yNative = obj.useRadioA11yNative(obj);
  if ("button" === accessibilityRole) {
    obj = { accessibilityRole: "button" };
    const obj1 = { selected };
    obj.accessibilityState = obj1;
    radioA11yNative = obj;
  }
  const obj2 = {};
  ({ accessibilityRole: obj5.accessibilityRole, accessibilityState: obj5.accessibilityState } = radioA11yNative);
  obj2.accessibilityLabel = accessibilityLabel.accessibilityLabel;
  obj2.onPress = onPress;
  const items = [tmp.cell, , ];
  if (selected) {
    selected = tmp.cellSelected;
  }
  items[1] = selected;
  items[2] = { width: size, height: size };
  obj2.style = items;
  obj2.children = children;
  return <Pressable {...obj2} />;
};
