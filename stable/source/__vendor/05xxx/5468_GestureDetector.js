// Module ID: 5468
// Function ID: 5469
// Name: GestureDetector
// Dependencies: [21, 5469, 5471, 5472, 5475, 5510]
// Exports: GestureDetector

// Module 5468 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5469 from "module_5469" /* 5469 */;
import ComposedGesture from "ComposedGesture" /* 5471 */;
import Gesture from "Gesture" /* 5472 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5469;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5510).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5475).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
