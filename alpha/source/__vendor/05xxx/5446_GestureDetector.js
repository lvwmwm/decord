// Module ID: 5446
// Function ID: 5447
// Name: GestureDetector
// Dependencies: [21, 5447, 5449, 5450, 5453, 5488]
// Exports: GestureDetector

// Module 5446 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5447 from "module_5447" /* 5447 */;
import ComposedGesture from "ComposedGesture" /* 5449 */;
import Gesture from "Gesture" /* 5450 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5447;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5488).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5453).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
