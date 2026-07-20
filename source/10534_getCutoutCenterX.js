// Module ID: 10534
// Function ID: 82324
// Name: getCutoutCenterX
// Dependencies: []
// Exports: default, getBadgeLeft, getBadgeTop

// Module 10534 (getCutoutCenterX)
function getCutoutCenterX(circleRadius, cutoutPositionInDegrees) {
  return circleRadius + circleRadius * Math.sin(cutoutPositionInDegrees * closure_5);
}
function getCutoutCenterY(circleRadius, cutoutPositionInDegrees) {
  return circleRadius - circleRadius * Math.cos(cutoutPositionInDegrees * closure_5);
}
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = Math.PI / 180;
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/voice_panel/native/shared/CircleWithCutoutUtils.tsx");

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
  const items = [callback(arg1(dependencyMap[2]).Rect, { width: result, height: result, fill: "white" }), callback(arg1(dependencyMap[2]).Circle, { cx: tmp2, cy: tmp3, r: cutoutRadius, fill: "black" })];
  obj.children = items;
  obj.children = callback2(arg1(dependencyMap[2]).Mask, obj);
  const items1 = [callback(arg1(dependencyMap[2]).Defs, obj), ];
  const obj1 = { cx: circleRadius, cy: circleRadius, r: circleRadius, fill: circleFillColor };
  let str;
  if (enableCutout) {
    str = "url(#mask)";
  }
  obj1.mask = str;
  items1[1] = callback(arg1(dependencyMap[2]).Circle, obj1);
  obj.children = items1;
  return tmp4(importDefault(dependencyMap[2]), obj);
};
export const getBadgeTop = function getBadgeTop(badgeRadius, buttonRadius, cutoutPositionInDegrees) {
  return getCutoutCenterY(buttonRadius, cutoutPositionInDegrees) - badgeRadius;
};
export const getBadgeLeft = function getBadgeLeft(badgeRadius, buttonRadius, cutoutPositionInDegrees) {
  return getCutoutCenterX(buttonRadius, cutoutPositionInDegrees) - badgeRadius;
};
export { getCutoutCenterX };
export { getCutoutCenterY };
