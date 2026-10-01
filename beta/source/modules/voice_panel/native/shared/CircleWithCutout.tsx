// Module ID: 17017
// Function ID: 17018
// Name: CircleWithCutout
// Dependencies: [19, 17, 21, 8857, 7909, 2]

// Module 17017 (CircleWithCutout)
import react_native from "react-native" /* 17 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import CircleWithCutoutUtils from "CircleWithCutoutUtils" /* 8857 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let c3;
let closure_4;
const PixelRatio = react_native.PixelRatio;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = PixelRatio.get();
const memoResult = react.memo(function CircleWithCutout(arg0) {
  let Mask;
  let alignBadgeEdgeWithCircleEdge;
  let badgeRadius;
  let circleRadius;
  let cutoutPositionInDegrees;
  let cutoutRadius;
  let enableCutout;
  let fill;
  let items;
  let items1;
  let items2;
  let obj3;
  let obj6;
  let result1;
  let scaleToPixelDensity;
  let str;
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
    result1 = badgeRadius * num;
  }
  const result2 = 2 * result;
  const obj = CircleWithCutoutUtils;
  const cutoutCenterX = obj.getCutoutCenterX(result, cutoutPositionInDegrees);
  const obj2 = CircleWithCutoutUtils;
  const cutoutCenterY = obj2.getCutoutCenterY(result, cutoutPositionInDegrees);
  if (alignBadgeEdgeWithCircleEdge) {
    alignBadgeEdgeWithCircleEdge = null != result1;
  }
  let tmp8 = cutoutCenterY;
  let diff = cutoutCenterX;
  if (alignBadgeEdgeWithCircleEdge) {
    diff = 2 * result - result1;
    tmp8 = result1;
  }
  size = { height: result2, width: result2, style: obj3, children: items2 };
  obj3 = { transform: items };
  items = [];
  const obj4 = { scale: 1 / num };
  items[0] = obj4;
  const obj5 = { children: React3(Mask, obj6) };
  const tmp11 = inlineStylesDefault;
  const Defs = tmp4(7909).Defs;
  obj6 = { id: "mask", children: items1 };
  Mask = tmp4(7909).Mask;
  items1 = [_false(inlineStyles.Rect, { width: result2, height: result2, fill: "white" }), ];
  const obj7 = { cx: diff, cy: tmp8, r: cutoutRadius * num, fill: "black" };
  items1[1] = _false(inlineStyles.Circle, obj7);
  items2 = [_false(Defs, obj5), ];
  const obj8 = { cx: result, cy: result, r: result, fill, mask: str };
  str = undefined;
  const Circle = tmp4(7909).Circle;
  const tmp10 = React3;
  const tmp12 = _false;
  if (enableCutout) {
    str = "url(#mask)";
  }
  items2[1] = tmp12(Circle, obj8);
  return tmp10(tmp11, size);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/shared/CircleWithCutout.tsx");

export default memoResult;
export const getBadgeLeft = CircleWithCutoutUtils.getBadgeLeft;
export const getBadgeTop = CircleWithCutoutUtils.getBadgeTop;
