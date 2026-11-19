// Module ID: 5076
// Function ID: 5077
// Name: ALLOWED_PROPS
// Dependencies: [32, 19, 5077, 5078, 5089, 5090, 5091, 5093, 5094, 5095, 5072, 5056, 5096, 5054]
// Exports: checkGestureCallbacksForWorklets, extractGestureRelations, hasExternalRelations, useForceRender, useWebEventHandlers

// Module 5076 (ALLOWED_PROPS)
import _mod5054 from "module_5054" /* 5054 */;
import Gesture from "Gesture" /* 5072 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5077 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5078 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5089 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5090 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5091 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5093 */;
import hoverGestureHandlerProps from "hoverGestureHandlerProps" /* 5094 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5095 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

let c3;
let closure_4;
let hasOwnProperty;
let tmp3;
function convertToHandlerTag(handlerTag) {
  let tmp = handlerTag;
  if (typeof handlerTag !== "number") {
    let num;
    if (handlerTag instanceof Gesture.BaseGesture) {
      num = handlerTag.handlerTag;
    } else {
      const current = handlerTag.current;
      num = undefined;
      if (current != null) {
        num = current.handlerTag;
      }
      if (num == null) {
        num = -1;
      }
    }
    tmp = num;
  }
  return tmp;
}
({ useCallback: c3, useRef: closure_4, useState: hasOwnProperty } = react);
let items = [...baseGestureHandlerProps.baseGestureHandlerWithDetectorProps, ...tapGestureHandlerProps.tapGestureHandlerProps, ...panGestureHandlerProps.panGestureHandlerProps, ...panGestureHandlerProps.panGestureHandlerCustomNativeProps, ...longPressGestureHandlerProps.longPressGestureHandlerProps, ...forceTouchGestureHandlerProps.forceTouchGestureHandlerProps, ...flingGestureHandlerProps.flingGestureHandlerProps, ...hoverGestureHandlerProps.hoverGestureHandlerProps, ...nativeViewGestureHandlerProps.nativeViewGestureHandlerProps];
const items1 = [{ code: "(function emptyWorklet_Pnpm_utilsTs1(){})" }];
[tmp3] = items1;
function emptyWorklet() {

}
emptyWorklet.__workletHash = 14308112991912;
emptyWorklet.__initData = tmp3;

export const ALLOWED_PROPS = items;
export function hasExternalRelations(gesturesToAttach) {
  new Set(gesturesToAttach);
  const iter = gesturesToAttach[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let items = [nextResult.config.blocksHandlers, nextResult.config.requireToFail, nextResult.config.simultaneousWith];
    for (const item10026 of items) {
      if (undefined !== item10026) {
        for (const item10033 of item10026) {
          let tmp7 = item10033;
          if (typeof item10033 !== "number") {
            obj3.return();
            obj2.return();
            iter.return();
            let flag = true;
            return true;
          }
          continue;
        }
      }
      continue;
    }
    continue;
  }
  return false;
}
export function extractGestureRelations(item10007) {
  let _Set1;
  let _Set21;
  let _Set31;
  let from2;
  let from3;
  const f88350 = (item) => item > 0;
  const requireToFail = item10007.config.requireToFail;
  let found;
  const _Array = Array;
  const _Set = Set;
  if (requireToFail != null) {
    const mapped = requireToFail.map(convertToHandlerTag);
    if (mapped != null) {
      found = mapped.filter(f88350);
    }
  }
  if (found == null) {
    found = [];
  }
  const obj = { waitFor: from(_Set1), simultaneousHandlers: from2(_Set21), blocksHandlers: from3(_Set31) };
  _Set1 = new _Set(found);
  const simultaneousWith = item10007.config.simultaneousWith;
  let found1;
  const _Array2 = Array;
  from2 = Array.from;
  const _Set2 = Set;
  if (simultaneousWith != null) {
    const mapped1 = simultaneousWith.map(convertToHandlerTag);
    if (mapped1 != null) {
      found1 = mapped1.filter(f88350);
    }
  }
  if (found1 == null) {
    found1 = [];
  }
  _Set21 = new _Set2(found1);
  let found2;
  const _Array3 = Array;
  from3 = Array.from;
  const _Set3 = Set;
  if (item10007.config.blocksHandlers != null) {
    const mapped2 = blocksHandlers.map(convertToHandlerTag);
    if (mapped2 != null) {
      found2 = mapped2.filter(f88350);
    }
  }
  if (found2 == null) {
    found2 = [];
  }
  _Set31 = new _Set3(found2);
  return obj;
}
export function checkGestureCallbacksForWorklets(item10022) {

}
export function useForceRender() {
  const tmp = _slicedToArray(hasOwnProperty(false), 2);
  const first = tmp[0];
  let closure_1 = tmp3;
  const items = [first, tmp[1]];
  return _false(() => {
    closure_1(!first);
  }, items);
}
export function useWebEventHandlers() {
  let obj = {
    onGestureHandlerEvent(nativeEvent) {
      const obj = _mod5054;
      const result = obj.onGestureHandlerEvent(nativeEvent.nativeEvent);
    },
    onGestureHandlerStateChange(nativeEvent) {
      const obj = _mod5054;
      const result = obj.onGestureHandlerEvent(nativeEvent.nativeEvent);
    },
    onGestureHandlerTouchEvent() {

    }
  };
  return React3(obj);
}
