// Module ID: 6350
// Function ID: 6351
// Name: ALLOWED_PROPS
// Dependencies: [32, 19, 6351, 6352, 6362, 6363, 6364, 6366, 6367, 6368, 6347, 6331, 6369, 6329]
// Exports: checkGestureCallbacksForWorklets, extractGestureRelations, useForceRender, useWebEventHandlers

// Module 6350 (ALLOWED_PROPS)
import _mod6329 from "module_6329" /* 6329 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6347 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6351 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6352 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 6362 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6363 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 6364 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6366 */;
import HoverEffect from "HoverEffect" /* 6367 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6368 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

let c3;
let closure_4;
let hasOwnProperty;
function convertToHandlerTag(handlerTag) {
  let tmp = handlerTag;
  if (typeof handlerTag !== "number") {
    let num;
    if (handlerTag instanceof CALLBACK_TYPE.BaseGesture) {
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
let items = [...baseGestureHandlerProps.baseGestureHandlerWithDetectorProps, ...tapGestureHandlerProps.tapGestureHandlerProps, ...panGestureHandlerProps.panGestureHandlerProps, ...panGestureHandlerProps.panGestureHandlerCustomNativeProps, ...longPressGestureHandlerProps.longPressGestureHandlerProps, ...forceTouchGestureHandlerProps.forceTouchGestureHandlerProps, ...flingGestureHandlerProps.flingGestureHandlerProps, ...HoverEffect.hoverGestureHandlerProps, ...nativeViewGestureHandlerProps.nativeViewGestureHandlerProps];
function emptyWorklet() {

}
emptyWorklet.__closure = {};
emptyWorklet.__workletHash = 11436428848425;
emptyWorklet.__initData = { code: "function emptyWorklet_Pnpm_utilsTs1(){}" };

export const ALLOWED_PROPS = items;
export const extractGestureRelations = function extractGestureRelations(item10007) {
  let _Set1;
  let _Set21;
  let _Set31;
  let from2;
  let from3;
  const f92847 = (item) => item > 0;
  const requireToFail = item10007.config.requireToFail;
  let found;
  const _Array = Array;
  const _Set = Set;
  if (requireToFail != null) {
    const mapped = requireToFail.map(convertToHandlerTag);
    if (mapped != null) {
      found = mapped.filter(f92847);
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
      found1 = mapped1.filter(f92847);
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
      found2 = mapped2.filter(f92847);
    }
  }
  if (found2 == null) {
    found2 = [];
  }
  _Set31 = new _Set3(found2);
  return obj;
};
export function checkGestureCallbacksForWorklets(item10022) {

}
export const useForceRender = function useForceRender() {
  const tmp = _slicedToArray(hasOwnProperty(false), 2);
  const first = tmp[0];
  let closure_1 = tmp3;
  const items = [first, tmp[1]];
  return _false(() => {
    closure_1(!first);
  }, items);
};
export const useWebEventHandlers = function useWebEventHandlers() {
  let obj = {
    onGestureHandlerEvent(nativeEvent) {
      const obj = _mod6329;
      const result = obj.onGestureHandlerEvent(nativeEvent.nativeEvent);
    },
    onGestureHandlerStateChange(nativeEvent) {
      const obj = _mod6329;
      const result = obj.onGestureHandlerEvent(nativeEvent.nativeEvent);
    },
    onGestureHandlerTouchEvent() {

    }
  };
  return React3(obj);
};
