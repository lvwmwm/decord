// Module ID: 13665
// Function ID: 13666
// Name: RoleDot
// Dependencies: [19, 17, 21, 4836, 576, 1364, 5288, 5310, 5293, 1370, 2]
// Exports: RoleDot

// Module 13665 (RoleDot)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import useFontScale from "useFontScale" /* 5288 */;
import useHasEnhancedRoleColorsDefault from "useHasEnhancedRoleColors" /* 5310 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let tmp5;
const LinearGradientDefault = tmp5(5293);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexShrink: 0 }, background: { position: "relative" }, backgroundColor: obj2, borderBase: obj3, borderColor: obj4, dot: { borderRadius: 10, position: "absolute" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.md };
obj4 = { borderRadius: nativeDefault.radii.md, opacity: 0.4 };
let closure_6 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("design/void/RoleDot/native/RoleDot.tsx");

export const RoleDot = function RoleDot(background) {
  let color;
  let colors;
  let containerStyles;
  let guildId;
  let items;
  let items2;
  let items3;
  let items5;
  let items6;
  let result1;
  let result2;
  ({ color, colors, size } = background);
  if (size === undefined) {
    size = "normal";
  }
  let flag = background.background;
  if (flag === undefined) {
    flag = true;
  }
  ({ containerStyles, guildId } = background);
  const tmp = closure_6();
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const tmp6 = useHasEnhancedRoleColorsDefault(guildId, null);
  if (null == color) {
    if (null == colors) {
      return null;
    }
  }
  let num = 16;
  if ("normal" === size) {
    num = 20;
  }
  const result = num * fontScale;
  const obj2 = { paddingRight: 2 * fontScale, paddingTop: result1, height: result };
  const tmp2Result = PlatformUtils;
  if (tmp2Result.isAndroid()) {
    result1 = 3 * fontScale;
  } else {
    result1 = 2 * fontScale;
  }
  const sum = result / 2 + 2;
  const diff = sum - 2;
  const size1 = { height: result, width: result, padding: (result - sum) / 2 };
  const size2 = { height: diff, width: diff, top: result2, left: result2 };
  result2 = diff / 2;
  const obj3 = { style: items, children: null };
  items = [tmp.container, obj2, containerStyles];
  const items1 = [tmp.background, , ];
  let backgroundColor = null;
  const tmp14 = hasOwnProperty;
  if (flag) {
    backgroundColor = tmp.backgroundColor;
  }
  const obj4 = { style: items1, children: null };
  items1[1] = backgroundColor;
  items1[2] = size1;
  const obj5 = { style: items2, children: React3(View, { style: items3 }) };
  items2 = [tmp.borderBase];
  items3 = [tmp.borderColor, { height: sum, width: sum }, ];
  items3[2] = { backgroundColor: color };
  const items4 = [React3(View, obj5), ];
  if (tmp6) {
    if (null != colors) {
      let tmp12Result;
      if (null != colors.secondaryColor) {
        const obj6 = { colors: items5.filter(GlobalUtils.isNotNullish), start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: items6 };
        items5 = [, , ];
        ({ primaryColor: arr7[0], secondaryColor: arr7[1], tertiaryColor: arr7[2] } = colors);
        items6 = [tmp.dot, size2];
        const tmp5Result = LinearGradientDefault;
        tmp12Result = tmp12(tmp5Result, obj6);
      }
      items4[1] = tmp12Result;
      obj4.children = items4;
      obj3.children = tmp14(View, obj4);
      return React3(View, obj3);
    }
  }
  const items7 = [tmp.dot, size2, { backgroundColor: color }];
  tmp12Result = tmp12(tmp13, { style: items7 });
};
