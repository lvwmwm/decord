// Module ID: 10464
// Function ID: 10465
// Name: ActionSheetIconHeader
// Dependencies: [19, 17, 21, 4836, 4832, 2]
// Exports: ActionSheetIconHeader

// Module 10464 (ActionSheetIconHeader)
import react_native from "react-native" /* 17 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ container: { paddingVertical: 0, flexDirection: "row", alignItems: "center", gap: 12 }, titles: { justifyContent: "center", flex: 1 } });
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetIconHeader.native.tsx");

export const ActionSheetIconHeader = function ActionSheetIconHeader(subtitle) {
  let icon;
  let items;
  let items1;
  let title;
  subtitle = subtitle.subtitle;
  ({ title, icon } = subtitle);
  const tmp = closure_5();
  const obj = { style: tmp.container, children: items };
  items = [_false(View, { children: icon }), ];
  const obj2 = { style: tmp.titles, children: items1 };
  items1 = [_false(Text_Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", lineClamp: 2, children: title }), ];
  let tmp4Result = null;
  const tmp4 = _false;
  if (null != subtitle) {
    const obj3 = { variant: "text-xs/medium", color: "text-default", children: subtitle };
    tmp4Result = tmp4(Text_Text.Text, obj3);
  }
  items1[1] = tmp4Result;
  items[1] = React3(View, obj2);
  return React3(View, obj);
};
