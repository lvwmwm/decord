// Module ID: 5521
// Function ID: 5522
// Dependencies: [5494, 5509, 5485]
// Exports: usePanGesture

// Module 5521
import ComposedGestureName from "ComposedGestureName" /* 5485 */;
import _mod5494 from "module_5494" /* 5494 */;
import _mod5509 from "module_5509" /* 5509 */;

let tmp3;
let tmp4;
function transformPanProps(activeOffsetY) {
  activeOffsetY = activeOffsetY.activeOffsetY;
  if (undefined !== activeOffsetY) {
    const _Array = Array;
    if (Array.isArray(activeOffsetY)) {
      const _HermesInternal3 = HermesInternal;
      activeOffsetY["" + "activeOffsetY" + "Start"] = activeOffsetY[0];
      const _HermesInternal4 = HermesInternal;
      activeOffsetY["" + "activeOffsetY" + "End"] = activeOffsetY[1];
    } else {
      const obj = _mod5494;
      if (obj.maybeUnpackValue(activeOffsetY) < 0) {
        const _HermesInternal2 = HermesInternal;
        activeOffsetY["" + "activeOffsetY" + "Start"] = activeOffsetY;
      } else {
        const _HermesInternal = HermesInternal;
        activeOffsetY["" + "activeOffsetY" + "End"] = activeOffsetY;
      }
    }
    delete activeOffsetY["activeOffsetY"];
  }
  const failOffsetX = activeOffsetY.failOffsetX;
  if (undefined !== failOffsetX) {
    const _Array2 = Array;
    if (Array.isArray(failOffsetX)) {
      const _HermesInternal7 = HermesInternal;
      activeOffsetY["" + "failOffsetX" + "Start"] = failOffsetX[0];
      const _HermesInternal8 = HermesInternal;
      activeOffsetY["" + "failOffsetX" + "End"] = failOffsetX[1];
    } else {
      const obj2 = _mod5494;
      if (obj2.maybeUnpackValue(failOffsetX) < 0) {
        const _HermesInternal6 = HermesInternal;
        activeOffsetY["" + "failOffsetX" + "Start"] = failOffsetX;
      } else {
        const _HermesInternal5 = HermesInternal;
        activeOffsetY["" + "failOffsetX" + "End"] = failOffsetX;
      }
    }
    delete activeOffsetY["failOffsetX"];
  }
  const failOffsetY = activeOffsetY.failOffsetY;
  if (undefined !== failOffsetY) {
    const _Array3 = Array;
    if (Array.isArray(failOffsetY)) {
      const _HermesInternal11 = HermesInternal;
      activeOffsetY["" + "failOffsetY" + "Start"] = failOffsetY[0];
      const _HermesInternal12 = HermesInternal;
      activeOffsetY["" + "failOffsetY" + "End"] = failOffsetY[1];
    } else {
      const obj3 = _mod5494;
      if (obj3.maybeUnpackValue(failOffsetY) < 0) {
        const _HermesInternal10 = HermesInternal;
        activeOffsetY["" + "failOffsetY" + "Start"] = failOffsetY;
      } else {
        const _HermesInternal9 = HermesInternal;
        activeOffsetY["" + "failOffsetY" + "End"] = failOffsetY;
      }
    }
    delete activeOffsetY["failOffsetY"];
  }
  const activeOffsetX = activeOffsetY.activeOffsetX;
  if (undefined !== activeOffsetX) {
    const _Array4 = Array;
    if (Array.isArray(activeOffsetX)) {
      const _HermesInternal15 = HermesInternal;
      activeOffsetY["" + "activeOffsetX" + "Start"] = activeOffsetX[0];
      const _HermesInternal16 = HermesInternal;
      activeOffsetY["" + "activeOffsetX" + "End"] = activeOffsetX[1];
    } else {
      const obj4 = _mod5494;
      if (obj4.maybeUnpackValue(activeOffsetX) < 0) {
        const _HermesInternal14 = HermesInternal;
        activeOffsetY["" + "activeOffsetX" + "Start"] = activeOffsetX;
      } else {
        const _HermesInternal13 = HermesInternal;
        activeOffsetY["" + "activeOffsetX" + "End"] = activeOffsetX;
      }
    }
    delete activeOffsetY["activeOffsetX"];
  }
  const obj5 = _mod5494;
  activeOffsetY.changeEventCalculator = obj5.getChangeEventCalculator(diffCalculator);
  activeOffsetY.fillInDefaultValues = fillInDefaultValues;
  return activeOffsetY;
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
let closure_6 = {};

export function usePanGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_6;
  }
  const obj = _mod5494;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformPanProps);
  const obj2 = _mod5509;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Pan, clonedAndRemappedConfig);
}
