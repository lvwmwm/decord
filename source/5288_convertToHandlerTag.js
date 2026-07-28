// Module ID: 5288
// Function ID: 45429
// Name: convertToHandlerTag
// Dependencies: [57, 65, 31, 5268, 5269, 5281, 5280, 5278, 5284, 5289, 5286, 5290, 5255, 5258, 5253, 5291]
// Exports: checkGestureCallbacksForWorklets, extractGestureRelations, useForceRender, useWebEventHandlers

// Module 5288 (convertToHandlerTag)
import _slicedToArray from "_slicedToArray";
import importDefaultResult from "_toConsumableArray";
import result from "result";

let closure_3;
let closure_4;
let closure_5;
const require = arg1;
function convertToHandlerTag(handlerTag) {
  if ("number" === typeof handlerTag) {
    return handlerTag;
  } else if (handlerTag instanceof require(5290) /* _callSuper */.BaseGesture) {
    let num2 = handlerTag.handlerTag;
  } else {
    const current = handlerTag.current;
    handlerTag = undefined;
    if (null != current) {
      handlerTag = current.handlerTag;
    }
    num2 = -1;
    if (null != handlerTag) {
      num2 = handlerTag;
    }
  }
}
function extractValidHandlerTags(blocksHandlers) {
  let found;
  if (null != blocksHandlers) {
    const mapped = blocksHandlers.map(convertToHandlerTag);
    if (null != mapped) {
      found = mapped.filter((arg0) => arg0 > 0);
    }
  }
  if (null == found) {
    found = [];
  }
  return Array.from(new Set(found));
}
({ useCallback: closure_3, useRef: closure_4, useState: closure_5 } = result);
let items = [];
const importDefaultResultResult = importDefaultResult(require("combined").baseGestureHandlerWithDetectorProps);
const importDefaultResultResult1 = importDefaultResult(require("items").tapGestureHandlerProps);
const importDefaultResultResult2 = importDefaultResult(require("managePanProps").panGestureHandlerProps);
const importDefaultResultResult3 = importDefaultResult(require("managePanProps").panGestureHandlerCustomNativeProps);
const importDefaultResultResult4 = importDefaultResult(require("items").longPressGestureHandlerProps);
const importDefaultResultResult5 = importDefaultResult(require("_isNativeReflectConstruct").forceTouchGestureHandlerProps);
const importDefaultResultResult6 = importDefaultResult(require("items").flingGestureHandlerProps);
let closure_6 = { code: "function emptyWorklet_Pnpm_utilsTs1(){}" };
const combined = items.concat(importDefaultResultResult, importDefaultResultResult1, importDefaultResultResult2, importDefaultResultResult3, importDefaultResultResult4, importDefaultResultResult5, importDefaultResultResult6, importDefaultResult(require("_isNativeReflectConstruct").hoverGestureHandlerProps), importDefaultResult(require("items").nativeViewGestureHandlerProps));
const __workletHash = (() => {
  function emptyWorklet() {

  }
  emptyWorklet.__closure = {};
  emptyWorklet.__workletHash = 11436428848425;
  emptyWorklet.__initData = closure_6;
  return emptyWorklet;
})().__workletHash;

export const ALLOWED_PROPS = combined;
export const extractGestureRelations = function extractGestureRelations(nextResult) {
  nextResult.config.requireToFail = extractValidHandlerTags(nextResult.config.requireToFail);
  nextResult.config.simultaneousWith = extractValidHandlerTags(nextResult.config.simultaneousWith);
  nextResult.config.blocksHandlers = extractValidHandlerTags(nextResult.config.blocksHandlers);
  return { waitFor: nextResult.config.requireToFail, simultaneousHandlers: nextResult.config.simultaneousWith, blocksHandlers: nextResult.config.blocksHandlers };
};
export function checkGestureCallbacksForWorklets(nextResult) {

}
export const useForceRender = function useForceRender() {
  const tmp = callback(callback3(false), 2);
  const first = tmp[0];
  const dependencyMap = tmp3;
  const items = [first, tmp[1]];
  return callback2(() => {
    tmp3(!first);
  }, items);
};
export const useWebEventHandlers = function useWebEventHandlers() {
  const obj = {
    onGestureHandlerEvent(nativeEvent) {
      const result = outer1_0(outer1_1[14]).onGestureHandlerEvent(nativeEvent.nativeEvent);
    }
  };
  let fn;
  if (obj2.isNewWebImplementationEnabled()) {
    fn = (nativeEvent) => {
      const result = outer1_0(outer1_1[14]).onGestureHandlerEvent(nativeEvent.nativeEvent);
    };
  }
  obj.onGestureHandlerStateChange = fn;
  return closure_4(obj);
};
