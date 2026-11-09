// Module ID: 5436
// Function ID: 5437
// Name: GestureDetector
// Dependencies: [21, 5437, 5439, 5440, 5443, 5478]
// Exports: GestureDetector

// Module 5436 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5437 from "module_5437" /* 5437 */;
import ComposedGesture from "ComposedGesture" /* 5439 */;
import Gesture from "Gesture" /* 5440 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5437;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5478).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5443).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
