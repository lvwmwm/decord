// Module ID: 5319
// Function ID: 5320
// Name: GestureDetector
// Dependencies: [21, 5320, 5322, 5323, 5326, 5361]
// Exports: GestureDetector

// Module 5319 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5320 from "module_5320" /* 5320 */;
import ComposedGesture from "ComposedGesture" /* 5322 */;
import Gesture from "Gesture" /* 5323 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5320;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5361).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5326).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
