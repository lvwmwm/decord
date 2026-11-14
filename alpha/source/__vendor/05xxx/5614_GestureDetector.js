// Module ID: 5614
// Function ID: 5615
// Name: GestureDetector
// Dependencies: [21, 5615, 5617, 5618, 5621, 5656]
// Exports: GestureDetector

// Module 5614 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5615 from "module_5615" /* 5615 */;
import ComposedGesture from "ComposedGesture" /* 5617 */;
import Gesture from "Gesture" /* 5618 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5615;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5656).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5621).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
