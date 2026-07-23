// Module ID: 13587
// Function ID: 104425
// Name: DisplayNameStylesColorSwatch
// Dependencies: [27, 33, 4130, 689, 1862, 13588, 4554, 665, 2]
// Exports: default

// Module 13587 (DisplayNameStylesColorSwatch)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let obj = {};
obj = { width: 24, height: 24, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
obj.colorSwatch = obj;
obj.gummySwatch = { flexDirection: "row", overflow: "hidden" };
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorSwatch.tsx");

export default function DisplayNameStylesColorSwatch(colors) {
  colors = colors.colors;
  const tmp = callback();
  if (colors.effectId === require(1862) /* DisplayNameEffect */.DisplayNameEffect.GUMMY) {
    if (colors.length > 0) {
      let obj = {};
      const items = [, ];
      ({ colorSwatch: arr3[0], gummySwatch: arr3[1] } = tmp);
      obj.style = items;
      obj = { colors };
      obj.children = jsx(importDefault(13588), { colors });
      return <View colors={colors} />;
    }
  }
  if (colors.length >= 2) {
    const obj1 = { colors: colors.map((color) => outer1_0(outer1_2[7]).int2hex(color)), start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: tmp.colorSwatch };
    return jsx(importDefault(4554), { colors: colors.map((color) => outer1_0(outer1_2[7]).int2hex(color)), start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: tmp.colorSwatch });
  } else {
    let str = "#000000";
    if (colors.length > 0) {
      obj = require(665) /* pad2 */;
      str = obj.int2hex(colors[0]);
    }
    const obj2 = {};
    const items1 = [tmp.colorSwatch, ];
    const obj3 = { backgroundColor: str };
    items1[1] = obj3;
    obj2.style = items1;
    return <View />;
  }
};
