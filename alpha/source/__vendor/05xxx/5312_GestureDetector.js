// Module ID: 5312
// Function ID: 5313
// Name: GestureDetector
// Dependencies: [21, 5313, 5315, 5316, 5318, 5350]
// Exports: GestureDetector

// Module 5312 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5313 from "module_5313" /* 5313 */;
import ComposedGesture from "ComposedGesture" /* 5315 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 5316 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod5313;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(5350).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5318).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
