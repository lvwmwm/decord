// Module ID: 5315
// Function ID: 5316
// Name: GestureDetector
// Dependencies: [21, 5316, 5318, 5319, 5321, 5353]
// Exports: GestureDetector

// Module 5315 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5316 from "module_5316" /* 5316 */;
import ComposedGesture from "ComposedGesture" /* 5318 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 5319 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5316;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(5353).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5321).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
