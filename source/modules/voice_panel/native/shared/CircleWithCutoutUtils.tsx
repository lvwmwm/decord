// Module ID: 10580
// Function ID: 82613
// Name: getCutoutCenterX
// Dependencies: [31, 33, 8063, 2]
// Exports: default, getBadgeLeft, getBadgeTop

// Module 10580 (getCutoutCenterX)
import "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
function getCutoutCenterX(circleRadius, cutoutPositionInDegrees) {
  return circleRadius + circleRadius * Math.sin(cutoutPositionInDegrees * closure_5);
}
function getCutoutCenterY(circleRadius, cutoutPositionInDegrees) {
  return circleRadius - circleRadius * Math.cos(cutoutPositionInDegrees * closure_5);
}
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = Math.PI / 180;
let result = require("inlineStyles").fileFinishedImporting("modules/voice_panel/native/shared/CircleWithCutoutUtils.tsx");

export default function CircleWithCutout(arg0) {
  let circleFillColor;
  let circleRadius;
  let cutoutPositionInDegrees;
  let cutoutRadius;
  let enableCutout;
  ({ circleRadius, cutoutPositionInDegrees } = arg0);
  const result = 2 * circleRadius;
  ({ cutoutRadius, enableCutout, circleFillColor } = arg0);
  const tmp2 = getCutoutCenterX(circleRadius, cutoutPositionInDegrees);
  let obj = { height: result, width: result };
  const tmp3 = getCutoutCenterY(circleRadius, cutoutPositionInDegrees);
  const tmp4 = callback2;
  obj = {};
  obj = { id: "mask" };
  const items = [callback(require(8063) /* inlineStyles */.Rect, { width: result, height: result, fill: "white" }), callback(require(8063) /* inlineStyles */.Circle, { cx: tmp2, cy: tmp3, r: cutoutRadius, fill: "black" })];
  obj.children = items;
  obj.children = callback2(require(8063) /* inlineStyles */.Mask, obj);
  const items1 = [callback(require(8063) /* inlineStyles */.Defs, obj), ];
  const obj1 = { cx: circleRadius, cy: circleRadius, r: circleRadius, fill: circleFillColor };
  let str;
  if (enableCutout) {
    str = "url(#mask)";
  }
  obj1.mask = str;
  items1[1] = callback(require(8063) /* inlineStyles */.Circle, obj1);
  obj.children = items1;
  return tmp4(importDefault(8063), obj);
};
export const getBadgeTop = function getBadgeTop(badgeRadius, buttonRadius, cutoutPositionInDegrees) {
  return getCutoutCenterY(buttonRadius, cutoutPositionInDegrees) - badgeRadius;
};
export const getBadgeLeft = function getBadgeLeft(badgeRadius, buttonRadius, cutoutPositionInDegrees) {
  return getCutoutCenterX(buttonRadius, cutoutPositionInDegrees) - badgeRadius;
};
export { getCutoutCenterX };
export { getCutoutCenterY };
