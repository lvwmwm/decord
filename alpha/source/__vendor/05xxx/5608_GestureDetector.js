// Module ID: 5608
// Function ID: 5609
// Name: GestureDetector
// Dependencies: [21, 5609, 5611, 5612, 5615, 5650]
// Exports: GestureDetector

// Module 5608 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5609 from "module_5609" /* 5609 */;
import ComposedGesture from "ComposedGesture" /* 5611 */;
import Gesture from "Gesture" /* 5612 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5609;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5650).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5615).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
