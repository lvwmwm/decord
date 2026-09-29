// Module ID: 6256
// Function ID: 6257
// Name: GestureDetector
// Dependencies: [21, 6257, 6259, 6260, 6262, 6294]
// Exports: GestureDetector

// Module 6256 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6257 from "module_6257" /* 6257 */;
import _mod6259 from "module_6259" /* 6259 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6257.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6259.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6260).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6294).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6262).GestureDetector, {});
};
