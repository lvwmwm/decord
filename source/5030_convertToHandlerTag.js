// Module ID: 5030
// Function ID: 42914
// Name: convertToHandlerTag
// Dependencies: []
// Exports: checkGestureCallbacksForWorklets, extractGestureRelations, useForceRender, useWebEventHandlers, validateDetectorChildren

// Module 5030 (convertToHandlerTag)
function convertToHandlerTag(handlerTag) {
  if ("number" === typeof handlerTag) {
    return handlerTag;
  } else if (handlerTag instanceof arg1(dependencyMap[12]).BaseGesture) {
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
let closure_2 = importDefault(dependencyMap[0]);
const importDefaultResult = importDefault(dependencyMap[1]);
const Platform = arg1(dependencyMap[2]).Platform;
({ useCallback: closure_3, useRef: closure_4, useState: closure_5 } = arg1(dependencyMap[3]));
const items = [];
const tmp3 = arg1(dependencyMap[3]);
const importDefaultResultResult = importDefaultResult(arg1(dependencyMap[4]).baseGestureHandlerWithDetectorProps);
const importDefaultResultResult1 = importDefaultResult(arg1(dependencyMap[5]).tapGestureHandlerProps);
const importDefaultResultResult2 = importDefaultResult(arg1(dependencyMap[6]).panGestureHandlerProps);
const importDefaultResultResult3 = importDefaultResult(arg1(dependencyMap[6]).panGestureHandlerCustomNativeProps);
const importDefaultResultResult4 = importDefaultResult(arg1(dependencyMap[7]).longPressGestureHandlerProps);
const importDefaultResultResult5 = importDefaultResult(arg1(dependencyMap[8]).forceTouchGestureHandlerProps);
const importDefaultResultResult6 = importDefaultResult(arg1(dependencyMap[9]).flingGestureHandlerProps);

export const ALLOWED_PROPS = items.concat(importDefaultResultResult, importDefaultResultResult1, importDefaultResultResult2, importDefaultResultResult3, importDefaultResultResult4, importDefaultResultResult5, importDefaultResultResult6, importDefaultResult(arg1(dependencyMap[10]).hoverGestureHandlerProps), importDefaultResult(arg1(dependencyMap[11]).nativeViewGestureHandlerProps));
export const extractGestureRelations = function extractGestureRelations(nextResult) {
  nextResult.config.requireToFail = extractValidHandlerTags(nextResult.config.requireToFail);
  nextResult.config.simultaneousWith = extractValidHandlerTags(nextResult.config.simultaneousWith);
  nextResult.config.blocksHandlers = extractValidHandlerTags(nextResult.config.blocksHandlers);
  return { waitFor: nextResult.config.requireToFail, simultaneousHandlers: nextResult.config.simultaneousWith, blocksHandlers: nextResult.config.blocksHandlers };
};
export function checkGestureCallbacksForWorklets(nextResult) {

}
export function validateDetectorChildren(viewRef) {

}
export const useForceRender = function useForceRender() {
  const tmp = callback(callback3(false), 2);
  const first = tmp[0];
  const arg1 = first;
  const dependencyMap = tmp3;
  const items = [first, tmp[1]];
  return callback2(() => {
    tmp3(!first);
  }, items);
};
export const useWebEventHandlers = function useWebEventHandlers() {
  const obj = {
    onGestureHandlerEvent(nativeEvent) {
      const result = callback(closure_1[15]).onGestureHandlerEvent(nativeEvent.nativeEvent);
    }
  };
  let fn;
  if (obj2.isNewWebImplementationEnabled()) {
    fn = (nativeEvent) => {
      const result = callback(closure_1[15]).onGestureHandlerEvent(nativeEvent.nativeEvent);
    };
  }
  obj.onGestureHandlerStateChange = fn;
  return closure_4(obj);
};
