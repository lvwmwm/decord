// Module ID: 6394
// Function ID: 6395
// Name: GestureDetector
// Dependencies: [21, 6395, 6397, 6398, 6400, 6432]
// Exports: GestureDetector

// Module 6394 (GestureDetector)
import { jsx } from "jsxProd";


export const GestureDetector = function GestureDetector(gesture) {
  let obj = require(6395) /* useEnsureGestureHandlerRootView */;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof require(6397) /* _isNativeReflectConstruct */.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6398).BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6432).NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6400).GestureDetector, {});
};
