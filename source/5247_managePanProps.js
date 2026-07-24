// Module ID: 5247
// Function ID: 45290
// Name: managePanProps
// Dependencies: [65, 5236, 5234]
// Exports: managePanProps

// Module 5247 (managePanProps)
import importDefaultResult from "_toConsumableArray";

function managePanProps(activeOffsetX) {
  const merged = Object.assign({}, activeOffsetX);
  if (undefined !== activeOffsetX.activeOffsetX) {
    delete tmp.activeOffsetX;
    const _Array = Array;
    activeOffsetX = activeOffsetX.activeOffsetX;
    if (Array.isArray(activeOffsetX.activeOffsetX)) {
      merged.activeOffsetXStart = activeOffsetX[0];
      merged.activeOffsetXEnd = activeOffsetX.activeOffsetX[1];
    } else if (activeOffsetX < 0) {
      merged.activeOffsetXStart = activeOffsetX.activeOffsetX;
    } else {
      merged.activeOffsetXEnd = activeOffsetX.activeOffsetX;
    }
  }
  if (undefined !== activeOffsetX.activeOffsetY) {
    delete tmp.activeOffsetY;
    const _Array2 = Array;
    const activeOffsetY = activeOffsetX.activeOffsetY;
    if (Array.isArray(activeOffsetX.activeOffsetY)) {
      merged.activeOffsetYStart = activeOffsetY[0];
      merged.activeOffsetYEnd = activeOffsetX.activeOffsetY[1];
    } else if (activeOffsetY < 0) {
      merged.activeOffsetYStart = activeOffsetX.activeOffsetY;
    } else {
      merged.activeOffsetYEnd = activeOffsetX.activeOffsetY;
    }
  }
  if (undefined !== activeOffsetX.failOffsetX) {
    delete tmp.failOffsetX;
    const _Array3 = Array;
    const failOffsetX = activeOffsetX.failOffsetX;
    if (Array.isArray(activeOffsetX.failOffsetX)) {
      merged.failOffsetXStart = failOffsetX[0];
      merged.failOffsetXEnd = activeOffsetX.failOffsetX[1];
    } else if (failOffsetX < 0) {
      merged.failOffsetXStart = activeOffsetX.failOffsetX;
    } else {
      merged.failOffsetXEnd = activeOffsetX.failOffsetX;
    }
  }
  if (undefined !== activeOffsetX.failOffsetY) {
    delete tmp.failOffsetY;
    const _Array4 = Array;
    const failOffsetY = activeOffsetX.failOffsetY;
    if (Array.isArray(activeOffsetX.failOffsetY)) {
      merged.failOffsetYStart = failOffsetY[0];
      merged.failOffsetYEnd = activeOffsetX.failOffsetY[1];
    } else if (failOffsetY < 0) {
      merged.failOffsetYStart = activeOffsetX.failOffsetY;
    } else {
      merged.failOffsetYEnd = activeOffsetX.failOffsetY;
    }
  }
  return merged;
}
const items = ["activeOffsetY", "activeOffsetX", "failOffsetY", "failOffsetX", "minDist", "minVelocity", "minVelocityX", "minVelocityY", "minPointers", "maxPointers", "avgTouches", "enableTrackpadTwoFingerGesture", "activateAfterLongPress"];
const items1 = ["activeOffsetYStart", "activeOffsetYEnd", "activeOffsetXStart", "activeOffsetXEnd", "failOffsetYStart", "failOffsetYEnd", "failOffsetXStart", "failOffsetXEnd"];
const obj = { name: "PanGestureHandler" };
const items2 = [];
obj.allowedProps = items2.concat(importDefaultResult(require("combined").baseGestureHandlerProps), items);
obj.config = {};
obj.transformProps = managePanProps;
obj.customNativeProps = items1;

export const panGestureHandlerProps = items;
export const panGestureHandlerCustomNativeProps = items1;
export const panHandlerName = "PanGestureHandler";
export const PanGestureHandler = require("_isNativeReflectConstruct")(obj);
export { managePanProps };
