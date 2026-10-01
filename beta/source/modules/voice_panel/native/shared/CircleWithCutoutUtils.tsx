// Module ID: 8857
// Function ID: 8858
// Name: CircleWithCutoutUtils
// Dependencies: [19, 21, 7909, 2]
// Exports: default, getBadgeLeft, getBadgeTop, getCutoutCenterX, getCutoutCenterY

// Module 8857 (CircleWithCutoutUtils)
import inlineStyles from "inlineStyles" /* 7909 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = Math.PI / 180;
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/shared/CircleWithCutoutUtils.tsx");

export default function CircleWithCutout(arg0) {
  let Mask;
  let circleFillColor;
  let circleRadius;
  let cutoutPositionInDegrees;
  let cutoutRadius;
  let enableCutout;
  let items;
  let items1;
  let obj2;
  let str;
  ({ circleRadius, cutoutPositionInDegrees } = arg0);
  const result = 2 * circleRadius;
  ({ cutoutRadius, enableCutout, circleFillColor } = arg0);
  const sum = circleRadius + circleRadius * Math.sin(cutoutPositionInDegrees * closure_5);
  const diff = circleRadius - circleRadius * Math.cos(cutoutPositionInDegrees * closure_5);
  size = { height: result, width: result, children: items1 };
  const obj = { children: React3(Mask, obj2) };
  const tmp5 = inlineStylesDefault;
  const Defs = inlineStyles.Defs;
  obj2 = { id: "mask", children: items };
  Mask = inlineStyles.Mask;
  items = [_false(inlineStyles.Rect, { width: result, height: result, fill: "white" }), _false(inlineStyles.Circle, { cx: sum, cy: diff, r: cutoutRadius, fill: "black" })];
  items1 = [_false(Defs, obj), ];
  const obj3 = { cx: circleRadius, cy: circleRadius, r: circleRadius, fill: circleFillColor, mask: str };
  str = undefined;
  const Circle = inlineStyles.Circle;
  const tmp4 = React3;
  const tmp6 = _false;
  if (enableCutout) {
    str = "url(#mask)";
  }
  items1[1] = tmp6(Circle, obj3);
  return tmp4(tmp5, size);
};
export const getBadgeTop = function getBadgeTop(badgeRadius, buttonRadius, arg2) {
  return buttonRadius - buttonRadius * Math.cos(arg2 * closure_5) - badgeRadius;
};
export const getBadgeLeft = function getBadgeLeft(badgeRadius, buttonRadius, arg2) {
  return buttonRadius + buttonRadius * Math.sin(arg2 * closure_5) - badgeRadius;
};
export const getCutoutCenterX = function getCutoutCenterX(result, cutoutPositionInDegrees) {
  return result + result * Math.sin(cutoutPositionInDegrees * closure_5);
};
export const getCutoutCenterY = function getCutoutCenterY(result, cutoutPositionInDegrees) {
  return result - result * Math.cos(cutoutPositionInDegrees * closure_5);
};
