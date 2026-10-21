// Module ID: 5296
// Function ID: 5297
// Name: GestureDetector
// Dependencies: [21, 5297, 5299, 5300, 5302, 5334]
// Exports: GestureDetector

// Module 5296 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5297 from "module_5297" /* 5297 */;
import ComposedGesture from "ComposedGesture" /* 5299 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 5300 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod5297;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(5334).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5302).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
