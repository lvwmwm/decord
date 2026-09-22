// Module ID: 6916
// Function ID: 6917
// Name: GestureDetector
// Dependencies: [21, 6917, 6919, 6920, 6922, 6954]
// Exports: GestureDetector

// Module 6916 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6917 from "module_6917" /* 6917 */;
import _mod6919 from "module_6919" /* 6919 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6917.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6919.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6920).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6954).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6922).GestureDetector, {});
};
