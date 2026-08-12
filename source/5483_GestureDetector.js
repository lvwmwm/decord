// Module ID: 5483
// Function ID: 5484
// Name: GestureDetector
// Dependencies: [21, 5484, 5486, 5487, 5489, 5521]
// Exports: GestureDetector

// Module 5483 (GestureDetector)
import { jsx } from "jsxProd";


export const GestureDetector = function GestureDetector(gesture) {
  let obj = require(5484) /* useEnsureGestureHandlerRootView */;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof require(5486) /* _isNativeReflectConstruct */.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(5487).BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(5521).NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(5489).GestureDetector, {});
};
