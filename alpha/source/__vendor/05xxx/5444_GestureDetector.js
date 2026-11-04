// Module ID: 5444
// Function ID: 5445
// Name: GestureDetector
// Dependencies: [21, 5445, 5447, 5448, 5451, 5486]
// Exports: GestureDetector

// Module 5444 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5445 from "module_5445" /* 5445 */;
import ComposedGesture from "ComposedGesture" /* 5447 */;
import Gesture from "Gesture" /* 5448 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5445;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5486).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5451).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
