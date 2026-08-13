// Module ID: 5484
// Function ID: 5485
// Name: GestureDetector
// Dependencies: [21, 5485, 5487, 5488, 5490, 5522]
// Exports: GestureDetector

// Module 5484 (GestureDetector)
import { jsx } from "jsxProd";


export const GestureDetector = function GestureDetector(gesture) {
  let obj = require(5485) /* useEnsureGestureHandlerRootView */;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof require(5487) /* _isNativeReflectConstruct */.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(5488).BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(5522).NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(5490).GestureDetector, {});
};
