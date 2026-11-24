// Module ID: 5193
// Function ID: 5194
// Name: GestureDetector
// Dependencies: [21, 5194, 5196, 5197, 5200, 5235]
// Exports: GestureDetector

// Module 5193 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5194 from "module_5194" /* 5194 */;
import ComposedGesture from "ComposedGesture" /* 5196 */;
import Gesture from "Gesture" /* 5197 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5194;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5235).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5200).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
