// Module ID: 6773
// Function ID: 6774
// Name: GestureDetector
// Dependencies: [21, 6774, 6776, 6777, 6779, 6811]
// Exports: GestureDetector

// Module 6773 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6774 from "module_6774" /* 6774 */;
import _mod6776 from "module_6776" /* 6776 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6774.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6776.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6777).BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6811).NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6779).GestureDetector, {});
};
