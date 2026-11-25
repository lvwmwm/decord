// Module ID: 5288
// Function ID: 5289
// Name: GestureDetector
// Dependencies: [21, 5289, 5291, 5292, 5295, 5330]
// Exports: GestureDetector

// Module 5288 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5289 from "module_5289" /* 5289 */;
import ComposedGesture from "ComposedGesture" /* 5291 */;
import Gesture from "Gesture" /* 5292 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5289;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5330).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5295).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
