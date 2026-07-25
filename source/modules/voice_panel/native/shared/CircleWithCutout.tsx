// Module ID: 15928
// Function ID: 123123
// Name: getBadgeLeft
// Dependencies: [31, 27, 33, 10467, 8463, 2]

// Module 15928 (getBadgeLeft)
import { PixelRatio } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importAllResult from "result";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = PixelRatio.get();
const memoResult = require("result").memo(function CircleWithCutout(arg0) {
  let alignBadgeEdgeWithCircleEdge;
  let badgeRadius;
  let circleRadius;
  let cutoutPositionInDegrees;
  let cutoutRadius;
  let enableCutout;
  let fill;
  let scaleToPixelDensity;
  ({ cutoutPositionInDegrees, alignBadgeEdgeWithCircleEdge } = arg0);
  ({ fill, circleRadius, cutoutRadius, enableCutout } = arg0);
  if (alignBadgeEdgeWithCircleEdge === undefined) {
    alignBadgeEdgeWithCircleEdge = false;
  }
  ({ badgeRadius, scaleToPixelDensity } = arg0);
  if (scaleToPixelDensity === undefined) {
    scaleToPixelDensity = true;
  }
  let num = 1;
  if (scaleToPixelDensity) {
    num = closure_5;
  }
  const result = circleRadius * num;
  if (null != badgeRadius) {
    const result1 = badgeRadius * num;
  }
  const result2 = 2 * result;
  let obj = require(10467) /* getCutoutCenterX */;
  const cutoutCenterX = obj.getCutoutCenterX(result, cutoutPositionInDegrees);
  let obj1 = require(10467) /* getCutoutCenterX */;
  const cutoutCenterY = obj1.getCutoutCenterY(result, cutoutPositionInDegrees);
  if (alignBadgeEdgeWithCircleEdge) {
    alignBadgeEdgeWithCircleEdge = null != result1;
  }
  let diff = cutoutCenterX;
  let tmp7 = cutoutCenterY;
  if (alignBadgeEdgeWithCircleEdge) {
    diff = 2 * result - result1;
    tmp7 = result1;
  }
  obj = { height: result2, width: result2, style: { transform: items } };
  obj = { scale: 1 / num };
  items = [obj];
  obj1 = {};
  const obj2 = { id: "mask" };
  const items1 = [callback(require(8463) /* inlineStyles */.Rect, { width: result2, height: result2, fill: "white" }), ];
  const obj3 = { cx: diff, cy: tmp7, r: cutoutRadius * num, fill: "black" };
  items1[1] = callback(require(8463) /* inlineStyles */.Circle, obj3);
  obj2.children = items1;
  obj1.children = callback2(require(8463) /* inlineStyles */.Mask, obj2);
  const items2 = [callback(require(8463) /* inlineStyles */.Defs, obj1), ];
  const obj4 = { cx: result, cy: result, r: result, fill };
  let str;
  if (enableCutout) {
    str = "url(#mask)";
  }
  obj4.mask = str;
  items2[1] = callback(require(8463) /* inlineStyles */.Circle, obj4);
  obj.children = items2;
  return callback2(importDefault(8463), obj);
});
let result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/shared/CircleWithCutout.tsx");

export default memoResult;
export const getBadgeLeft = require("getCutoutCenterX").getBadgeLeft;
export const getBadgeTop = require("getCutoutCenterX").getBadgeTop;
