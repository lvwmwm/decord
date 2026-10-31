// Module ID: 11668
// Function ID: 11669
// Name: SummaryActionSheetButton
// Dependencies: [19, 17, 21, 5014, 575, 6980, 1187, 5624, 2]
// Exports: SummaryActionSheetButton

// Module 11668 (SummaryActionSheetButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5624 */;
import Pressables from "Pressables" /* 6980 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "column", justifyContent: "center", alignItems: "center", paddingVertical: 8, width: 78 }, iconBox: obj2, icon: obj3, name: { textAlign: "center", marginTop: 8 } };
obj2 = { borderRadius: nativeDefault.radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj3 = { margin: 12, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/summaries/native/SummaryActionSheetButton.tsx");

export function SummaryActionSheetButton(label) {
  let iconSource;
  let items;
  let obj3;
  let onPress;
  label = label.label;
  ({ iconSource, onPress } = label);
  const tmp = closure_5();
  const obj = { style: tmp.container, onPress, accessibilityRole: "button", accessibilityLabel: label, children: items };
  const obj2 = { style: tmp.iconBox, children: _false(native.Icon, obj3) };
  const PressableOpacity = Pressables.PressableOpacity;
  obj3 = { style: tmp.icon, source: iconSource };
  items = [_false(View, obj2), ];
  const obj4 = { style: tmp.name, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: label };
  items[1] = _false(Text_Text.Text, obj4);
  return React3(PressableOpacity, obj);
}
