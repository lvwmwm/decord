// Module ID: 8574
// Function ID: 68128
// Name: ExpressiveGradient
// Dependencies: [31, 27, 33, 689, 3834, 666, 4554, 2]
// Exports: ExpressiveGradient

// Module 8574 (ExpressiveGradient)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_3, StyleSheet: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { start: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_PURPLE_START, end: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_PURPLE_END };
obj.purple = obj;
obj = { start: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_BLUE_START, end: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_BLUE_END };
obj.blue = obj;
obj.green = { start: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_GREEN_START, end: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_GREEN_END };
let obj1 = { start: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_GREEN_START, end: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_GREEN_END };
obj.pink = { start: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_PINK_START, end: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_PINK_END };
let obj2 = { start: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_PINK_START, end: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_PINK_END };
obj["nitro-pink"] = { start: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, end: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END };
let obj3 = { start: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, end: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END };
obj["nitro-green"] = { start: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START, end: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END };
let closure_8 = { x: 0, y: 0.5 };
let closure_9 = { x: 1, y: 0.5 };
let closure_10 = { x: 0.5, y: 0 };
let closure_11 = { x: 0.5, y: 0.5 };
const obj4 = { start: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START, end: require("_createForOfIteratorHelperLoose").colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END };
const result = require("jsxProd").fileFinishedImporting("design/components/ExpressiveGradient/native/ExpressiveGradient.native.tsx");

export const ExpressiveGradient = function ExpressiveGradient(color) {
  let backgroundColor;
  let children;
  let style;
  let str = color.color;
  if (str === undefined) {
    str = "purple";
  }
  let num = color.offsetBottom;
  if (num === undefined) {
    num = 0;
  }
  ({ backgroundColor, children, style } = color);
  if ("object" !== typeof str) {
    let str2 = "purple";
    if (null != str) {
      str2 = str;
    }
    let tmp2 = obj[str2];
    const tmp3 = obj;
  } else {
    tmp2 = str;
  }
  obj = require(3834) /* map */;
  const token = obj.useToken(tmp2.start);
  let obj1 = require(3834) /* map */;
  const token1 = obj1.useToken(tmp2.end);
  let obj2 = require(3834) /* map */;
  const token2 = obj2.useToken(backgroundColor);
  let obj3 = importDefault(666)(token2);
  obj = { style: items };
  items = [closure_4.absoluteFill, style];
  obj = {};
  const items1 = [closure_4.absoluteFill, ];
  let tmp11;
  const alphaResult = obj3.alpha(0);
  if (num > 0) {
    obj1 = { bottom: `${100 * num}%` };
    tmp11 = obj1;
  }
  items1[1] = tmp11;
  obj.style = items1;
  obj2 = { style: closure_4.absoluteFillObject, colors: items2, start: closure_8, end: closure_9, pointerEvents: "none" };
  items2 = [token, token1];
  const items3 = [callback(importDefault(4554), obj2), ];
  obj3 = { style: closure_4.absoluteFillObject, colors: items4, start: closure_10, end: closure_11, pointerEvents: "none" };
  items4 = [obj3.alpha(0).css(), token2];
  items3[1] = callback(importDefault(4554), obj3);
  obj.children = items3;
  const items5 = [closure_6(closure_3, obj), children];
  obj.children = items5;
  return closure_6(closure_3, obj);
};
