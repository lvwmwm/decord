// Module ID: 6286
// Function ID: 6287
// Name: GestureDetector
// Dependencies: [21, 6287, 6289, 6290, 6292, 6324]
// Exports: GestureDetector

// Module 6286 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6287 from "module_6287" /* 6287 */;
import _mod6289 from "module_6289" /* 6289 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6287.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6289.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6290).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6324).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6292).GestureDetector, {});
};
