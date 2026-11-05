// Module ID: 5528
// Function ID: 5529
// Dependencies: [5501, 5518, 5492]
// Exports: useHoverGesture

// Module 5528
import ComposedGestureName from "ComposedGestureName" /* 5492 */;
import _mod5501 from "module_5501" /* 5501 */;
import _mod5518 from "module_5518" /* 5518 */;

let tmp2;
let tmp3;
function transformHoverProps(arg0) {
  const obj = _mod5501;
  arg0.changeEventCalculator = obj.getChangeEventCalculator(diffCalculator);
  arg0.fillInDefaultValues = fillInDefaultValues;
  return arg0;
}
const items = [{ code: "(function diffCalculator_Pnpm_useHoverGestureTs1(current,previous){return{changeX:previous?current.x-previous.x:0,changeY:previous?current.y-previous.y:0};})" }];
[tmp2] = items;
function diffCalculator(arg0, arg1) {
  let num2;
  let num = 0;
  if (arg1) {
    num = arg0.x - arg1.x;
  }
  const obj = { changeX: num, changeY: num2 };
  num2 = 0;
  if (arg1) {
    num2 = arg0.y - arg1.y;
  }
  return obj;
}
diffCalculator.__workletHash = 12913184752331;
diffCalculator.__initData = tmp2;
const items1 = [{ code: "(function fillInDefaultValues_Pnpm_useHoverGestureTs2(event){event.changeX=0;event.changeY=0;})" }];
[tmp3] = items1;
function fillInDefaultValues(arg0) {
  arg0.changeX = 0;
  arg0.changeY = 0;
}
fillInDefaultValues.__workletHash = 8758316487265;
fillInDefaultValues.__initData = tmp3;
const items2 = [["effect", "hoverEffect"]];
const map = new Map(items2);
let closure_6 = {};

export function useHoverGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_6;
  }
  const obj = _mod5501;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformHoverProps);
  const obj2 = _mod5518;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Hover, clonedAndRemappedConfig);
}
