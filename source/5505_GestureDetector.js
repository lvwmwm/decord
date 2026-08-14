// Module ID: 5505
// Function ID: 5506
// Name: GestureDetector
// Dependencies: [21, 5506, 5508, 5509, 5511, 5543]
// Exports: GestureDetector

// Module 5505 (GestureDetector)
import { jsx } from "jsxProd";


export const GestureDetector = function GestureDetector(gesture) {
  let obj = require(5506) /* useEnsureGestureHandlerRootView */;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof require(5508) /* _isNativeReflectConstruct */.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(5509).BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(5543).NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(5511).GestureDetector, {});
};
