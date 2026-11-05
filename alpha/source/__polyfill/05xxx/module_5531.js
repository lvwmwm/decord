// Module ID: 5531
// Function ID: 5532
// Dependencies: [32, 5474, 5501, 5518, 5492]
// Exports: usePanGesture

// Module 5531
import reanimatedWrapper from "reanimatedWrapper" /* 5474 */;
import ComposedGestureName from "ComposedGestureName" /* 5492 */;
import _mod5501 from "module_5501" /* 5501 */;
import _mod5518 from "module_5518" /* 5518 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let tmp3;
let tmp4;
function transformOffsetProp(iter, activeOffsetX) {
  let tmp10;
  let tmp9;
  if (undefined !== iter[activeOffsetX]) {
    const _Array = Array;
    if (Array.isArray(iter[activeOffsetX])) {
      const _HermesInternal4 = HermesInternal;
      iter["" + activeOffsetX + "Start"] = iter[activeOffsetX][0];
      const _HermesInternal5 = HermesInternal;
      iter["" + activeOffsetX + "End"] = iter[activeOffsetX][1];
    } else {
      const Reanimated = reanimatedWrapper.Reanimated;
      let isSharedValueResult;
      const tmp3 = require;
      if (Reanimated != null) {
        isSharedValueResult = Reanimated.isSharedValue(iter);
      }
      if (isSharedValueResult) {
        const tmp3Result = tmp3(5501);
        const _HermesInternal2 = HermesInternal;
        [tmp9, tmp10] = tmp3Result.splitSingleOffset(iter[activeOffsetX].value);
        iter["" + activeOffsetX + "Start"] = tmp9;
        const _HermesInternal3 = HermesInternal;
        iter["" + activeOffsetX + "End"] = tmp10;
        _slicedToArray(tmp3Result.splitSingleOffset(iter[activeOffsetX].value), 2);
      } else {
        let str = "End";
        if (iter[activeOffsetX] < 0) {
          str = "Start";
        }
        const _HermesInternal = HermesInternal;
        iter["" + activeOffsetX + str] = iter[activeOffsetX];
      }
    }
    delete tmp[tmp2];
  }
}
function transformPanProps(iter) {
  transformOffsetProp(iter, "activeOffsetY");
  transformOffsetProp(iter, "failOffsetX");
  transformOffsetProp(iter, "failOffsetY");
  transformOffsetProp(iter, "activeOffsetX");
  const obj = _mod5501;
  iter.changeEventCalculator = obj.getChangeEventCalculator(diffCalculator);
  iter.fillInDefaultValues = fillInDefaultValues;
  return iter;
}
const items = [["minDistance", "minDist"], ["averageTouches", "avgTouches"]];
const map = new Map(items);
const items1 = [{ code: "(function diffCalculator_Pnpm_usePanGestureTs1(current,previous){return{changeX:previous?current.translationX-previous.translationX:current.translationX,changeY:previous?current.translationY-previous.translationY:current.translationY};})" }];
[tmp3] = items1;
function diffCalculator(translationX, translationX2) {
  let diff;
  let diff1;
  translationX = translationX.translationX;
  if (translationX2) {
    diff = translationX - translationX2.translationX;
  } else {
    diff = translationX;
  }
  const translationY = translationX.translationY;
  const obj = { changeX: diff, changeY: diff1 };
  if (translationX2) {
    diff1 = translationY - translationX2.translationY;
  } else {
    diff1 = translationY;
  }
  return obj;
}
diffCalculator.__workletHash = 15159965948275;
diffCalculator.__initData = tmp3;
const items2 = [{ code: "(function fillInDefaultValues_Pnpm_usePanGestureTs2(event){event.changeX=0;event.changeY=0;})" }];
[tmp4] = items2;
function fillInDefaultValues(arg0) {
  arg0.changeX = 0;
  arg0.changeY = 0;
}
fillInDefaultValues.__workletHash = 1036941275160;
fillInDefaultValues.__initData = tmp4;
let closure_8 = {};

export function usePanGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_8;
  }
  const obj = _mod5501;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformPanProps);
  const obj2 = _mod5518;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Pan, clonedAndRemappedConfig);
}
