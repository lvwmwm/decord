// Module ID: 5444
// Function ID: 5445
// Name: GestureDetector
// Dependencies: [21, 5445, 5447, 5448, 5450, 5482]
// Exports: GestureDetector

// Module 5444 (GestureDetector)
import { jsx } from "jsxProd";


export const GestureDetector = function GestureDetector(gesture) {
  let obj = require(5445) /* useEnsureGestureHandlerRootView */;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof require(5447) /* _isNativeReflectConstruct */.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(5448).BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(5482).NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(5450).GestureDetector, {});
};
