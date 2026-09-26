// Module ID: 6946
// Function ID: 6947
// Name: GestureDetector
// Dependencies: [21, 6947, 6949, 6950, 6952, 6984]
// Exports: GestureDetector

// Module 6946 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6947 from "module_6947" /* 6947 */;
import _mod6949 from "module_6949" /* 6949 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6947.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6949.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6950).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6984).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6952).GestureDetector, {});
};
