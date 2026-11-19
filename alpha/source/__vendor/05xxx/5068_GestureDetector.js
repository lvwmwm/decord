// Module ID: 5068
// Function ID: 5069
// Name: GestureDetector
// Dependencies: [21, 5069, 5071, 5072, 5075, 5110]
// Exports: GestureDetector

// Module 5068 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5069 from "module_5069" /* 5069 */;
import ComposedGesture from "ComposedGesture" /* 5071 */;
import Gesture from "Gesture" /* 5072 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5069;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof Gesture.BaseGesture)) {
      const NativeDetector = tmp(5110).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5075).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
