// Module ID: 10884
// Function ID: 84594
// Name: SummaryActionSheetButton
// Dependencies: []
// Exports: SummaryActionSheetButton

// Module 10884 (SummaryActionSheetButton)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { "Bool(false)": "isArray", "Bool(false)": "key", "Bool(false)": "LIGHT", "Bool(false)": "limit", "Bool(false)": "limit" } };
obj = { "Null": 257648858131885730000000000000, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025330688161739, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000337291231015838, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002285347027699126, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013317690113909354, borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(importDefault(dependencyMap[4]).shadows.SHADOW_LOW);
obj.iconBox = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.icon = { margin: 12, tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.name = {};
let closure_5 = obj.createStyles(obj);
const obj1 = { margin: 12, tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/summaries/native/SummaryActionSheetButton.tsx");

export const SummaryActionSheetButton = function SummaryActionSheetButton(label) {
  let iconSource;
  let onPress;
  label = label.label;
  ({ iconSource, onPress } = label);
  const tmp = callback3();
  let obj = { style: tmp.container, onPress, accessibilityRole: "button", accessibilityLabel: label };
  obj = { style: items };
  const items = [tmp.iconBox];
  obj = { style: tmp.icon, source: iconSource };
  obj.children = callback(arg1(dependencyMap[6]).Icon, obj);
  const items1 = [callback(View, obj), ];
  const obj1 = { "Null": 1, "Null": 22, "Null": "exposure_tracking", "Null": "enum", style: tmp.name, children: label };
  items1[1] = callback(arg1(dependencyMap[7]).Text, obj1);
  obj.children = items1;
  return callback2(arg1(dependencyMap[5]).PressableOpacity, obj);
};
