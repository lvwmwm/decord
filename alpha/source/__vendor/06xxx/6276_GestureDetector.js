// Module ID: 6276
// Function ID: 6277
// Name: GestureDetector
// Dependencies: [21, 6277, 6279, 6280, 6282, 6314]
// Exports: GestureDetector

// Module 6276 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6277 from "module_6277" /* 6277 */;
import _mod6279 from "module_6279" /* 6279 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6277.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6279.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6280).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6314).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6282).GestureDetector, {});
};
