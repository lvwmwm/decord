// Module ID: 13087
// Function ID: 101001
// Name: RoleDot
// Dependencies: [31, 27, 33, 4130, 689, 477, 4549, 4571, 4554, 1327, 2]
// Exports: RoleDot

// Module 13087 (RoleDot)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flexShrink: 0 }, background: { position: "relative" } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.backgroundColor = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.borderBase = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.borderColor = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, opacity: 0.4 };
_createForOfIteratorHelperLoose.dot = { borderRadius: 10, position: "absolute" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, opacity: 0.4 };
let result = require("jsxProd").fileFinishedImporting("design/void/RoleDot/native/RoleDot.tsx");

export const RoleDot = function RoleDot(background) {
  let color;
  let colors;
  let containerStyles;
  let guildId;
  let size;
  ({ color, colors, size } = background);
  if (size === undefined) {
    size = "normal";
  }
  let flag = background.background;
  if (flag === undefined) {
    flag = true;
  }
  ({ containerStyles, guildId } = background);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(4549) /* getFontScale */;
  const fontScale = obj.useFontScale();
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
  const sum = result / 2 + 2;
  const diff = sum - 2;
  obj = {};
  obj = { paddingRight: 2 * fontScale };
  let obj3 = require(477) /* set */;
  if (obj3.isAndroid()) {
    let result1 = 3 * fontScale;
  } else {
    result1 = 2 * fontScale;
  }
  obj.paddingTop = result1;
  obj.height = result;
  obj.container = obj;
  obj.background = { height: result, width: result, padding: (result - sum) / 2 };
  obj.border = { height: sum, width: sum };
  const result2 = diff / 2;
  obj.dot = { height: diff, width: diff, top: result2, left: result2 };
  const obj1 = { style: items };
  items = [tmp.container, obj.container, containerStyles];
  const obj2 = {};
  const items1 = [tmp.background, , ];
  let backgroundColor = null;
  if (flag) {
    backgroundColor = tmp.backgroundColor;
  }
  items1[1] = backgroundColor;
  items1[2] = obj.background;
  obj2.style = items1;
  obj3 = { style: items2 };
  items2 = [tmp.borderBase];
  const obj4 = {};
  const items3 = [tmp.borderColor, obj.border, ];
  const obj5 = {};
  let tmp15;
  if (null != color) {
    tmp15 = color;
  }
  obj5.backgroundColor = tmp15;
  items3[2] = obj5;
  obj4.style = items3;
  obj3.children = callback(View, obj4);
  const items4 = [callback(View, obj3), ];
  if (tmp3) {
    if (null != colors) {
      if (null != colors.secondaryColor) {
        const obj6 = {};
        const items5 = [, , ];
        ({ primaryColor: arr7[0], secondaryColor: arr7[1], tertiaryColor: arr7[2] } = colors);
        obj6.colors = items5.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
        obj6.start = { x: 0, y: 0 };
        obj6.end = { x: 1, y: 0 };
        const items6 = [tmp.dot, obj.dot];
        obj6.style = items6;
        let tmp16Result = callback(importDefault(4554), obj6);
        const tmp23 = importDefault(4554);
      }
      items4[1] = tmp16Result;
      obj2.children = items4;
      obj1.children = closure_5(tmp10, obj2);
      return callback(tmp10, obj1);
    }
  }
  const obj7 = {};
  const items7 = [tmp.dot, obj.dot, ];
  const obj8 = {};
  let tmp18;
  if (null != color) {
    tmp18 = color;
  }
  obj8.backgroundColor = tmp18;
  items7[2] = obj8;
  obj7.style = items7;
  tmp16Result = callback(View, obj7);
};
