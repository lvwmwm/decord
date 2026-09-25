// Module ID: 6085
// Function ID: 6086
// Name: GestureDetector
// Dependencies: [21, 6086, 6088, 6089, 6091, 6123]
// Exports: GestureDetector

// Module 6085 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6086 from "module_6086" /* 6086 */;
import _mod6088 from "module_6088" /* 6088 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6086.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6088.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6089).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6123).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6091).GestureDetector, {});
};
