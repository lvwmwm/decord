// Module ID: 6908
// Function ID: 6909
// Name: GestureDetector
// Dependencies: [21, 6909, 6911, 6912, 6914, 6946]
// Exports: GestureDetector

// Module 6908 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6909 from "module_6909" /* 6909 */;
import _mod6911 from "module_6911" /* 6911 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6909.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6911.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6912).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6946).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6914).GestureDetector, {});
};
