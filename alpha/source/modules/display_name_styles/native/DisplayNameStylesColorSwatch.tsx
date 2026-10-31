// Module ID: 16465
// Function ID: 16466
// Name: DisplayNameStylesColorSwatch
// Dependencies: [17, 21, 5014, 575, 1402, 16466, 5587, 1090, 2]
// Exports: default

// Module 16465 (DisplayNameStylesColorSwatch)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1402 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let size;
let tmp2;
const utils_ColorUtils = tmp2(1090);
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { colorSwatch: size, gummySwatch: { flexDirection: "row", overflow: "hidden" } };
size = { width: 24, height: 24, borderRadius: nativeDefault.radii.xs };
let closure_5 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorSwatch.tsx");

export default function DisplayNameStylesColorSwatch(colors) {
  colors = colors.colors;
  const effectId = colors.effectId;
  const tmp = closure_5();
  if (effectId === DisplayNameEffect.DisplayNameEffect.GUMMY) {
    if (colors.length > 0) {
      const items = [, ];
      ({ colorSwatch: arr3[0], gummySwatch: arr3[1] } = tmp);
      return <View style={items}>{null}</View>;
    }
  }
  if (colors.length >= 2) {
    LinearGradientDefault;
    return <tmp8 colors={colors.map((item) => {
      const obj = utils_ColorUtils;
      return obj.int2hex(item);
    })} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={tmp.colorSwatch} />;
  } else {
    let str = "#000000";
    if (colors.length > 0) {
      const tmp2Result = utils_ColorUtils;
      str = tmp2Result.int2hex(colors[0]);
    }
    const items1 = [tmp.colorSwatch, ];
    const obj5 = { backgroundColor: str };
    items1[1] = obj5;
    return <View style={items1} />;
  }
};
