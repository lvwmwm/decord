// Module ID: 16492
// Function ID: 16493
// Name: EditableTileGroup
// Dependencies: [19, 17, 21, 5009, 575, 5619, 9506, 1114, 2]
// Exports: EditableTileGroup

// Module 16492 (EditableTileGroup)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, labelRow: obj3 };
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/EditableTileGroup.tsx");

export function EditableTileGroup(showNitroIcon) {
  let intl;
  let items;
  let items1;
  let flag = showNitroIcon.showNitroIcon;
  const heading = showNitroIcon.heading;
  if (flag === undefined) {
    flag = false;
  }
  const children = showNitroIcon.children;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items1 };
  const obj2 = { style: tmp.labelRow, children: items };
  items = [React3(Text_Text.Text, { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-strong", children: heading }), ];
  const tmp4 = React3;
  if (flag) {
    const obj3 = { size: "xs", color: nativeDefault.colors.TEXT_STRONG, accessibilityLabel: intl.string(intl2.t["5AFxuK"]) };
    const NitroWheelIcon = tmp5(9506).NitroWheelIcon;
    intl = tmp5(1114).intl;
    flag = tmp4(NitroWheelIcon, obj3);
  }
  items[1] = flag;
  items1 = [hasOwnProperty(View, obj2), children];
  return hasOwnProperty(View, obj);
}
