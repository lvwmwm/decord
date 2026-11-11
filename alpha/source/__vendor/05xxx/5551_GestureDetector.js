// Module ID: 5551
// Function ID: 5552
// Name: GestureDetector
// Dependencies: [21, 5552, 5554, 5555, 5558, 5593]
// Exports: GestureDetector

// Module 5551 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5552 from "module_5552" /* 5552 */;
import ComposedGesture from "ComposedGesture" /* 5554 */;
import Gesture from "Gesture" /* 5555 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5552;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5593).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5558).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
