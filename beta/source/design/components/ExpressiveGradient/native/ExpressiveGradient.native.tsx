// Module ID: 9692
// Function ID: 9693
// Name: ExpressiveGradient
// Dependencies: [19, 17, 21, 576, 4531, 672, 5293, 2]
// Exports: ExpressiveGradient

// Module 9692 (ExpressiveGradient)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import useToken from "useToken" /* 4531 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
({ View: c3, StyleSheet: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { purple: obj2, blue: obj3, green: obj4, pink: obj5, "nitro-pink": obj6, "nitro-green": obj7 };
obj2 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END };
obj3 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_BLUE_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_BLUE_END };
obj4 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_GREEN_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_GREEN_END };
obj5 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_PINK_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_PINK_END };
obj6 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END };
obj7 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END };
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const start2 = { x: 0.5, y: 0 };
const end2 = { x: 0.5, y: 0.5 };
const result = size.fileFinishedImporting("design/components/ExpressiveGradient/native/ExpressiveGradient.native.tsx");

export const ExpressiveGradient = function ExpressiveGradient(color) {
  let backgroundColor;
  let children;
  let items;
  let items2;
  let items3;
  let items4;
  let items5;
  let style;
  let tmp3;
  let str = color.color;
  if (str === undefined) {
    str = "purple";
  }
  let num = color.offsetBottom;
  if (num === undefined) {
    num = 0;
  }
  ({ backgroundColor, children, style } = color);
  if (typeof str !== "object") {
    let str2 = str;
    const tmp = obj;
    if (str == null) {
      str2 = "purple";
    }
    tmp3 = tmp[str2];
  } else {
    tmp3 = str;
  }
  obj = useToken;
  const token = obj.useToken(tmp3.start);
  const obj2 = useToken;
  const token1 = obj2.useToken(tmp3.end);
  const obj3 = useToken;
  const token2 = obj3.useToken(backgroundColor);
  const obj5 = { style: items, children: items5 };
  items = [React3.absoluteFill, style];
  const items1 = [React3.absoluteFill, ];
  let tmp13;
  const obj4 = _modDef672(token2);
  const alphaResult = obj4.alpha(0);
  const cssResult = alphaResult.css();
  if (num > 0) {
    tmp13 = { bottom: `${100 * num}%` };
    const obj6 = { bottom: `${100 * num}%` };
  }
  const obj7 = { style: items1, children: items3 };
  items1[1] = tmp13;
  const obj8 = { style: React3.absoluteFillObject, colors: items2, start, end, pointerEvents: "none" };
  items2 = [token, token1];
  items3 = [hasOwnProperty(LinearGradientDefault, obj8), ];
  const obj9 = { style: React3.absoluteFillObject, colors: items4, start: start2, end: end2, pointerEvents: "none" };
  items4 = [cssResult, token2];
  items3[1] = hasOwnProperty(LinearGradientDefault, obj9);
  items5 = [metroRequire(_false, obj7), children];
  return metroRequire(_false, obj5);
};
