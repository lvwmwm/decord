// Module ID: 5275
// Function ID: 5276
// Name: GestureDetector
// Dependencies: [21, 5276, 5278, 5279, 5281, 5313]
// Exports: GestureDetector

// Module 5275 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5276 from "module_5276" /* 5276 */;
import ComposedGesture from "ComposedGesture" /* 5278 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 5279 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod5276;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(5313).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5281).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
