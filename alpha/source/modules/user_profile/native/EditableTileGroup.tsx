// Module ID: 14744
// Function ID: 14745
// Name: EditableTileGroup
// Dependencies: [19, 17, 21, 5090, 587, 558, 576, 5086, 9005, 1126, 2]

// Module 14744 (EditableTileGroup)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5086 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditableTileGroup(arg0) {
  let children;
  let heading;
  let intl;
  let items;
  let items1;
  let showNitroIcon;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(12);
  ({ heading, showNitroIcon, children } = arg0);
  const tmp5 = closure_6();
  if (cResult[0] !== heading) {
    const obj2 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-strong", children: heading };
    const tmp8 = React3(Text_Text.Text, obj2);
    cResult[0] = heading;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== (undefined !== showNitroIcon && showNitroIcon)) {
    let tmp10 = tmp4;
    if (tmp10) {
      const obj3 = { size: "xs", color: nativeDefault.colors.TEXT_STRONG, accessibilityLabel: intl.string(intl2.t["5AFxuK"]) };
      const NitroWheelIcon = tmp(9005).NitroWheelIcon;
      intl = tmp(1126).intl;
      tmp10 = React3(NitroWheelIcon, obj3);
    }
    cResult[2] = undefined !== showNitroIcon && showNitroIcon;
    cResult[3] = tmp10;
    tmp9 = tmp10;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp5.labelRow) {
    if (cResult[5] === tmp6) {
      let tmp13;
      if (cResult[6] === tmp9) {
        tmp13 = cResult[7];
      }
      if (cResult[8] === children) {
        if (cResult[9] === tmp5.container) {
          let tmp15;
          if (cResult[10] === tmp13) {
            tmp15 = cResult[11];
          }
          return tmp15;
        }
      }
      const obj4 = { style: tmp5.container, children: items };
      items = [tmp13, children];
      const tmp18 = hasOwnProperty(View, obj4);
      cResult[8] = children;
      cResult[9] = tmp5.container;
      cResult[10] = tmp13;
      cResult[11] = tmp18;
      tmp15 = tmp18;
    }
  }
  const obj5 = { style: tmp5.labelRow, children: items1 };
  items1 = [tmp6, tmp9];
  const tmp14 = hasOwnProperty(View, obj5);
  cResult[4] = tmp5.labelRow;
  cResult[5] = tmp6;
  cResult[6] = tmp9;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : (function EditableTileGroup(showNitroIcon) {
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
    const NitroWheelIcon = tmp5(9005).NitroWheelIcon;
    intl = tmp5(1126).intl;
    flag = tmp4(NitroWheelIcon, obj3);
  }
  items[1] = flag;
  items1 = [hasOwnProperty(View, obj2), children];
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/EditableTileGroup.tsx");

export const EditableTileGroup = tmp5;
