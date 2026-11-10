// Module ID: 5438
// Function ID: 5439
// Name: GestureDetector
// Dependencies: [21, 5439, 5441, 5442, 5445, 5480]
// Exports: GestureDetector

// Module 5438 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5439 from "module_5439" /* 5439 */;
import ComposedGesture from "ComposedGesture" /* 5441 */;
import Gesture from "Gesture" /* 5442 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5439;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5480).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5445).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
