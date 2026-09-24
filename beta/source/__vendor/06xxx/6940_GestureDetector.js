// Module ID: 6940
// Function ID: 6941
// Name: GestureDetector
// Dependencies: [21, 6941, 6943, 6944, 6946, 6978]
// Exports: GestureDetector

// Module 6940 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6941 from "module_6941" /* 6941 */;
import _mod6943 from "module_6943" /* 6943 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6941.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6943.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6944).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6978).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6946).GestureDetector, {});
};
