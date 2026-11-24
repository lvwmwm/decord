// Module ID: 5189
// Function ID: 5190
// Name: GestureDetector
// Dependencies: [21, 5190, 5192, 5193, 5196, 5231]
// Exports: GestureDetector

// Module 5189 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5190 from "module_5190" /* 5190 */;
import ComposedGesture from "ComposedGesture" /* 5192 */;
import Gesture from "Gesture" /* 5193 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5190;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5231).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5196).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
