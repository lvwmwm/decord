// Module ID: 5300
// Function ID: 5301
// Name: GestureDetector
// Dependencies: [21, 5301, 5303, 5304, 5306, 5338]
// Exports: GestureDetector

// Module 5300 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5301 from "module_5301" /* 5301 */;
import ComposedGesture from "ComposedGesture" /* 5303 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 5304 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod5301;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(5338).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5306).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
