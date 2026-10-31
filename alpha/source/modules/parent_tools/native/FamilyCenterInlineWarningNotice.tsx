// Module ID: 16765
// Function ID: 16766
// Name: FamilyCenterInlineWarningNotice
// Dependencies: [19, 17, 21, 5014, 575, 8026, 5624, 2]
// Exports: default

// Module 16765 (FamilyCenterInlineWarningNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import WarningIcon2 from "WarningIcon" /* 8026 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, text: obj3 };
obj2 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_WARNING, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingRight: nativeDefault.space.PX_8 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterInlineWarningNotice.tsx");

export default function FamilyCenterInlineWarningNotice(arg0) {
  let items;
  let items1;
  let style;
  let text;
  ({ text, style } = arg0);
  const tmp = closure_6();
  const obj = { style: items, children: items1 };
  items = [tmp.container, style];
  const obj2 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
  const WarningIcon = WarningIcon2.WarningIcon;
  items1 = [React3(WarningIcon, obj2), ];
  const obj3 = { variant: "text-sm/medium", color: "text-strong", style: tmp.text, children: text };
  items1[1] = React3(Text_Text.Text, obj3);
  return hasOwnProperty(View, obj);
};
