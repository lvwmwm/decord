// Module ID: 5466
// Function ID: 5467
// Name: GestureDetector
// Dependencies: [21, 5467, 5469, 5470, 5473, 5508]
// Exports: GestureDetector

// Module 5466 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5467 from "module_5467" /* 5467 */;
import ComposedGesture from "ComposedGesture" /* 5469 */;
import Gesture from "Gesture" /* 5470 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5467;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5508).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5473).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
