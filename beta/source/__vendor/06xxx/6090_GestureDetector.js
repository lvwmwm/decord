// Module ID: 6090
// Function ID: 6091
// Name: GestureDetector
// Dependencies: [21, 6091, 6093, 6094, 6096, 6128]
// Exports: GestureDetector

// Module 6090 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6091 from "module_6091" /* 6091 */;
import _mod6093 from "module_6093" /* 6093 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6091.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6093.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6094).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6128).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6096).GestureDetector, {});
};
