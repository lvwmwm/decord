// Module ID: 5099
// Function ID: 5100
// Name: GestureDetector
// Dependencies: [21, 5100, 5102, 5103, 5106, 5141]
// Exports: GestureDetector

// Module 5099 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5100 from "module_5100" /* 5100 */;
import ComposedGesture from "ComposedGesture" /* 5102 */;
import Gesture from "Gesture" /* 5103 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5100;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5141).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5106).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
