// Module ID: 5604
// Function ID: 5605
// Name: GestureDetector
// Dependencies: [21, 5605, 5607, 5608, 5611, 5646]
// Exports: GestureDetector

// Module 5604 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5605 from "module_5605" /* 5605 */;
import ComposedGesture from "ComposedGesture" /* 5607 */;
import Gesture from "Gesture" /* 5608 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5605;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5646).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5611).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
