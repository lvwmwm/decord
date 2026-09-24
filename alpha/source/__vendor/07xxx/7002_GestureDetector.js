// Module ID: 7002
// Function ID: 7003
// Name: GestureDetector
// Dependencies: [21, 7003, 7005, 7006, 7008, 7040]
// Exports: GestureDetector

// Module 7002 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod7003 from "module_7003" /* 7003 */;
import _mod7005 from "module_7005" /* 7005 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod7003.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod7005.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(7006).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(7040).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(7008).GestureDetector, {});
};
