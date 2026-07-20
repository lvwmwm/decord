// Module ID: 10878
// Function ID: 84560
// Name: SummaryActionSheetButton
// Dependencies: []
// Exports: SummaryActionSheetButton

// Module 10878 (SummaryActionSheetButton)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { 9223372036854775807: "isArray", 0: "key", -9223372036854775808: "LIGHT", -9223372036854775808: "limit", 0: "limit" } };
obj = { ExpressiveGradient: true, showBounties: true, ownedByVerticalScrollExperiment: true, verticalScrollEnabled: true, loopingEnabled: true, borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(importDefault(dependencyMap[4]).shadows.SHADOW_LOW);
obj.iconBox = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.icon = { margin: 12, tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.name = { concat: -0.0014069081515246523, now: -0.0001058445630777106 };
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
  const obj1 = { 0: "<string:1895826088>", 0: "y", 0: "venmo.tokenize.desktop.success", 9223372036854775807: "<string:376504320>", style: tmp.name, children: label };
  items1[1] = callback(arg1(dependencyMap[7]).Text, obj1);
  obj.children = items1;
  return callback2(arg1(dependencyMap[5]).PressableOpacity, obj);
};
