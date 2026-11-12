// Module ID: 8465
// Function ID: 8466
// Name: InAppReportsOptionRow
// Dependencies: [19, 17, 21, 5170, 575, 7076, 5783, 2]
// Exports: default

// Module 8465 (InAppReportsOptionRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5783 */;
import Pressables from "Pressables" /* 7076 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { button: obj2, container: obj3, content: { flex: 1 } };
obj2 = { borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
obj3 = { minHeight: 60, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingVertical: nativeDefault.space.PX_16, paddingStart: nativeDefault.space.PX_16, paddingEnd: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsOptionRow.tsx");

export default function InAppReportsOptionRow(arg0) {
  let accessibilityRole;
  let children;
  let items;
  let items1;
  let label;
  let obj2;
  let onPress;
  let trailing;
  ({ label, trailing, onPress, accessibilityRole, children } = arg0);
  const tmp = closure_5();
  const obj = { style: tmp.button, accessibilityRole, onPress, children: React3(View, obj2) };
  obj2 = { style: tmp.container, children: items1 };
  const obj3 = { style: tmp.content, children: items };
  const PressableHighlight = Pressables.PressableHighlight;
  items = [_false(Text_Text.Text, { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: label }), children];
  items1 = [React3(View, obj3), trailing];
  return _false(PressableHighlight, obj);
};
