// Module ID: 7000
// Function ID: 7001
// Name: GestureDetector
// Dependencies: [21, 7001, 7003, 7004, 7006, 7038]
// Exports: GestureDetector

// Module 7000 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod7001 from "module_7001" /* 7001 */;
import _mod7003 from "module_7003" /* 7003 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod7001.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod7003.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(7004).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(7038).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(7006).GestureDetector, {});
};
