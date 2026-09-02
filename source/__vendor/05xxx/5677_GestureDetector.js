// Module ID: 5677
// Function ID: 5678
// Name: GestureDetector
// Dependencies: [21, 5678, 5680, 5681, 5683, 5715]
// Exports: GestureDetector

// Module 5677 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import useEnsureGestureHandlerRootView from "useEnsureGestureHandlerRootView" /* 5678 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 5680 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  let obj = useEnsureGestureHandlerRootView;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _isNativeReflectConstruct.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(5681).BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(5715).NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(5683).GestureDetector, {});
};
