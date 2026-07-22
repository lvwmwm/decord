// Module ID: 15753
// Function ID: 120460
// Name: getBadgeLeft
// Dependencies: []

// Module 15753 (getBadgeLeft)
const PixelRatio = arg1(dependencyMap[1]).PixelRatio;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let closure_5 = PixelRatio.get();
const tmp2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function CircleWithCutout(arg0) {
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
  let obj = arg1(dependencyMap[3]);
  const cutoutCenterX = obj.getCutoutCenterX(result, cutoutPositionInDegrees);
  let obj1 = arg1(dependencyMap[3]);
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
  const items = [obj];
  obj1 = {};
  const obj2 = { id: "mask" };
  const items1 = [callback(arg1(dependencyMap[4]).Rect, { width: result2, height: result2, fill: "white" }), ];
  const obj3 = { cx: diff, cy: tmp7, r: cutoutRadius * num, fill: "black" };
  items1[1] = callback(arg1(dependencyMap[4]).Circle, obj3);
  obj2.children = items1;
  obj1.children = callback2(arg1(dependencyMap[4]).Mask, obj2);
  const items2 = [callback(arg1(dependencyMap[4]).Defs, obj1), ];
  const obj4 = { cx: result, cy: result, r: result, fill };
  let str;
  if (enableCutout) {
    str = "url(#mask)";
  }
  obj4.mask = str;
  items2[1] = callback(arg1(dependencyMap[4]).Circle, obj4);
  obj.children = items2;
  return callback2(importDefault(dependencyMap[4]), obj);
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/voice_panel/native/shared/CircleWithCutout.tsx");

export default memoResult;
export const getBadgeLeft = arg1(dependencyMap[3]).getBadgeLeft;
export const getBadgeTop = arg1(dependencyMap[3]).getBadgeTop;
