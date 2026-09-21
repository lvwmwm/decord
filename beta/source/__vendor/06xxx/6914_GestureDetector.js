// Module ID: 6914
// Function ID: 6915
// Name: GestureDetector
// Dependencies: [21, 6915, 6917, 6918, 6920, 6952]
// Exports: GestureDetector

// Module 6914 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6915 from "module_6915" /* 6915 */;
import _mod6917 from "module_6917" /* 6917 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6915.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6917.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6918).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6952).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6920).GestureDetector, {});
};
