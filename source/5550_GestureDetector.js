// Module ID: 5550
// Function ID: 5551
// Name: GestureDetector
// Dependencies: [21, 5551, 5553, 5554, 5556, 5588]
// Exports: GestureDetector

// Module 5550 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import useEnsureGestureHandlerRootView from "useEnsureGestureHandlerRootView" /* 5551 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 5553 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  let obj = useEnsureGestureHandlerRootView;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _isNativeReflectConstruct.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(5554).BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(5588).NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(5556).GestureDetector, {});
};
