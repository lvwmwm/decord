// Module ID: 16423
// Function ID: 16424
// Name: DisplayNameStylesColorSwatch
// Dependencies: [17, 21, 5009, 575, 1403, 16424, 5582, 1091, 2]
// Exports: default

// Module 16423 (DisplayNameStylesColorSwatch)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1403 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let size;
let tmp2;
const utils_ColorUtils = tmp2(1091);
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
