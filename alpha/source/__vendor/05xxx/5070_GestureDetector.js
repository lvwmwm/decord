// Module ID: 5070
// Function ID: 5071
// Name: GestureDetector
// Dependencies: [21, 5071, 5073, 5074, 5077, 5112]
// Exports: GestureDetector

// Module 5070 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5071 from "module_5071" /* 5071 */;
import ComposedGesture from "ComposedGesture" /* 5073 */;
import Gesture from "Gesture" /* 5074 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5071;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5112).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5077).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
